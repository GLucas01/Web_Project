import React, { useEffect, useState } from "react";
import { X } from "react-feather";

import InputControl from "./InputControl";

import styles from "../styles/Editor.module.css";

function Editor(props) {
  const sections = props.sections;
  const information = props.information;

  const [activeSectionKey, setActiveSectionKey] = useState(
    Object.keys(sections)[0]
  );
  const [activeInformation, setActiveInformation] = useState(
    information[sections[Object.keys(sections)[0]]]
  );
  const [activeDetailIndex, setActiveDetailIndex] = useState(0);
  const [sectionTitle, setSectionTitle] = useState(
    sections[Object.keys(sections)[0]]
  );
  const [values, setValues] = useState({
    name: activeInformation?.detail?.name || "",
    title: activeInformation?.detail?.title || "",
    website: activeInformation?.detail?.website || "",
    linkedin: activeInformation?.detail?.linkedin || "",
    github: activeInformation?.detail?.github || "",
    codepen: activeInformation?.detail?.codepen || "",
    phone: activeInformation?.detail?.phone || "",
    email: activeInformation?.detail?.email || "",
  })

  const handlePointUpdate = (value, index) => {
    const tempValues = { ...values };
    if (!Array.isArray(tempValues.points)) tempValues.points = [];
    tempValues.points[index] = value;
    setValues(tempValues);
  };
  const basicInfoBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Nom"
          placeholder=""
          value={values.name}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Prénom"
          value={values.title}
          placeholder=""
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Linkedin"
          type="link"
          value={values.linkedin}
          placeholder=""
          onChange={(event) =>
            setValues((prev) => ({ ...prev, linkedin: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}></div>
      <div className={styles.row}>
        <InputControl
          label="Email"
          type="email"
          value={values.email}
          placeholder=""
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label=" Téléphone"
          type="tel"
          value={values.phone}
          placeholder=""
          onChange={(event) =>
            setValues((prev) => ({ ...prev, phone: event.target.value }))
          }
        />
      </div>
    </div>
  );
  
  const workExpBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Intitulé du travail"
          placeholder=""
          value={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
        <InputControl
          label="Nom de l'entreprise"
          placeholder=""
          value={values.companyName}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, companyName: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Adresse"
          placeholder=""
          value={values.location}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, location: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Date de début"
          type="date"
          value={values.startDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))
          }
        />
        <InputControl
          label="Date de fin"
          type="date"
          value={values.endDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, endDate: event.target.value }))
          }
        />
      </div>
  
      <div className={styles.column}>
        <label>Description des tâches</label>
        <InputControl
          placeholder="Ligne 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="Ligne 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="Ligne 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
      </div>
    </div>
  );
  
  const educationBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Nom de la formation"
          value={values.title}
          placeholder=""
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
      </div>
      <InputControl
        label="Nom de l'école"
        value={values.college}
        placeholder=""
        onChange={(event) =>
          setValues((prev) => ({ ...prev, college: event.target.value }))
        }
      />
      <div className={styles.row}>
        <InputControl
          label="Date de début"
          type="date"
          placeholder=""
          value={values.startDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))
          }
        />
        <InputControl
          label="Date de fin"
          type="date"
          placeholder=""
          value={values.endDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, endDate: event.target.value }))
          }
        />
      </div>
    </div>
  );
  
  const skillsBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Compétence 1"
          value={values.skill1}
          placeholder=""
          onChange={(event) =>
            setValues((prev) => ({ ...prev, skill1: event.target.value }))
          }
        />
        <InputControl
          label="Compétence 2"
          value={values.skill2}
          placeholder=""
          onChange={(event) =>
            setValues((prev) => ({ ...prev, skill2: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Compétence 3"
          value={values.skill3}
          placeholder=""
          onChange={(event) =>
            setValues((prev) => ({ ...prev, skill3: event.target.value }))
          }
        />
        <InputControl
          label="Compétence 4"
          value={values.skill4}
          placeholder=""
          onChange={(event) =>
            setValues((prev) => ({ ...prev, skill4: event.target.value }))
          }
        />
      </div>
    </div>
  );
  

  

  const generateBody = () => {
    switch (sections[activeSectionKey]) {
      case sections.basicInfo:
        return basicInfoBody;
      case sections.workExp:
        return workExpBody;
      case sections.education:
        return educationBody;
      case sections.skillsBody:
        return skillsBody;
      default:
        return null;
    }
  };

  const handleSubmission = () => {
    switch (sections[activeSectionKey]) {
      case sections.basicInfo: {
        const tempDetail = {
          name: values.name,
          title: values.title,
          website: values.website,
          linkedin: values.linkedin,
          github: values.github,
          codepen: values.codepen,
          email: values.email,
          phone: values.phone,
        };
  
        props.setInformation((prev) => ({
          ...prev,
          [sections.basicInfo]: {
            ...prev[sections.basicInfo],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.workExp: {
        const tempDetail = {
          certificationLink: values.certificationLink,
          title: values.title,
          startDate: values.startDate,
          endDate: values.endDate,
          companyName: values.companyName,
          location: values.location,
          points: values.points,
        };
        const tempDetails = [...information[sections.workExp]?.details];
        tempDetails[activeDetailIndex] = tempDetail;
  
        props.setInformation((prev) => ({
          ...prev,
          [sections.workExp]: {
            ...prev[sections.workExp],
            details: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
  
      case sections.education: {
        const tempDetail = {
          title: values.title,
          college: values.college,
          startDate: values.startDate,
          endDate: values.endDate,
        };
        const tempDetails = [...information[sections.education]?.details];
        tempDetails[activeDetailIndex] = tempDetail;
  
        props.setInformation((prev) => ({
          ...prev,
          [sections.education]: {
            ...prev[sections.education],
            details: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
  
      case sections.skills: {
        const tempDetail = {
          skill1: values.skill1,
          skill2: values.skill2,
          skill3: values.skill3,
          skill4: values.skill4,
        };
  
        props.setInformation((prev) => ({
          ...prev,
          [sections.skills]: {
            ...prev[sections.skills],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }
    }
  };
  

  const handleAddNew = () => {
    const details = activeInformation?.details;
    if (!details) return;
    const lastDetail = details.slice(-1)[0];
    if (!Object.keys(lastDetail).length) return;
    details?.push({});

    props.setInformation((prev) => ({
      ...prev,
      [sections[activeSectionKey]]: {
        ...information[sections[activeSectionKey]],
        details: details,
      },
    }));
    setActiveDetailIndex(details?.length - 1);
  };

  const handleDeleteDetail = (index) => {
    const details = activeInformation?.details
      ? [...activeInformation?.details]
      : "";
    if (!details) return;
    details.splice(index, 1);
    props.setInformation((prev) => ({
      ...prev,
      [sections[activeSectionKey]]: {
        ...information[sections[activeSectionKey]],
        details: details,
      },
    }));

    setActiveDetailIndex((prev) => (prev === index ? 0 : prev - 1));
  };

  useEffect(() => {
    const activeInfo = information[sections[activeSectionKey]];
    setActiveInformation(activeInfo);
    setSectionTitle(sections[activeSectionKey]);
    setActiveDetailIndex(0);
    setValues({
      name: activeInfo?.detail?.name || "",

      overview: activeInfo?.details
        ? activeInfo.details[0]?.overview || ""
        : "",

      link: activeInfo?.details ? activeInfo.details[0]?.link || "" : "",

      

      companyName: activeInfo?.details
        ? activeInfo.details[0]?.companyName || ""
        : "",

      college: activeInfo?.details
        ? activeInfo.details[0]?.college || ""
        : "",

      location: activeInfo?.details
        ? activeInfo.details[0]?.location || ""
        : "",

      startDate: activeInfo?.details
        ? activeInfo.details[0]?.startDate || ""
        : "",

      endDate: activeInfo?.details ? activeInfo.details[0]?.endDate || "" : "",

      points: activeInfo?.details
        ? activeInfo.details[0]?.points
          ? [...activeInfo.details[0]?.points]
          : ""
        : activeInfo?.points
          ? [...activeInfo.points]
          : "",

      title: activeInfo?.details
        ? activeInfo.details[0]?.title || ""
        : activeInfo?.detail?.title || "",

      

      

      

      phone: activeInfo?.detail?.phone || "",

      email: activeInfo?.detail?.email || "",

     
    });
  }, [activeSectionKey]);

  useEffect(() => {
    setActiveInformation(information[sections[activeSectionKey]]);
  }, [information]);

  useEffect(() => {
    const details = activeInformation?.details;
    if (!details) return;

    const activeInfo = information[sections[activeSectionKey]];
    setValues({
      overview: activeInfo.details[activeDetailIndex]?.overview || "",
      link: activeInfo.details[activeDetailIndex]?.link || "",
      certificationLink:
        activeInfo.details[activeDetailIndex]?.certificationLink || "",
      companyName: activeInfo.details[activeDetailIndex]?.companyName || "",
      location: activeInfo.details[activeDetailIndex]?.location || "",
      startDate: activeInfo.details[activeDetailIndex]?.startDate || "",
      endDate: activeInfo.details[activeDetailIndex]?.endDate || "",
      points: activeInfo.details[activeDetailIndex]?.points || "",
      title: activeInfo.details[activeDetailIndex]?.title || "",
      linkedin: activeInfo.details[activeDetailIndex]?.linkedin || "",
      college: activeInfo.details[activeDetailIndex]?.college || "",
    });
  }, [activeDetailIndex]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {Object.keys(sections)?.map((key) => (
          <div
            className={`${styles.section} ${activeSectionKey === key ? styles.active : ""
              }`}
            key={key}
            onClick={() => setActiveSectionKey(key)}
          >
            {sections[key]}
          </div>
        ))}
      </div>

      <div className={styles.body}>
       

        <div className={styles.chips}>
          {activeInformation?.details
            ? activeInformation?.details?.map((item, index) => (
              <div
                className={`${styles.chip} ${activeDetailIndex === index ? styles.active : ""
                  }`}
                key={item.title + index}
                onClick={() => setActiveDetailIndex(index)}
              >
                <p>
                  {sections[activeSectionKey]} {index + 1}
                </p>
                <X
                  onClick={(event) => {
                    event.stopPropagation();
                    handleDeleteDetail(index);
                  }}
                />
              </div>
            ))
            : ""}
          {activeInformation?.details &&
            activeInformation?.details?.length > 0 ? (
            <div className={styles.new} onClick={handleAddNew}>
              +New
            </div>
          ) : (
            ""
          )}
        </div>

        {generateBody()}

        <button onClick={handleSubmission}>Soumettre</button>
      </div>
    </div>
  );
}

export default Editor;
