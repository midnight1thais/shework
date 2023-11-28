import { BackIcon, ButtonApply, ButtonBack } from "./style";
import IconButtonBack from '../../assets/JobButtonBack.svg'
import { Link,  useNavigate } from "react-router-dom";

function JobFooter(){

  const navigate = useNavigate();

  const goBack = () =>{
    navigate(-1)
  }

  // Supondo que a categoria está armazenada no localStorage como "category"
  const categoria = localStorage.getItem("@Auth:user_categoria");

  // Verifica se a categoria é "Trabalhos Diversos" ou "Técnico em TI"
  const exibirBotaoAplicar = categoria === "Trabalhos Diversos" || categoria === "Técnico em TI";


    return(
        <>
        <ButtonBack onClick={goBack}>
          <BackIcon src={IconButtonBack} alt=""/>
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