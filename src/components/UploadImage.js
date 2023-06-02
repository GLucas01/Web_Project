import React, { useState } from 'react';
import potrace from 'potrace';

const convertToSvg = (file) => {
  const reader = new FileReader();

  reader.onload = (event) => {
    const image = new Image();
    image.src = event.target.result;

    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height;

      const context = canvas.getContext('2d');
      context.drawImage(image, 0, 0);

      const imageData = context.getImageData(0, 0, image.width, image.height);

      const bitmap = potrace.bitmap(imageData.width, imageData.height);
      bitmap.data = new Uint8Array(imageData.data.buffer);

      const svg = potrace.getSVG(bitmap);
      console.log(svg);
    };
  };

  reader.readAsDataURL(file);
};

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
      const imageUrl = convertToSvg(selectedFile);
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