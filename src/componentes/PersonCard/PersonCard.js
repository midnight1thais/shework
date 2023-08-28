import React from "react";
import { ContainerAll, ContainerCard, ContainerTop, Date, Description, Icon, Service, Title } from "./style";

function PersonCard({ date, service, title, descricao, iconSrc, isVisible }) {
  return (
    <ContainerCard isVisible={isVisible}>
      <Icon src={iconSrc} alt=''/>
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

export default PersonCard;
