import React from 'react';
import './TodoAdd.scss';
import { Api } from '../../api/api';
import { useHistory } from "react-router-dom";

const TodoAdd = (props) => {

    let history = useHistory();

    function handleCancel() {
      history.push("/")
    }

    const handleSubmit = async (evento) => {
        evento.preventDefault();

        const titulo = evento.target.titulo.value;
        const descricao = evento.target.descricao.value;
        const prioridade = evento.target.prioridade.value;
        const status = evento.target.status.value;
        const prazo = evento.target.prazo.value;
        const criacao = evento.target.criacao.value;

        const Tarefa = {
            titulo: titulo,
            descricao: descricao,
            prioridade: prioridade,
            status: status,
            prazo: prazo,
            criacao: criacao,
        }


        try {
            const response = await Api.fetchPost(Tarefa);
            const data = await response;
            props.history.push('/');
        } catch(error){
            console.log(error);
        }
      }


    return(
        <section className="add">
            <form className="add-form" onSubmit={handleSubmit}>
                <div className="add-form-group">
                    <label htmlFor="titulo" className="add-form-group-label" >Titulo</label>
                    <input type="text" id="titulo" name="titulo" className="add-form-group-input"></input>
                </div>
                <div className="add-form-group">
                    <label htmlFor="descricao" className="add-form-group-label" >descricao</label>
                    <input type="text" id="descricao" name="descricao" className="add-form-group-input"></input>
                </div>
                <div className="add-form-group">
                    <label htmlFor="prioridade" className="add-form-group-label" >prioridade</label>
                    <input type="text" id="prioridade" name="prioridade" className="add-form-group-input"></input>
                </div>
                <div className="add-form-group">
                    <label htmlFor="status" className="add-form-group-label" >status</label>
                    <input type="text" id="status" name="status" className="add-form-group-input"></input>
                </div>
                <div className="add-form-group">
                    <label htmlFor="prazo" className="add-form-group-label" >prazo</label>
                    <input type="text" id="prazo" name="prazo" className="add-form-group-input"></input>
                </div>
                <div className="add-form-group">
                    <label htmlFor="criacao" className="add-form-group-label" >criacao</label>
                    <input type="text" id="criacao" name="criacao" className="add-form-group-input"></input>
                </div>

                <div className="add-form-buttons">
                    <button type="button" onClick={handleCancel} className="add-form-buttons-btn-cancelar">Cancelar</button>
                    <button className="add-form-buttons-btn-salvar" type="submit">Enviar</button>
                </div>

            </form>

        </section>
    )
}

export default TodoAdd;