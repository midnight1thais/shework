import styled from 'styled-components';

export const BodyBack = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 215vh;
    background-color: #324176;
`

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 195vh;
    width: 80vw;
    margin-top: 5vh;

    background-color: rgba(255, 255, 255, 0.1) /* Cor preta com 50% de transparência */;
    backdrop-filter: blur(40px); /* Efeito de desfoque */
    box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.45); /* Sombra */

`

export const ContainerGlobalTop = styled.section`
    display: flex;
    flex-direction: row;

`

export const TitleGlobal = styled.h1`
    margin-top: 4vh;
    margin-bottom: 4vh;

    color: #FFF;
    text-align: center;
    font-family: 'Work Sans';
    font-size: 76px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    
`

export const ContainerRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 4vh;
    margin-left: 3vw;
    margin-right: 10vw;

`

export const  SubTitle = styled.h1`
    color: #FFF;
    font-family: 'Poppins';
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.32px;
    text-align: center;

`

export const  SubTitleLeft = styled.h1`
    margin-bottom: 6vh;

    color: #FFF;
    font-family: 'Poppins';
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.32px;
    text-align: center;

`

export const  SubTitleLeft2 = styled.h1`
    margin-top: 4vh;
    margin-bottom: 6vh;

    color: #FFF;
    font-family: 'Poppins';
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.32px;
    text-align: center;

`

export const Label = styled.label`
    display: flex;
    flex-direction: column;


    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 300;
    color:#FFFFFF;
`

export const Input = styled.input`
    width: 30vw;
    height: 5vh;

    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 300;
    background: rgba(0, 0, 0, 0.11);
    border-radius: 4px;
    border: none;
    color: #FFFFFF;
    text-indent: 1vw;


`
export const ContainerLeft = styled.div`
    width: 30vw;
`

export const AddThings = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const AddTitle = styled.p`
    color: #FFF;
    font-family: 'Poppins';
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`

export const AddIconButton = styled.button`
    
`

export const AddIcon = styled.img`
    height: 3vh;
    width: 3vw;
`

export const ContainerAdd = styled.div`
    margin-top: 0.5%;
    height: 15vh;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.11);

    ul {
    list-style: none;
    padding: 0;
    margin: 0;
    max-height: 200px; /* Ajuste a altura máxima conforme necessário */
    overflow: auto; /* Adicione uma barra de rolagem quando necessário */
    }

    li {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 300;
    color: #FFFFFF;
    }

    max-height: 15vh; /* Ajuste a altura máxima conforme necessário */
    overflow: auto; /* Adicione uma barra de rolagem quando necessário */
`

export const ContainerText = styled.div`
    display: flex;
    flex-direction: row;
`

export const ContainerBottom = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 6vh;
    margin-bottom: 4vh;
  
    width: 30vw;
`

export const ContainerFooter = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    margin-bottom: 1vh;

    width: 80vw;

`

export const ButtonBack = styled.button`
   
`

export const IconBack = styled.img`
    height: 4vh;
    width: 4vw;
`

export const ButtonForward = styled.button`
    height: 4vh;
    width: 8vw;
    background-color: #fff;
    border-radius: 15px;
`