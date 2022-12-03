import { ChangeEvent, useState, useEffect } from 'react';
import classes from './UploadForm.module.css'
import { SelectedFileToUploadType , UploadErrorType} from '../../Types/types';
import { ProgressBar } from '../Uploader/ProgressBar';
import {ref, uploadBytes, listAll, getDownloadURL} from 'firebase/storage'
import { firebaseStorage, firebaseFirestore } from '../../Firebase/firebase-config';
import { useUploader } from '../../hooks/useUploader';
type ImageListType = string[] 
export const UploadForm: React.FC= (props) =>{
    // stan do przechowywania pobranego pliku
    const [selectedFile, setSelectedFile] = useState<SelectedFileToUploadType>(null);
    //stowrzenie referencji do miejsca do którego będziemy pushować zdjęcia
    const imageRef = ref(firebaseStorage, 'mainSlider/');
    // state do przechowywania wszystkich urlów zdjęć
    const [imageList, setImageList] = useState<ImageListType>([])
    // typy dopuszczonych formatów zdjęć 
    const typesOfFile: string[] = ['image/png', 'image/jpeg', 'image/jpg'];
    // state do zarządzania błędami 
    const [error, setError] = useState<UploadErrorType>("");
    // handler do uploadowania zdjęć na inpucie
    const uploadHandler = (e: ChangeEvent) =>{
        const target = e.target as HTMLInputElement;
        // pobrany plik
        let selectedPicture: File = (target.files as FileList)[0];
        // jeżeli pobrany plik istnieje i jest poprawnego formatu
        if(selectedPicture ){
            useUploader(selectedPicture, `mainSlider/${selectedPicture}`)
            // setSelectedFile(selectedPicture);
            // //stworzenie nowej instancji pliku w storze
            // const imageRef = ref(firebaseStorage, `mainSlider/${selectedPicture.name }`);
            // // wysłanie pliku do magazynu
            // uploadBytes(imageRef, selectedPicture).then((snapshot)=>{
            //     // pobranie wszystkich urlów z danego magazynu
            //    getDownloadURL(snapshot.ref).then((url)=>{
            //     // pobranie wszystkich urlów z magazynu i wrzuecenie do stanu imagelist
            //     setImageList((prev)=> [...prev, url])

            //    })
            // })
        }
        else{setSelectedFile(null)
            setError('Please select: png, jpg or jpeg  file')}
        }

        useEffect(()=>{
            // pobranie wszystkich urlów z tego magazynu który wybierzemy
            listAll(imageRef).then((response)=>{
                response.items.forEach(item=>{
                    // pobranie wszystkich urlów
                    getDownloadURL(item).then(url => {
                        // przypisanie wszystkich urlów od stanu ImageList
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