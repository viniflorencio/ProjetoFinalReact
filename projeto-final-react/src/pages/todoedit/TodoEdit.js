import React, { useEffect, useState } from "react";
import { Api } from '../../api/api';
import { useHistory } from "react-router-dom";
import './TodoEdit.scss';

const TodoEdit = (props) =>{
    let history = useHistory();
    const id = props.match.params.id;
    const [fields, setFields] = useState({});

    useEffect(() =>{
        getTarefaById();

    }, [])

    const getTarefaById = async () =>{
        const response = await Api.fetchGetById(id);
        const data = await response.json();
        setFields(data);
    }

    const handleFieldsChange = (evento) =>{
        const auxFields = { ...fields };
        auxFields[evento.target.name] = evento.target.value;
        setFields(auxFields);
    }

    const handleSubmit = async(evento) =>{
        evento.preventDefault();
        const result = await Api.fetchPut(id);
        const response = await result.json();
        console.log(response);

    }

    function handleCancel() {
        history.push("/")
      }



    return(
        <section className="add">
            <h1>Editar Tarefa</h1>
            <form className="add-form" onSubmit={handleSubmit}>
                <div className="add-form-group">
                        <label htmlFor="titulo" className="add-form-group-label"> titulo</label>
                        <input type="text" id="titulo" name="titulo" value={fields.titulo} onChange={handleFieldsChange} className="add-form-group-input"></input>
                </div>
                <div className="add-form-group">
                        <label htmlFor="descricao" className="add-form-group-label"> descricao</label>
                        <input type="text" id="descricao" name="descricao" value={fields.descricao} onChange={handleFieldsChange} className="add-form-group-input"></input>
                </div>  
                <div className="add-form-group">
                        <label htmlFor="prioridade" className="add-form-group-label"> prioridade</label>
                        <input type="text" id="prioridade" name="prioridade" value={fields.prioridade} onChange={handleFieldsChange} className="add-form-group-input"></input>
                </div>                
                <div className="add-form-group">
                        <label htmlFor="status" className="add-form-group-label"> status</label>
                        <input type="text" id="status" name="status" value={fields.status} onChange={handleFieldsChange} className="add-form-group-input"></input>
                </div>
                <div className="add-form-group">
                        <label htmlFor="prazo" className="add-form-group-label"> prazo</label>
                        <input type="text" id="prazo" name="prazo" value={fields.prazo} onChange={handleFieldsChange} className="add-form-group-input"></input>
                </div>
                <div className="add-form-group">
                        <label htmlFor="criacao" className="add-form-group-label"> criacao</label>
                        <input type="text" id="criacao" name="criacao" value={fields.criacao} onChange={handleFieldsChange} className="add-form-group-input"></input>
                </div>
                <div className="add-form-buttons">
                    <button type="button" onClick={handleCancel}>Cancelar</button>
                    <button className="add-form-buttons-btn-salvar" type="submit">
                        Enviar
                    </button>
                </div>
                
                


            </form>
        </section>
    );









};

export default TodoEdit