import React from "react";
import { ContainerAll, ContainerCard, ContainerTop, Date, Description,  Title } from "./style";

function PubliExperienceCard({ dt_inicio, dt_final, title, descricao, isVisible }) {
  return (
    <ContainerCard isVisible={isVisible}>
      <ContainerAll>
      <Title>{title}</Title>
        <ContainerTop>
          <Date>{dt_inicio}</Date>
          <p> - </p>
          <Date>{dt_final}</Date>
        </ContainerTop>
        <Description>{descricao}</Description>
      </ContainerAll>
    </ContainerCard>
  );
}

export default PubliExperienceCard;
