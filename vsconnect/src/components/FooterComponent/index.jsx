import "./style.css/.";

import imgLogo from "../../assets/images/logo.svg"
import imgFace from "../../assets/images/facebook.svg"
import imgInsta from "../../assets/images/instagram.svg"
import imgLink from "../../assets/images/linkedin.svg"

import { Link } from "react-router-dom";

function FooterComponent() {
    return (

        <div className="rodape_conteudo">

          <div className="rodade_conteudo_paginas">
             
             <h2>Paginas</h2>

             <ul>
                <li>
                  <Link to={"/Login"}>
                  Login
                  </Link>
                </li>
                <li>
                  <Link to={"/Lista/servicos"}>
                  Home
                  </Link>
                </li>
                <li>
                    <Link to={"/cadastrar/servico"}>
                    Listar Serviços
                    </Link>
                </li>
                <li>
                    <Link to={"/cadastrar/usuario"}>
                    Cadastrar Desenvolvedor
                    </Link>
                </li>
                <li>
                    <Link to={"/lista/devs"}>
                    Listar Desenvolvedores
                    </Link>
                </li>
             </ul>

          </div>
        <img src={imgLogo} alt="" />
         
         <div className="rodape_conteudo_contatos">
          <h2>Contatos</h2>

          <div>
            <Link to={"#"}>
            <img src={imgFace} alt="" />
            </Link>
            <Link to={"#"}>
            <img src={imgInsta} alt="" />
            </Link>
            <Link to={"#"}>
            <img src={imgLink} alt="" />
            </Link>
          </div>

        <Link to={"mailto:contato@vsconnect.com"}></Link>
           contato@vsconnect.com
         </div>
        </div>
    )
}

export default FooterComponent;