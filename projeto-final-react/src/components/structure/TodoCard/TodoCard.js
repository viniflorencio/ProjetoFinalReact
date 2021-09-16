import React from 'react';
import { Link } from 'react-router-dom';
import './TodoCard.scss';


const TodoCard = (props) =>{
    const tarefa = props.tarefa;


    return(
        <Link to={`/view/${tarefa._id}`} className="card">
      <div>
        <h2 className="card-text">{tarefa.titulo}</h2>
        <p className="card-info">{tarefa.descricao}</p>
        <p className="card-info">{tarefa.prioridade}</p>
        <p className="card-info">{tarefa.status}</p>
        <p className="card-info">{tarefa.prazo}</p>
        <p className="card-info">{tarefa.criacao}</p>
        
      </div>
    </Link>
    )
}

export default TodoCard;