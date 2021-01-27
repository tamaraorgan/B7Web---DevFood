import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import { LinkArea, LinkIcon } from "./style";

export default ({title, icon, link }) => {
  const history = useHistory(); /* é usado para que a pagina não recarrege */
  const location = useLocation(); /* indica qual a pagina está */

  let isActive =
    location.pathname ===
    link; /* faz a comparação com a pagina na tela e o link, se for o mesmo, então será adicionado a class ativa, para que fique com a borda  */

  const handleLinkClick = (e) => {
    e.preventDefault(); /* inibe o click para que a pagina não seja redirecionada diretamente ao clicar */
    history.push(
      link
    ); /* ativa o click e redireciona a pagina sem recarregar */
    /* ajuda a melhorar a performace do aplicativo, pois não faz solicitação ao servidor */
  };

  return (
    <LinkArea
      data-tip={title}
      data-for="tip-right"
      href={link}
      onClick={handleLinkClick}
      active={isActive}
    >
      <LinkIcon src={icon} />
    </LinkArea>
  );
};
