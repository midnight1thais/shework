import React from "react";
import { ContainerCard, DivText, SubTitle, TextA } from "./style";

function CorpoProjectCard({ text, isVisible, subtext }){

    return(
      <ContainerCard isVisible={isVisible}>
        <DivText>
        <TextA>{text}</TextA>
        <SubTitle>{subtext}</SubTitle>
        </DivText>
      </ContainerCard>
    )
}

export default CorpoProjectCard