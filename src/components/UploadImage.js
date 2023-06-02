import React, { useState } from 'react';

const generateImageUrl = (file) => {
  return URL.createObjectURL(file);
};

const UploadImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const[imageUrl, setImageUrl] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Effectuez ici les opérations nécessaires avec l'image sélectionnée
    if (selectedFile) {
      // Faites quelque chose avec l'image, par exemple l'envoyer à un serveur
      const imageUrl = generateImageUrl(selectedFile);
      setImageUrl(imageUrl);

      console.log('Image sélectionnée :', selectedFile);
    }
  };

  return (
    <div>  
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Envoyer</button>
      </form>
    {imageUrl && <img src = {imageUrl} alt = "Image selectionnée" width={50} height={50} />}
    </div>
  );
};

export default UploadImage;