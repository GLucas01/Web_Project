import React, { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import { Download } from "react-feather";                     //on importe les dépendances

import Editor from "./Editor";

import styles from "../styles/Body.module.css";

function Body() {
  const sections = {                                  // définis les différentes sections du cv
    basicInfo: "Infos personelles",
    workExp: "Expériences",
    education: "Education",
    skills: "Compétences", // Nouvelle section ajoutée
  };
  const resumeRef = useRef();

  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.skills]: { // Nouvelle section ajoutée
      id: sections.skills,
      sectionTitle: sections.skills,
      details: [],
    },
  });

  return (
    <div className={styles.container}>
      <p className={styles.heading}>Formulaire de remplissage du CV</p>
      <div className={styles.toolbar}></div>
      <div className={styles.main}>
        <Editor
          sections={sections}
          information={resumeInformation}
          setInformation={setResumeInformation}
        />
      </div>
    </div>
  );
}

export default Body;
