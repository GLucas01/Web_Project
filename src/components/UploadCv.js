import React, { useState } from 'react';
import axios from 'axios';

const UploadCv = ({newUpload, setNewUpload}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      console.log('Aucun fichier sélectionné');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('pdfFile', selectedFile);

      const response = await axios.post('/upload-pdf', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data); // Réponse du serveur
      setNewUpload(newUpload+1);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <button onClick={handleUpload}>Envoyer le fichier PDF</button>
    </div>
  );
};

export default UploadCv;
