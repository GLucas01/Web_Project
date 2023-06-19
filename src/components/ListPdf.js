import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from './UserContext';
import axios from 'axios';
import '../styles/Main.css'
import PdfPicture from '../assets/pdf.png';



function ListPdf(newUpload) {
  const {user, setUser} = useContext(UserContext);
  const [pdfLinks, setPdfLinks] = useState([]);

  const fetchPdfLinks = async (id) => {
    try {
      const response = await axios.get(`/getpdf/${id}`);
      const serverUrl = 'http://localhost:3001'; // URL de votre serveur Express
      const pdfLinksFormatted = response.data.map((link) => serverUrl + link);
      setPdfLinks(pdfLinksFormatted);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPdfLinks(user.sub);
  }, [newUpload]);

  return (
    <section className="projects">
      <div className="container">
        {pdfLinks.map((link, index) => (
          <a key={index} href={link} target="_blank" rel="noopener noreferrer">           
            <img src={PdfPicture} width="200" height="200" alt="Pybot"/><p>{link.split('/pdf/')[1]}</p>
          </a>
      ))}
  </div>
     
</section>
  );
};
export default ListPdf;