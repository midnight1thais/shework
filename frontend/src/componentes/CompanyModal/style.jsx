import styled from 'styled-components';


export const Background = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #1d1d1f88;
    z-index: 1000;
`

  
export const ContainerModal = styled.div`
    display: flex;
    flex-direction: column;

    width: 70vw;
    height: 80vh;
    margin-top: 15vh;
    margin-left: 15vw;
    padding: 40px;
    background-color: #9d9ea0;
    border-radius: 10px;
    color: black;

    
`

export const ContainerTop = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`


export const ContainerMid = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 4vh;

`

export const ContainerCenter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2vw;
    margin-top: 4vh;

`

export const ContainerButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2vw;
`

export const ButtonHere = styled.button`
    border-radius: 10px;
    background-color: #C6C5C5;
    width: 10vw;
    
    opacity: 1;
    margin-top: 4vh;
    margin-bottom: 3vh;
`

export const TitleDes = styled.h1`
    display: flex;

    color: #FFF;
    font-family: 'Poppins';
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.32px;
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
    width: 20vw;
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

export const ButtonAdd = styled.button`
    display: flex;
    justify-content: center;
    margin-top: 3vh;
    margin-bottom: 3vh;

    border-radius: 10px;
    background-color: #C6C5C5;
    width: 10vw;

    color: #000;
    font-family: 'Lato';
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 120% */
    letter-spacing: 0.2px;

`



// botão de adicionar imagem

export const ImgPost = styled.img`
  width: 90vw;
  max-width: 100%;        /* Garante que a imagem não ultrapasse o contêiner */
  height: auto;           /* Mantém a proporção da imagem */
`


export const ImgDiv = styled.div`
    display: flex;
    flex-direction: row;
`

export const AddIconButton = styled.button`
    
`

export const AddIcon = styled.img`
    height: 3vh;
    width: 3vw;
`

// definindo o local de cada coisa

export const ContainerAll = styled.div`
    display: flex;
    flex-direction: row;

`

export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;  /* Alinha os itens à direita */
  margin-right: 20px;     /* Adicione um espaçamento direito */
  margin-top: 20px;       /* Adicione um espaçamento superior */
  align-items: center;    /* Alinha os itens ao centro verticalmente */
`

export const ContainerLeft = styled.div`
    display:flex;
    flex-direction: column;
`

