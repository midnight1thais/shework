import { BackIcon, ButtonApply, ButtonBack } from "./style";
import IconButtonBack from '../../assets/JobButtonBack.svg'

function JobFooter(){

    return(
        <>
        <ButtonBack>
            <BackIcon src={IconButtonBack} alt=""/>
        </ButtonBack>
        <ButtonApply>Aplique para a Vaga</ButtonApply>
        <div>
        </div>
        </>
    )
}

export default JobFooter