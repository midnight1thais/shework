import { BackIcon, ButtonApply, ButtonBack } from "./style";
import IconButtonBack from '../../assets/JobButtonBack.svg'
import { Link } from "react-router-dom";

function JobFooter(){

  // Supondo que a categoria está armazenada no localStorage como "category"
  const categoria = localStorage.getItem("@Auth:user_categoria");

  // Verifica se a categoria é "Trabalhos Diversos" ou "Técnico em TI"
  const exibirBotaoAplicar = categoria === "Trabalhos Diversos" || categoria === "Técnico em TI";

    return(
        <>
        <ButtonBack>
            <Link to='/homeRegisterCompany'><BackIcon src={IconButtonBack} alt=""/></Link>
        </ButtonBack>
        {exibirBotaoAplicar && (
        <Link to='/exploreCompany'><ButtonApply>Aplique para a Vaga</ButtonApply></Link>
        )}
        <div>
        </div>
        </>
    )
}

export default JobFooter