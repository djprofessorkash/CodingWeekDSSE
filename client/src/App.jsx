import { useState } from "react";
import ContactForm from "./ContactForm";
import ResponseModal from "./ResponseModal";
import "./App.css";

// Main application logic/scripting
function App() {
	// Create getter/setter for form submission and spam detection flags
  	const [submitted, setSubmitted] = useState(false);
  	const [spamDetected, setSpamDetected] = useState(false);

	// Serve overall JSX layout for web app using contact form and response modal
  	return (
    	<div className="App">
      		<ContactForm setSubmitted={setSubmitted} setSpamDetected={setSpamDetected}/>
      		{submitted ? <ResponseModal spamDetected={spamDetected} /> : null}
    	</div>
  	);
}

export default App;
