import {useState, useEffect} from "react"
import { UploadProgress, UploadError, UploadUrl } from "../Types/types";
import {firebaseStorage, firebaseFirestore} from '../Firebase/firebase-config'
import {getDownloadURL, ref, uploadBytesResumable, } from 'firebase/storage';
import { collection, getDocs, add  } from "firebase/firestore";
export const useUploader= (file:any) =>{
    
    const [progress, setProgress] = useState<UploadProgress>();
    const [error, setError] = useState<UploadError>(null);
    const [url, setUrl] = useState<UploadUrl>(null);
    
    useEffect(()=>{
        const storageRef = ref(firebaseStorage, file.name);
        console.log(storageRef)
        const allPictureUrls = collection(firebaseFirestore, 'images' );
        console.log(allPictureUrls)
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed', (snap:any)=>{
            let percentage: number = (snap.bytesTransferred / snap.totalBytes)* 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url: string = await getDownloadURL(uploadTask.snapshot.ref)
            allPictureUrls.add({url, createdAt})
            setUrl(url);
        });
    }, [file]);
    return {progress, url, error}
}