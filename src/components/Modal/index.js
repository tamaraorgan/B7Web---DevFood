import React from "react";
import { Container, ModalArea } from "./style";

export default ({ status, setStatus, children }) => {
  const handleModalClick = (e) => {
    if(e.target.classList.contains('ModalBackground')) {
      setStatus(false);
    }
  };

  return (
    <Container className="ModalBackground" status={status} onClick={handleModalClick}>
      <ModalArea>{children}</ModalArea>
    </Container>
  );
};
