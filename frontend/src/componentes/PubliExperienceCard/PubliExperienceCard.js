import React from "react";
import { ContainerAll, ContainerCard, ContainerTop, Date, Description,  Title } from "./style";

function PubliExperienceCard({ date, title, descricao, isVisible }) {
  return (
    <ContainerCard isVisible={isVisible}>
      <ContainerAll>
        <ContainerTop>
          <Title>{title}</Title>
          <Date>{date}</Date>
        </ContainerTop>
        <Description>{descricao}</Description>
      </ContainerAll>
    </ContainerCard>
  );
}

export default PubliExperienceCard;
