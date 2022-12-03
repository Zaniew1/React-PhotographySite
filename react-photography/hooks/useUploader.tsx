import {useState} from "react"
import {firebaseStorage} from '../Firebase/firebase-config'
import {getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import {SelectedFileToUploadType, UploadErrorType} from '../Types/types';
const typesOfFile: string[] = ['image/png', 'image/jpeg', 'image/jpg'];

export const useUploader = (selectedPicture: File, pathToStorage:string, )=>{
    const [selectedFile, setSelectedFile] = useState<SelectedFileToUploadType>(null);

    if(selectedPicture && typesOfFile.includes(selectedPicture.type) ){
    setSelectedFile(selectedPicture);
    //stworzenie nowej instancji pliku w storze
    const imageRef = ref(firebaseStorage, pathToStorage );
    uploadBytes(imageRef, selectedPicture);
    console.log('succesfully added');
    }
      
    
    
}
