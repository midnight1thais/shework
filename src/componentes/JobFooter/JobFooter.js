import { BackIcon, ButtonApply, ButtonBack } from "./style";
import IconButtonBack from '../../assets/JobButtonBack.svg'
import { Link } from "react-router-dom";

function JobFooter(){

    return(
        <>
        <ButtonBack>
            <Link to='homeRegister'><BackIcon src={IconButtonBack} alt=""/></Link>
        </ButtonBack>
        <Link to='/exploreCompany'><ButtonApply>Aplique para a Vaga</ButtonApply></Link>
        <div>
        </div>
        </>
    )
}

export default JobFooter