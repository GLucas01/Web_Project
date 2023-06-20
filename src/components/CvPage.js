import React, { useState, useEffect } from "react";
import CVForm from "./CVForm";
import PdfCreator from "./PdfCreator";
import Header from "./Header";

function CVPage() {
  const [user, setUser] = useState({});
  useEffect(() => {
    document.title = "CV Creator";
  }, []);
  return (
    <div>
      <Header />
      <CVForm user={user} setUser={setUser} />
      <PdfCreator user={user} />
    </div>
  );
}

export default CVPage;
