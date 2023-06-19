import React from 'react';
import styles from "../styles/CVForm.css";

function CVForm({ user, setUser }) {
  const handleSubmit = (e) => {
    e.preventDefault();


    console.log(user);

    
  };

  const handleChange = (field, value) => {
    setUser(prevUser => ({
      ...prevUser,
      [field]: value
    }));
  };

  const engagement1Words = user.engagement1 ? user.engagement1.split(' ') : [];
  const engagement2Words = user.engagement2 ? user.engagement2.split(' ') : [];

  if (engagement1Words.length > 10 ) {
   
    setUser(prevUser => ({
      ...prevUser,
      engagement1: ''
    
    }));
  }
  if (engagement2Words.length > 10 ) {
   
    setUser(prevUser => ({
      ...prevUser,
      engagement2: ''
    
    }));
  }

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 60 }, (_, index) => currentYear - index);  

  const description1Words = user.description1 ? user.description1.split(' ') : [];
  if (description1Words.length > 8 ) {
   
    setUser(prevUser => ({
      ...prevUser,
      description1: ''
    
    }));
  }

  const description2Words = user.description2 ? user.description2.split(' ') : [];
  if (description2Words.length > 8 ) {
   
    setUser(prevUser => ({
      ...prevUser,
      description2: ''
    
    }));
  }

  const description3Words = user.description3 ? user.description3.split(' ') : [];
  if (description3Words.length > 8 ) {
   
    setUser(prevUser => ({
      ...prevUser,
      description3: ''
    
    }));
  }

  return (
    
    <form onSubmit={handleSubmit}>
    
    
    
    
    
    <div className="infos-personnelles">
    <h2>Informations personnelles</h2>
    <div className="colonne">
      <label htmlFor="prenom">Prénom :</label>
      <input
        type="text"
        id="prenom"
        value={user.prenom}
        onChange={(e) => handleChange('prenom', e.target.value)}
        required
      />

      <label htmlFor="nom">Nom :</label>
      <input
        type="text"
        id="nom"
        value={user.nom}
        onChange={(e) => handleChange('nom', e.target.value)}
        required
      />

      <label htmlFor="adresse">Adresse :</label>
      <input
        type="text"
        id="adresse"
        value={user.adresse}
        onChange={(e) => handleChange('adresse', e.target.value)}
        required
      />

      <label htmlFor="email">Email :</label>
      <input
        type="email"
        id="email"
        value={user.email}
        onChange={(e) => handleChange('email', e.target.value)}
        required
      />

      <label htmlFor="telephone">Téléphone :</label>
      <input
        type="tel"
        id="telephone"
        value={user.telephone}
        onChange={(e) => handleChange('telephone', e.target.value)}
        required
      />
      <label htmlFor="loisirs">Loisir 1 :</label>
      <textarea
        id="loisirs"
        value={user.loisirs}
        onChange={(e) => handleChange('loisirs', e.target.value)}
        required
      ></textarea>

      <label htmlFor="loisirs2">Loisir 2 :</label>
      <textarea
        id="loisirs2"
        value={user.loisirs2}
        onChange={(e) => handleChange('loisirs2', e.target.value)}
        required
      ></textarea>
      </div>
      </div>
      
      
      
      
      
      
      
      <div className="formation">
      <h2>Formation</h2>
      <div className="colonne">
      <label htmlFor="etablissement1">Nom de l'établissement 1:</label>
      <input
        type="text"
        id="etablissement1"
        value={user.etablissement1}
        onChange={(e) => handleChange('etablissement1', e.target.value)}
        required
      />
      <label htmlFor="anneeDebut1">Année de début :</label>
      <select
        id="anneeDebut1"
        value={user.anneeDebut1}
        onChange={(e) => handleChange('anneeDebut1', e.target.value)}
        required
      >
        <option value="">Sélectionner une année</option>
        {years.map((year) => (
          <option value={year.toString()} key={year}>
            {year}
          </option>
        ))}
      </select>

      <label htmlFor="anneeFin1">Année de fin :</label>
      <select
        id="anneeFin1"
        value={user.anneeFin1}
        onChange={(e) => handleChange('anneeFin1', e.target.value)}
        required
      >
        <option value="">Sélectionner une année</option>
        {years.map((year) => (
          <option value={year.toString()} key={year}>
            {year}
          </option>
        ))}
      </select>
      <label htmlFor="formation1">Diplôme 1:</label>
      <input
        type="text"
        id="formation1"
        value={user.formation1}
        onChange={(e) => handleChange('formation1', e.target.value)}
        required
      />
      

      <label htmlFor="etablissement2">Nom de l'établissement 2:</label>
      <input
        type="text"
        id="etablissement2"
        value={user.etablissement2}
        onChange={(e) => handleChange('etablissement2', e.target.value)}
        required
      />

      <label htmlFor="anneeDebut2">Année de début :</label>
      <select
        id="anneeDebut2"
        value={user.anneeDebut2}
        onChange={(e) => handleChange('anneeDebut2', e.target.value)}
        required
      >
        <option value="">Sélectionner une année</option>
        {years.map((year) => (
          <option value={year.toString()} key={year}>
            {year}
          </option>
        ))}
      </select>

      <label htmlFor="anneeFin2">Année de fin :</label>
      <select
        id="anneeFin2"
        value={user.anneeFin2}
        onChange={(e) => handleChange('anneeFin2', e.target.value)}
        required
      >
        <option value="">Sélectionner une année</option>
        {years.map((year) => (
          <option value={year.toString()} key={year}>
            {year}
          </option>
        ))}
      </select>

      <label htmlFor="formation2">Diplôme 2:</label>
      <input
        type="text"
        id="formation2"
        value={user.formation2}
        onChange={(e) => handleChange('formation2', e.target.value)}
        required
      />

      <label htmlFor="etablissement3">Nom de l'établissement 3:</label>
      <input
        type="text"
        id="etablissement3"
        value={user.etablissement3}
        onChange={(e) => handleChange('etablissement3', e.target.value)}
        required
      />

      <label htmlFor="anneeDebut3">Année de début :</label>
      <select
        id="anneeDebut3"
        value={user.anneeDebut3}
        onChange={(e) => handleChange('anneeDebut3', e.target.value)}
        required
      >
        <option value="">Sélectionner une année</option>
        {years.map((year) => (
          <option value={year.toString()} key={year}>
            {year}
          </option>
        ))}
      </select>

      <label htmlFor="anneeFin3">Année de fin :</label>
      <select
        id="anneeFin3"
        value={user.anneeFin3}
        onChange={(e) => handleChange('anneeFin3', e.target.value)}
        required
      >
        <option value="">Sélectionner une année</option>
        {years.map((year) => (
          <option value={year.toString()} key={year}>
            {year}
          </option>
        ))}
      </select>
      

     

      <label htmlFor="formation3">Diplôme 3:</label>
      <input
        type="text"
        id="formation3"
        value={user.formation3}
        onChange={(e) => handleChange('formation3', e.target.value)}
        required
      />
      </div>
      </div>
      
      
      
      
      
      
      
      <div className="experience">
      <h2>Experience </h2>
      <div className="colonne">
      <label htmlFor="entreprise1">Entreprise :</label>
      <input
        type="text"
        id="entreprise1"
        value={user.entreprise1}
        onChange={(e) => handleChange('entreprise1', e.target.value)}
        required
      />
      <label htmlFor="anneeDebut4">Année de début :</label>
      <select
        id="anneeDebut4"
        value={user.anneeDebut4}
        onChange={(e) => handleChange('anneeDebut4', e.target.value)}
        required
      >
        <option value="">Sélectionner une année</option>
        {years.map((year) => (
          <option value={year.toString()} key={year}>
            {year}
          </option>
        ))}
      </select>

      <label htmlFor="anneeFin4">Année de fin :</label>
      <select
        id="anneeFin4"
        value={user.anneeFin4}
        onChange={(e) => handleChange('anneeFin4', e.target.value)}
        required
      >
        <option value="">Sélectionner une année</option>
        {years.map((year) => (
          <option value={year.toString()} key={year}>
            {year}
          </option>
        ))}
      </select>
      <label htmlFor="description1">Description du travail réalisé (max 8 mots):</label>
      <textarea
        id="description1"
        value={user.description1}
        onChange={(e) => handleChange('description1', e.target.value)}
        required
      />

      <label htmlFor="entreprise2">Entreprise :</label>
      <input
        type="text"
        id="entreprise2"
        value={user.entreprise2}
        onChange={(e) => handleChange('entreprise2', e.target.value)}
        required
      />
      <label htmlFor="anneeDebut5">Année de début :</label>
      <select
        id="anneeDebut5"
        value={user.anneeDebut5}
        onChange={(e) => handleChange('anneeDebut5', e.target.value)}
        required
      >
        <option value="">Sélectionner une année</option>
        {years.map((year) => (
          <option value={year.toString()} key={year}>
            {year}
          </option>
        ))}
      </select>

      <label htmlFor="anneeFin5">Année de fin :</label>
      <select
        id="anneeFin5"
        value={user.anneeFin5}
        onChange={(e) => handleChange('anneeFin5', e.target.value)}
        required
      >
        <option value="">Sélectionner une année</option>
        {years.map((year) => (
          <option value={year.toString()} key={year}>
            {year}
          </option>
        ))}
      </select>
      <label htmlFor="description2">Description du travail réalisé (max 8 mots):</label>
      <textarea
        id="description2"
        value={user.description2}
        onChange={(e) => handleChange('description2', e.target.value)}
        required
      />

      <label htmlFor="entreprise3">Entreprise :</label>
      <input
        type="text"
        id="entreprise3"
        value={user.entreprise3}
        onChange={(e) => handleChange('entreprise3', e.target.value)}
        required
      />
      <label htmlFor="anneeDebut6">Année de début :</label>
      <select
        id="anneeDebut6"
        value={user.anneeDebut6}
        onChange={(e) => handleChange('anneeDebut6', e.target.value)}
        required
      >
        <option value="">Sélectionner une année</option>
        {years.map((year) => (
          <option value={year.toString()} key={year}>
            {year}
          </option>
        ))}
      </select>

      <label htmlFor="anneeFin6">Année de fin :</label>
      <select
        id="anneeFin6"
        value={user.anneeFin6}
        onChange={(e) => handleChange('anneeFin6', e.target.value)}
        required
      >
        <option value="">Sélectionner une année</option>
        {years.map((year) => (
          <option value={year.toString()} key={year}>
            {year}
          </option>
        ))}
      </select>
      <label htmlFor="description3">Description du travail réalisé (max 8 mots):</label>
      <textarea
        id="description3"
        value={user.description3}
        onChange={(e) => handleChange('description3', e.target.value)}
        required
      />

      <label htmlFor="experienceAssociative1">Expérience associative 1:</label>
      <textarea
        id="experienceAssociative1"
        value={user.experienceAssociative1}
        onChange={(e) => handleChange('experienceAssociative1', e.target.value)}
        required
      ></textarea>

      <label htmlFor="engagement1">Description de l'expérience ( max 10 mots) :</label>
      <textarea
        id="engagement1"
        value={user.engagement1}
        onChange={(e) => handleChange('engagement1', e.target.value)}
        required
      ></textarea>

      <label htmlFor="experienceAssociative2">Expérience associative 2:</label>
      <textarea
        id="experienceAssociative2"
        value={user.experienceAssociative2}
        onChange={(e) => handleChange('experienceAssociative2', e.target.value)}
        required
      ></textarea>

     

      <label htmlFor="engagement2">Description de l'expérience ( max 10 mots) :</label>
      <textarea
        id="engagement2"
        value={user.engagement2}
        onChange={(e) => handleChange('engagement2', e.target.value)}
        required
      ></textarea>
      </div>
      </div>
      
      
      
      
      
      <div className="comp">
      <h2>Compétences </h2>
      <div className="colonne">
      <label htmlFor="langues">Langues LV1 :</label>
      <textarea
        id="langues"
        value={user.langues}
        onChange={(e) => handleChange('langues', e.target.value)}
        required
      ></textarea>
      <label htmlFor="languesLv1Niveau">Niveau :</label>
      <select
        id="languesLv1Niveau"
        value={user.languesLv1Niveau}
        onChange={(e) => handleChange('languesLv1Niveau', e.target.value)}
        required
      >
        <option value="débutant">Débutant</option>
        <option value="intermédiaire">Intermédiaire</option>
        <option value="expérimenté">Expérimenté</option>
      </select>

      <label htmlFor="langues2">Langues LV2 :</label>
      <textarea
        id="langues2"
        value={user.langues2}
        onChange={(e) => handleChange('langues2', e.target.value)}
        required
      ></textarea>
      <label htmlFor="languesLv2Niveau">Niveau :</label>
      <select
        id="languesLv2Niveau"
        value={user.languesLv2Niveau}
        onChange={(e) => handleChange('languesLv2Niveau', e.target.value)}
        required
      >
        <option value="débutant">Débutant</option>
        <option value="intermédiaire">Intermédiaire</option>
        <option value="expérimenté">Expérimenté</option>
      </select>

      <label htmlFor="competences1">Compétence 1:</label>
      <textarea
        id="competences1"
        value={user.competences1}
        onChange={(e) => handleChange('competences1', e.target.value)}
        required
      ></textarea>

      <label htmlFor="competences2">Compétence 2:</label>
      <textarea
        id="competences2"
        value={user.competences2}
        onChange={(e) => handleChange('competences2', e.target.value)}
        required
      ></textarea>

      <label htmlFor="competences3">Compétence 3:</label>
      <textarea
        id="competences3"
        value={user.competences3}
        onChange={(e) => handleChange('competences3', e.target.value)}
        required
      ></textarea>

      <label htmlFor="competences4">Compétence 4:</label>
      <textarea
        id="competences4"
        value={user.competences4}
        onChange={(e) => handleChange('competences4', e.target.value)}
        required
      ></textarea>

      <label htmlFor="competences5">Compétence 5:</label>
      <textarea
        id="competences5"
        value={user.competences5}
        onChange={(e) => handleChange('competences5', e.target.value)}
        required
      ></textarea>

      <label htmlFor="permisB">Permis B :</label>
      <input
        type="checkbox"
        id="permisB"
        checked={user.permisB}
        onChange={(e) => handleChange('permisB', e.target.checked)}
      />
      </div>
      </div>
    </form>
  );
}

export default CVForm
