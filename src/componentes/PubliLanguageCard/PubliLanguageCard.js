import React from "react";
import { ContainerAll, ContainerCard, Title, Rectangle } from "./style";

function PubliLanguageCard({ language, isVisible }) {
  return (
    <ContainerCard isVisible={isVisible}>
      <ContainerAll>
        <Rectangle/>
        <Title>{language}</Title>
      </ContainerAll>
    </ContainerCard>
  );
}

export default PubliLanguageCard;
