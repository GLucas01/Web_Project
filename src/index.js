import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './components/UserContext';
import HomePage from './components/HomePage';
import CVPage from './components/CVPage';
import ProfilePage from './components/ProfilePage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/*On entoure bien le code de UserProvider pour le contexte */}
      <UserProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cvcreator" element={<CVPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes> {/* The various pages will be displayed by the `Main` component. */}
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
