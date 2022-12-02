import { ChangeEvent, useState, useEffect } from 'react';
import classes from './UploadForm.module.css'
import { SelectedFileToUploadType , UploadErrorType} from '../../Types/types';
import { ProgressBar } from '../Uploader/ProgressBar';
import {ref, uploadBytes, listAll, getDownloadURL} from 'firebase/storage'
import { firebaseStorage, firebaseFirestore } from '../../Firebase/firebase-config';
type ImageListType = string[] 
export const UploadForm: React.FC= (props) =>{
    const [selectedFile, setSelectedFile] = useState<SelectedFileToUploadType>(null);
    const imageRef = ref(firebaseStorage, 'mainSlider/')
    const [imageList, setImageList] = useState<ImageListType>([])
    const typesOfFile: string[] = ['image/png', 'image/jpeg', 'image/jpg'];
    const [error, setError] = useState<UploadErrorType>("");
    const uploadHandler = (e: ChangeEvent) =>{
        const target = e.target as HTMLInputElement;
        let selectedPicture: File = (target.files as FileList)[0];
        if(selectedPicture && typesOfFile.includes(selectedPicture.type) ){
            setSelectedFile(selectedPicture);
            const imageRef = ref(firebaseStorage, `mainSlider/${selectedPicture.name }`);
            uploadBytes(imageRef, selectedPicture).then((snapshot)=>{
               getDownloadURL(snapshot.ref).then((url)=>{
                setImageList((prev)=> [...prev, url])

               })
            })
        }
        else{setSelectedFile(null)
            setError('Please select: png, jpg or jpeg  file')}
        }

        useEffect(()=>{
            listAll(imageRef).then((response)=>{
                response.items.forEach(item=>{
                    getDownloadURL(item).then(url => {
                        setImageList((prev)=> [...prev, url])
                    })
                })
            })
        }, [])
    return (<form>
        <label>
        <input type="file" onChange={uploadHandler}/>
        <span>+</span>
        </label>
        <div className={classes.information}>
            {imageList}
            {error && < div className={classes.error}>{error}</div>}
            {selectedFile && <ProgressBar file={selectedFile} setFile={setSelectedFile}/>}
            {selectedFile && < div className={classes.selectedFile}>{selectedFile.name}</div>}

        </div>
    </form>)
}