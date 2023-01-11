import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("Choose File");
    const [uploadedFile, setUploadedFile] = useState({});
    const [errorMessage, setErrorMessage] = useState(null);

    const handleChange = e => {
        const selectedFile = e.target.files[0];
        if (selectedFile.name.endsWith('.csv')) {
            setFile(selectedFile);
            setFileName(selectedFile.name);
            setErrorMessage(null);
        } else {
            setErrorMessage("Invalid file type. Please select a .csv file.");
            setFileName("Choose File");
        }
    };

    const handleSubmit = async e => {
        e.preventDefault();
        if (!file) {
            setErrorMessage("Please select a file to upload");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await axios.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setUploadedFile(res.data);
        } catch (err) {
            if (err.response.status === 500) {
                console.log("There was a problem with the server");
            } else {
                console.log(err.response.data.msg);
            }
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="custom-file mb-4">
                    <input
                        type="file"
                        className="custom-file-input"
                        id="customFile"
                        onChange={handleChange}
                    />
                    <label className="custom-file-label" htmlFor="customFile">
                        {fileName}
                    </label>
                </div>
                {errorMessage && <p className="text-danger">{errorMessage}</p>}
                <input
                    type="submit"
                    value="Upload"
                    className="btn btn-primary btn-block"
                />
            </form>
            {uploadedFile ? <div>{uploadedFile.fileName} has been uploaded</div> : null}
        </>
    );
};

export default FileUpload;
