import ImgWoman from '../../assets/ImgProfileWoman.jpg'
import { ContainerAll, ContainerCard, ContainerTop, Date, Description, Icon, Service, Title } from "./style";

function PubliPersonCard(){

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
        </ContainerCard>
      ))}
        </div>
        </>
    )
}

export default PubliPersonCard