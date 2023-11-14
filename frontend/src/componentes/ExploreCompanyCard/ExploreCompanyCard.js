import ImgCompany from '../../assets/LogoCompany.png'
import ImgShare from '../../assets/compartilhar.svg'
import ImgContract from '../../assets/contratar.svg'
import { ButtonRight, ContainerAll, ContainerCard, ContainerImg, ContainerTop, Date, Description, Icon, IconRight, Service, Title } from "./style";

function ExploreCompanyCard(){

    const isVisible = true;

    const cardArray = new Array(5).fill(null);

    return(
        <>
        <div>
        {cardArray.map((_, index) => (
        <ContainerCard key={index} isVisible={isVisible}>
            <Icon src={ImgCompany} alt=''/>
            <ContainerAll>
                <ContainerTop>
                <Date>21 Julho 2023</Date>
                </ContainerTop>
                <Title>InovaTech</Title>
                <Description>Maior empresa de Tecnologia do Rio Grande do Sul, nós queremos mudar o mundo...</Description>
            </ContainerAll>
            <ContainerImg>
                <ButtonRight><IconRight src={ImgShare} alt=''/></ButtonRight>
                <ButtonRight><IconRight src={ImgContract} alt=''/></ButtonRight>
            </ContainerImg>
        </ContainerCard>
      ))}
        </div>
        </>
    )
}

export default ExploreCompanyCard