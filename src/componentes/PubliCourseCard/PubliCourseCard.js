import React from "react";
import { ContainerAll, ContainerCard, ContainerTop, Date, Description, Service, Title } from "./style";

function PubliCourseCard({ date, service, title, descricao, isVisible }) {
  return (
    <ContainerCard isVisible={isVisible}>
      <ContainerAll>
        <ContainerTop>
          <Date>{date}</Date>
          <Service>{service}</Service>
        </ContainerTop>
        <Title>{title}</Title>
        <Description>{descricao}</Description>
      </ContainerAll>
    </ContainerCard>
  );
}

export default PubliCourseCard;
