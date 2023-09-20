import React from "react";
import styled from "styled-components";

// Creation of response modal component with spam detection flag tracked as prop
const ResponseModal = ({ spamDetected }) => {
	// Conditionally render email-block text if spam was detected from model
    if (spamDetected) {
        return (
        	<StyledResponseModal>
            	<h2>Uh-oh!</h2>
            	<div>Your message may or may not contain spam content and has been auto-blocked. Please re-submit or try again later!</div>
          	</StyledResponseModal>
        )
    } 
	// Conditionally render email-sent text if spam was not detected from model
	else if (!spamDetected) {
        return (
        	<StyledResponseModal>
            	<h2>Thanks!</h2>
            	<div>We'll be in touch soon.</div>
          	</StyledResponseModal>
        )
    }

	// Generic empty JSX return 
    return (<div></div>);
};

export default ResponseModal;

// Response modal component styling
const StyledResponseModal = styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

width: 600px;
max-width: 80%;
max-height: 80%;
`;