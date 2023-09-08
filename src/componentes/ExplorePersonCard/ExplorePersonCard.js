import ImgWoman from '../../assets/ImgProfileWoman.jpg'
import ImgShare from '../../assets/compartilhar.svg'
import ImgContract from '../../assets/contratar.svg'
import { ButtonRight, ContainerAll, ContainerCard, ContainerImg, ContainerTop, Date, Description, Icon, IconRight, Service, Title } from "./style";

function ExplorePersonCard(){

    const isVisible = true;

    const cardArray = new Array(5).fill(null);

    return(
        <>
        <div>
        {cardArray.map((_, index) => (
        <ContainerCard key={index} isVisible={isVisible}>
            <Icon src={ImgWoman} alt=''/>
            <ContainerAll>
                <ContainerTop>
                <Date>21 Julho 2023</Date>
                <Service>Serviços Gerais</Service>
                </ContainerTop>
                <Title>Andressa de Lima</Title>
                <Description>Tenho 21 anos e estou procurando vaga para técnico em TI , faço programas em ReactJS...</Description>
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

export default ExplorePersonCard