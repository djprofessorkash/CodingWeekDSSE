import { useState } from "react";
import ContactForm from "./ContactForm";
import ResponseModal from "./ResponseModal";
import "./App.css";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [spamDetected, setSpamDetected] = useState(false);

  return (
    <div className="App">
      <ContactForm setSubmitted={setSubmitted} setSpamDetected={setSpamDetected}/>
      {submitted ? <ResponseModal spamDetected={spamDetected} /> : null}
    </div>
  );
}

export default App;
