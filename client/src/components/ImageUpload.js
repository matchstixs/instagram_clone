import React, { useState } from 'react';
import {Button} from "@material-ui/core";
import { storage, db } from '../firebase';

const ImageUpload =() => {
    const [progress, setProgress] = useState(0);
    const [caption, setCaption] = useState('');
    const [imageAsFile, setImageAsFile] = useState('')

    // image handler
    const handleImage = (e) => {
         const image = e.target.files[0]
         setImageAsFile(imageAsFile => (image))
     };

    const handleUpload = () => {
        const uploadTask = storage.ref(`posts/${imageAsFile.name}`).put(imageAsFile);
        
        uploadTask.on('state_changed',
        (snapshot) => {
            // progress function
            const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
        }, (err) => {
            // error catcher
            console.log(err);
        }, () => {
            // uploads to firebase storage
            storage
                .ref("images")
                .child(imageAsFile.name)
                .getDownloadURL()
                .then(url => {
                // Add a new document with a generated id
                db.collection("image").add({
                        caption: caption,
                        imageUrl: url
                })
                
                // PROGRESS RESET
                setProgress(0);
                setCaption("")
                setImageAsFile(null);
                })
        })
    };


    return (
        <div>
            <div>
                <progress value={progress} max="100" />
                <input 
                type="text" 
                placeholder="Description..." 
                onChange={event => setCaption(event.target.value)}
                value={caption} 
                />
                {/* image input */}
                <input type="file" onChange={handleImage} />
                <Button onClick={handleUpload}>Upload</Button>
            </div>
        </div>
    );

}

export default ImageUpload