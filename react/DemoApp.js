/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import IntlTelInput from './IntlTelInput';

const errorMap = [
  "Invalid number",
  "Invalid country code",
  "Too short",
  "Too long",
  "Invalid number",
];

const DemoApp = () => {
  const [isValid, setIsValid] = useState(null);
  const [number, setNumber] = useState(null);
  const [errorCode, setErrorCode] = useState(null);
  const [notice, setNotice] = useState(null);
  
  const handleSubmit = () => {
    if (isValid) {
      setNotice(`Valid number: ${number}`);
    } else {
      const errorMessage = errorMap[errorCode] || "Invalid number";
      setNotice(errorMessage);
    }
  };
  
  return (
    <form>
      <IntlTelInput
        setNumber={setNumber}
        setIsValid={setIsValid}
        setErrorCode={setErrorCode}
        initOptions={{
          initialCountry: "us",
          utilsScript: "../build/js/utils.js",
        }}
       />
      <button type="button" onClick={handleSubmit}>Validate</button>
      {notice && <div className="notice">{notice}</div>}
    </form>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<DemoApp />);