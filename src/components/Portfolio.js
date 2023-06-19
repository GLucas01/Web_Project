import React, { Component, useState } from 'react'
import UploadCv from './UploadCv';
import ListPdf from './ListPdf';




function Portfolio() {
    const [newUpload, setNewUpload] = useState(0);
    return (
       <section className="projects">
            <h1 id='Portfolio'>CV</h1>
                <p>Ajouter un CV :</p>
                <UploadCv newUpload={newUpload} setNewUpload={setNewUpload} />                  
                <p>Liste des CVs realisés :</p>
                <ListPdf newUpload={newUpload}/>                      
        </section>
        )
    }


export default Portfolio


