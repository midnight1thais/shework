import React from "react";
import { ContainerAll, ContainerCard, Title, Rectangle } from "./style";

function PubliAbilityCard({ competence, isVisible }) {
  return (
    <ContainerCard isVisible={isVisible}>
      <ContainerAll>
        <Rectangle/>
        <Title>{competence}</Title>
      </ContainerAll>
    </ContainerCard>
  );
}

export default PubliAbilityCard;
