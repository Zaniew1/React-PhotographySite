import {useState, useEffect} from "react"
import { UploadProgressType, UploadErrorType, UploadUrlType } from "../Types/types";
import {firebaseStorage, firebaseFirestore} from '../Firebase/firebase-config'
import {getDownloadURL, ref, uploadBytesResumable, } from 'firebase/storage';
import { collection, doc,  serverTimestamp,  setDoc} from "firebase/firestore";
import {SnapType} from '../Types/types';
// export type UploadedFileType = {
//     children: React.ReactNode,
//     name: string
// };
export const useUploader = (file: any ) =>{
    // narazie musi zostać any
    
    const [progress, setProgress] = useState<UploadProgressType>();
    const [error, setError] = useState<UploadErrorType>("");
    const [url, setUrl] = useState<UploadUrlType>("");
    useEffect( ()=>{
        const storageRef = ref(firebaseStorage, file.name);
        const allPictureUrls = collection(firebaseFirestore, 'mainSlider' );
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed', (snap: SnapType)=>{
            let percentage: number = (snap.bytesTransferred / snap.totalBytes)* 100 ;
            setProgress(percentage);
        }, (err) => {
            setError(String(err));
        }, async () => {
            const url: string = await getDownloadURL(uploadTask.snapshot.ref)
            await setDoc(doc(allPictureUrls), {url, createdAt: serverTimestamp() })
            setUrl(url);
        });
    }, [file]);
    return {progress, url, error}
}