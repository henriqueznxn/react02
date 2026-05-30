import "./style.css";

import { Link } from "react-router-dom";

function CardDev(props) {
    
    function verificarLista() {
        if (typeof props.listaTeachs === "string") {
        
            return JSON.parse(props.listaTeachs)

        } else { 
        return props.listaTeachs;
        }
    }
    return (
        <div className="card_dev">

            <div className="grupo_contato">
                <img src={"http://localhost:3000/static/" + props.foto} alt=""/>

                <div className="contato_dev">
                    <Link to={"/perfil/" + props.id}>
                    <h2>{props.nome}</h2>
                    </Link>
                    <p>{props.email}</p>
                </div>
            </div>

            <div className="techs">
               {verificarListaTechs().map((tech, indice) => (
               <span key={indice}>
                 {tech}
               </span>
               )) }
            </div>
        </div>
    );
}

export default Carddev;