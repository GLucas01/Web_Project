import React, { useState } from 'react';
import styles from "../styles/Body.module.css";

function CVForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [experience, setExperience] = useState('');
  const [associativeExperience, setAssociativeExperience] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [languages, setLanguages] = useState('');
  const [skills, setSkills] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      address,
      email,
      phone,
      experience,
      associativeExperience,
      hobbies,
      languages,
      skills,
    };

    console.log(formData);
    // Envoyer les données à un serveur, les stocker dans une base de données, etc.

    setFirstName('');
    setLastName('');
    setAddress('');
    setEmail('');
    setPhone('');
    setExperience('');
    setAssociativeExperience('');
    setHobbies('');
    setLanguages('');
    setSkills('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">Prénom :</label>
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />

      <label htmlFor="lastName">Nom :</label>
      <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />

      <label htmlFor="address">Adresse :</label>
      <input
        type="text"
        id="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />

      <label htmlFor="email">Email :</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="phone">Téléphone :</label>
      <input
        type="tel"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />

      <label htmlFor="experience">Expérience :</label>
      <textarea
        id="experience"
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
        required
      ></textarea>

      <label htmlFor="associativeExperience">Expérience associative :</label>
      <textarea
        id="associativeExperience"
        value={associativeExperience}
        onChange={(e) => setAssociativeExperience(e.target.value)}
        required
      ></textarea>

      <label htmlFor="hobbies">Loisirs :</label>
      <textarea
        id="hobbies"
        value={hobbies}
        onChange={(e) => setHobbies(e.target.value)}
        required
      ></textarea>

      <label htmlFor="languages">Langues :</label>
      <textarea
        id="languages"
        value={languages}
        onChange={(e) => setLanguages(e.target.value)}
        required
      ></textarea>

      <label htmlFor="skills">Compétences :</label>
      <textarea
        id="skills"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        required
      ></textarea>

      <button type="submit">Soumettre</button>
    </form>
  );
}

export default CVForm;
