import React from "react";
import styled from "styled-components";

const ContactForm = ({ setSubmitted, setSpamDetected }) => {
    const FORM_ENDPOINT = "/api/classify"

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const inputs = event.target.elements;
        const data = {};
    
        for (let iterator = 0; iterator < inputs.length; iterator++) {
          if (inputs[iterator].name) {
            data[inputs[iterator].name] = inputs[iterator].value;
          }
        }

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
            console.log(output_classification);
            if (output_classification === "spam") {
                setSpamDetected(true);
            } else if (output_classification === "ham") {
                setSpamDetected(false);
            }
            setSubmitted(true);
        })
        .catch((error) => {
          console.error(error);
        });
      }

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

// Styles
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