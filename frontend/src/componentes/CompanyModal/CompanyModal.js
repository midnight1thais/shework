
import React, { useEffect, useState } from 'react'
import { api } from "../../services/api";
import { useNavigate } from 'react-router-dom'
import AddIconImg from '../../assets/plusIcon.svg'
import { AddIcon, AddIconButton, Background, ButtonDelete, ButtonHere, ContainerAdd, ContainerAll, ContainerButtons, ContainerCenter, ContainerLeft, ContainerModal, ContainerRight, ContainerTop, ContainerValores, ImgDiv, ImgPost, Input, Label, TitleDes } from './style'
import CreateModal from '../CreateModal/CreateModal';
import axios from 'axios';


function CompanyModal({ isOpen, setModalOpen}){
    // do modal (pop-up)
    const [openModal, setOpenModal] = useState(false);

    //geral
    const [item, setItem] = useState();

    // editando empresa

    const [nome, setName] = useState("");
    const [somos_descricao, setSomos] = useState("");
    const [fazemos_descricao, setFazemos] = useState("");

    // dos valores da empresa
    const [valor, setValor] = useState("");
    const [valores, setValores] = useState([]);

    const [image, setImage] = useState('');
    const [preview, setPreview] = useState('');

    const userId= parseInt(localStorage.getItem('@Auth:user_id'), 10)

    // projetos da empresa
    const [projeto_titulo, setTituloProjeto] = useState("");
    const [projeto_descricao, setDescricaoProjeto] = useState("");

    // ver se ja tem publicações ou nao

    const [enable, setEnable] = useState(true);
    const id = localStorage.getItem('@Auth:user_id');
    const categoria = localStorage.getItem('@Auth:user_categoria')
    
    useEffect(() => {
        async function fetchPublis() {
            try {
                if (categoria === 'Empresa' || !categoria){
                    const response = await api.get(`/company/companyGet/` + id); 
                            if(response.data.success === true){
                                setEnable(false)
                                console.log('ele tem publicações')
                            } else{
                                setEnable(true)
                                console.log('ele não tem')
                            }
                } else{
                  console.log('ele é uma pessoa e não pode publicar como empresa')
                  setEnable(false)
                }
                
            } catch (error) {
                console.error('Erro ao recuperar as informações da publi:', error);
            }
        }
  
        fetchPublis();
    }, [categoria, id]);


    const addValores = (e) => {
      if (e) {
        e.preventDefault();
      }
      setValores([...valores, valor]);
    }

    const navigate = useNavigate();

    const handleLogout = () => {

      // Limpa o localStorage
      localStorage.removeItem("@Auth:user");
      localStorage.removeItem("@Auth:token");
      localStorage.removeItem("@Auth:user_email");
      localStorage.removeItem("@Auth:id");
      localStorage.removeItem("@Auth:user_id");
      localStorage.removeItem("@Auth:user_categoria");
      localStorage.removeItem("@Auth:user_name");
      localStorage.removeItem("@Auth:publiCompany_id");

      // Redireciona de volta para a tela de login
      navigate("/login");
      window.location.reload();
    };

    function handleImageChange(e) {
      setImage(e.target.files[0]);
      setPreview(URL.createObjectURL(e.target.files[0]));
    }

    useEffect(() => {
      console.log('image', image);
    }, [image]);

    useEffect(() => {
        console.log('--preview atual', preview);
    }, [preview]);

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log('Imagem do post', image)
      
      let formData = new FormData();
      formData.append('id_usuarioEmpresa', userId);
      formData.append('nome', nome);
      formData.append('file', image);
      formData.append('somos_descricao', somos_descricao);
      formData.append('fazemos_descricao', fazemos_descricao,);
      formData.append('valores', valores);
      formData.append('projeto_titulo', projeto_titulo);
      formData.append('projeto_descricao', projeto_descricao);

      console.log('os valores ------', ...valores)
      
      
      try {
        axios.post(`${api.defaults.baseURL}/company/create`, formData)
        .then(function (response) {
        // Convertendo para JSON e, em seguida, analisando de volta
        setItem(response.data.data)
        navigate('/corporation/' + response.data.data.insertId)
        
        const publiCompanyId = response.data.data.insertId;
        localStorage.setItem("@Auth:publiCompany_id", publiCompanyId); 
        })
        .catch(function (error) {
            alert("erro")
            console.log("erro ao criar formEmpresa", error)
        });    
        // console.log("essa é a resposta:", response)
        // console.log("essa é a resposta.data:", response.data)
        // console.log("essa é a resposta.data.data[0]:", response.data.data[0])
        // console.log("esse é o response.formData:", response.formData)
        // console.log("esse é o response.data.formData:", response.data.formData[0])
        
        // console.log("resposta success", response.data.success)
        // if (response.data.success){
        //   const publiCompanyId = response.data.data.insertId;
        //   localStorage.setItem("@Auth:publiCompany_id", publiCompanyId); 

          
        //   alert('Deu certo')
        //   } else {
        //   alert('Num deu!')

        //   } 
        

        
        // console.log('Post criado com sucesso FORMDATA:', response.FormData());
        // console.log('Post criado com sucesso DATA:', response.data);
      } catch (error) {
        console.error('Erro ao criar o post:', error);
      }
      
    };

    const handleImageClick = () => {
      // Ativar click no input que está oculto.
      document.getElementById('imageInput').click();        
    };

    const handleLimpa = () =>{
      setImage('')
      setPreview('')
      setValores('')
      setSomos('')
      setName('')
    };

    const deletePerson = async (e) => {
      e.preventDefault();

      try {
        const response = await api.delete(`/user/delete/${userId}`);
        localStorage.removeItem("@Auth:user_id")
        localStorage.removeItem("@Auth:user")
        localStorage.removeItem("@Auth:token")
        localStorage.removeItem("@Auth:user_categoria");
        localStorage.removeItem("@Auth:user_name");
        alert('Usuário Deletado com Sucesso')
        navigate('/')
        console.log('Recurso deletado com sucesso:', response.data);
      } catch (error) {
        console.error('Erro ao deletar recurso:', error);
      }
    };


  if (isOpen) {

    return (
      <Background>
        <ContainerModal>
          <ContainerAll>
          <ContainerLeft>
          <div>
            <ContainerTop>
              <TitleDes> Editar Tela Empresa </TitleDes>
            </ContainerTop>
            <ContainerLeft>
            <ContainerCenter>
              <Label>Nome
                    <Input type="text" 
                    value={nome}
                    onChange={(e) => setName(e.target.value)} 
                    />
              </Label>
              <div>
              <ContainerValores>
              <Label>Nossos valores </Label>
              <AddIconButton onClick={() => setOpenModal(true)}><AddIcon src={AddIconImg} alt=''/></AddIconButton>
              </ContainerValores>
                    <CreateModal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} >
                      <div>
                      <Label>Adicione os valores da empresa
                          <Input type="text" value={valor} onChange={(e) => setValor(e.target.value)}/>
                      </Label>
                      </div>
                    <button onClick={() => addValores()}>Salvar</button>
                    </CreateModal>
                    <ContainerAdd>
                      <ul>
                          {valores && valores.map((item, index) => (
                              <li key={index} style={{border: '1px solid gray', borderRadius: '10px', }}>{item} </li>
                          ))}
                      </ul>
                    </ContainerAdd>
              </div>
              <ContainerRight>
            </ContainerRight>
              
            </ContainerCenter>
        
            <ContainerCenter>
              <Label>O que somos
                    <Input type="text" 
                    value={somos_descricao}
                    onChange={(e) => setSomos(e.target.value)} 
                    />
              </Label>
              <Label>O que fazemos
                    <Input type="text" 
                    value={fazemos_descricao}
                    onChange={(e) => setFazemos(e.target.value)} 
                    />
              </Label>
            </ContainerCenter>


            <ContainerTop>
              <TitleDes> Adicionar Projeto </TitleDes>
            </ContainerTop>

            <ContainerCenter>
              <Label> Titulo do Projeto
                    <Input type="text" value={projeto_titulo} 
                    onChange={(e) => setTituloProjeto(e.target.value)}
                     />
              </Label>
              <Label> Descrição
                    <Input type="text" value={projeto_descricao} onChange={(e) => setDescricaoProjeto(e.target.value)}/>
              </Label>
            </ContainerCenter>
            </ContainerLeft>
          </div>
          <ContainerButtons>
            <ButtonHere onClick={setModalOpen}>Fechar</ButtonHere>
            <ButtonHere onClick={handleLimpa}>Limpar</ButtonHere>
            {enable &&
            <ButtonHere onClick={handleSubmit}>Salvar</ButtonHere>
             }
            <ButtonHere onClick={handleLogout}>Sair</ButtonHere>
            <ButtonDelete onClick={deletePerson}>Deletar Conta</ButtonDelete>
          </ContainerButtons>
          </ContainerLeft>

          <ImgDiv>
                <Label>Adicionar Fotos
                </Label>
                <AddIconButton onClick={handleImageClick}>
                <input 
                      type="file"
                      name="image"
                      accept="image/*"
                      id="imageInput"
                      multiple={false}
                      onChange={handleImageChange}
                    />
                    {preview && (
                      <div>
                        <ImgPost src={preview} alt="Imagem selecionada"/>
                      </div>
                    )}
                  </AddIconButton>
                </ImgDiv>
             </ContainerAll>

        </ContainerModal>
        
      </Background>
    )
  }
  return null
}

export default CompanyModal