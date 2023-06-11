import React, { useState } from 'react';
import styles from "../styles/Body.module.css";

function CVForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [experience, setExperience] = useState('');
  const [education, setEducation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez traiter les données du formulaire, telles que les envoyer à un serveur ou les afficher dans la console.
    console.log({
      name,
      email,
      phone,
      experience,
      education,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nom :</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
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

      <label htmlFor="education">Formation :</label>
      <textarea
        id="education"
        value={education}
        onChange={(e) => setEducation(e.target.value)}
        required
      ></textarea>

      <button type="submit">Soumettre</button>
    </form>
  );
}

export default CVForm;
