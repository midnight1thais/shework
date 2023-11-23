import React from "react";
import { ContainerCard, Icon, Text } from "./style";

function JobProjectCard({ altDes, iconSrc, text, isVisible }) {
  return (
    <a href={altDes} rel="noreferrer" target="_blank">
    <ContainerCard isVisible={isVisible}>
      <Icon src={iconSrc} alt={`logo`} />
      <Text>{text}</Text>
    </ContainerCard>
    </a>
  );
}

export default JobProjectCard;
