import React from "react";
import { ContainerCard, Icon, Text } from "./style";

function CorpoValuesCard({ altDes, iconSrc, text, isVisible }) {
  return (
    <ContainerCard isVisible={isVisible}>
      <Icon src={iconSrc} alt={`${altDes} logo`} />
      <Text>{text}</Text>
    </ContainerCard>
  );
}

export default CorpoValuesCard;
