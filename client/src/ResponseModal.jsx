import React from "react";
import styled from "styled-components";

const ResponseModal = ({ spamDetected }) => {
    if (spamDetected) {
        return (
          <StyledResponseModal>
            <h2>Uh-oh!</h2>
            <div>Your message may or may not contain spam content and has been auto-blocked. Please re-submit or try again later!</div>
          </StyledResponseModal>
        )
      } else if (!spamDetected) {
        return (
          <StyledResponseModal>
            <h2>Thanks!</h2>
            <div>We'll be in touch soon.</div>
          </StyledResponseModal>
        )
      }

    return (
    <div></div>
    );
};

export default ResponseModal;

// Styles
const StyledResponseModal = styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

width: 600px;
max-width: 80%;
max-height: 80%;
`;