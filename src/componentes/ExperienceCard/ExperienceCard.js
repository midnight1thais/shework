import React from "react";
import { ContainerCard,  Report} from "./style";

function ExperienceCard({ isVisible, experience }) {
  return (
    <ContainerCard isVisible={isVisible}>
        <Report>{experience}</Report>
    </ContainerCard>
  );
}

export default ExperienceCard;
