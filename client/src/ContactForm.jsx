import React from "react";
import styled from "styled-components";

// Creation of contact form component with passed submission and spam detection props
const ContactForm = ({ setSubmitted, setSpamDetected }) => {
    // Initialize API endpoint path
	const FORM_ENDPOINT = "/api/classify"

    // Create event handler for frontend form submission
    const handleSubmit = (event) => {
        // Don't refresh page
        event.preventDefault();
    
        // Track user-submitted text data from form and save to iterable object
        const inputs = event.target.elements;
        const data = {};
        for (let iterator = 0; iterator < inputs.length; iterator++) {
        	if (inputs[iterator].name) {
            	data[inputs[iterator].name] = inputs[iterator].value;
          	}
        }

		// Pass user text data to saved model binary via fetch (POST) request
        fetch(FORM_ENDPOINT, {
        	method: "POST",
          	headers: {
            	Accept: "application/json",
            	"Content-Type": "application/json",
          	},
          	body: JSON.stringify(data)
        })
        .then(response => response.text())
        .then(output_classification => {
			// Toggle spam detection state boolean from modeling output evaluation
            if (output_classification === "spam") {
                setSpamDetected(true);
            } else if (output_classification === "ham") {
                setSpamDetected(false);
            }
			// Track form submission state as complete
            setSubmitted(true);
        })
		// Generic error catch case
        .catch((error) => {
        	console.error(error);
        });
    }

	// Contact form rendering
    return (
        <StyledContactForm>
            <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST">
                <div>
                    <input type="text" placeholder="Your name" name="name" required />
                </div>
                <div>
                    <input type="email" placeholder="Your email" name="email" required />
                </div>
                <div>
                    <textarea placeholder="Your message" name="message" required />
                </div>
                <div>
                    <button type="submit">Send a message</button>
                </div>
            </form>
        </StyledContactForm>
    )
};

export default ContactForm;

// Contact form component styling
const StyledContactForm = styled.div`
//   width: 400px;

  form {
    padding: 20px 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;