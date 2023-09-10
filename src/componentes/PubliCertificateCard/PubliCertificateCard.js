import React from "react";
import { ContainerAll, ContainerCard, Title } from "./style";

function PubliCertificateCard({ title, isVisible }) {
  return (
    <ContainerCard isVisible={isVisible}>
      <ContainerAll>
        <Title>{title}</Title>
      </ContainerAll>
    </ContainerCard>
  );
}

export default PubliCertificateCard;
