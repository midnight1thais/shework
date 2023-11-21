import React from "react";
import { ContainerAll, ContainerCard, ContainerTop, Date, Description, Service, Title } from "./style";

function PubliCourseCard({ dt_inicio, dt_final, title, descricao, isVisible }) {
  return (
    <ContainerCard isVisible={isVisible}>
      <ContainerAll>
        <ContainerTop>
          <Date>{dt_inicio}</Date>
          <p> - </p>
          <Date>{dt_final}</Date>
        </ContainerTop>
        <Title>{title}</Title>
        <Description>{descricao}</Description>
      </ContainerAll>
    </ContainerCard>
  );
}

export default PubliCourseCard;
