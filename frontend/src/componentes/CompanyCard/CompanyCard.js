import React from "react";
import { ContainerCard, Icon, Text } from "./style";

function CarouselCard({ company, iconSrc, text, isvisiblecard }) {
  return (
    <ContainerCard isvisiblecard={isvisiblecard}>
      <Icon src={iconSrc} alt={`${company} logo`} />
      <Text>{text}</Text>
    </ContainerCard>
  );
}

export default CarouselCard;
