import React from "react";
import { ContainerCard, Icon, Text } from "./style";

function PersonCard({ company, iconSrc, text, isVisible }) {
  return (
    <ContainerCard isVisible={isVisible}>
      <Icon src={iconSrc} alt={`${company} logo`} />
      <Text>{text}</Text>
    </ContainerCard>
  );
}

export default PersonCard;
