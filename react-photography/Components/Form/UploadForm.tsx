import { useState } from 'react';
import classes from './UploadForm.module.css'
import { SelectedFileToUpload , SelectedPictureeToUpload, UploadError} from '../../Types/types';
import { ProgressBar } from '../Uploader/ProgressBar';
export const UploadForm: React.FC= (props) =>{
    const [selectedFile, setSelectedFile] = useState<SelectedFileToUpload>(null);
    const typesOfFile: string[] = ['image/png', 'image/jpeg', 'image/jpg'];
    const [error, setError] = useState<UploadError>("");
    const uploadHandler = (e: any) =>{
        let selectedPicture:SelectedPictureeToUpload = e.target.files[0];
        if(selectedPicture && typesOfFile.includes(selectedPicture.type) ){
            setSelectedFile(selectedPicture);
        }
        else{setSelectedFile(null)
            setError('Please select: png, jpg or jpeg  file')}
        }
    return (<form>
        <label>
        <input type="file" onChange={uploadHandler}/>
        <span>+</span>
        </label>
        <div className={classes.information}>
            {error && < div className={classes.error}>{error}</div>}
            {selectedFile && <ProgressBar file={selectedFile} setFile={setSelectedFile}/>}
            {selectedFile && < div className={classes.selectedFile}>{selectedFile.name}</div>}

        </div>
    </form>)
}