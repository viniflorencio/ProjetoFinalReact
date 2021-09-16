import React, { useEffect, useState } from 'react'
import './TodoView.scss';
import { Api } from '../../api/api'
import { Link } from 'react-router-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const TodoView = (props) =>{
    const[tarefa,setTarefa] = useState({});
    const[open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);



    useEffect(() =>{
        getTarefaById();
    }, [])

    const id = props.match.params.id;

    const getTarefaById = async() =>{
        const response = await Api.fetchGetById(id);
        const data = await response.json();
        setTarefa(data);
   

    }


    const handleDelete = async (evento) =>{
        evento.preventDefault();
        const resposta = await Api.fetchDelete(id);
        const result = await resposta;
        console.log(result)
        props.history.push("/");
    }


        return (
            <section className="view">
                <div className="view-info">
                    <p className="view-info-text"> <b> Titulo</b> { tarefa.titulo }</p>
                    <p className="view-info-text"> <b> descricao</b> { tarefa.descricao }</p>
                    <p className="view-info-text"> <b> prioridade</b> { tarefa.prioridade }</p>
                    <p className="view-info-text"> <b> status</b> { tarefa.status }</p>
                    <p className="view-info-text"> <b> prazo</b> { tarefa.prazo }</p>
                    <p className="view-info-text"> <b> criacao</b> { tarefa.criacao }</p>
                    <Link to={`/edit/${tarefa.id}`} >
                    <button className="btn btn-success">Editar</button>
                    </Link>
                    <button className="btn btn-danger" onClick={onOpenModal}>Excluir</button>
                </div>
                <Modal open={open} onClose={onCloseModal} center
                    classNames={{
                        overlayAnimationIn: 'customEnterOverlayAnimation',
                        overlayAnimationOut: 'customLeaveOverlayAnimation',
                        modalAnimationIn: 'customEnterModalAnimation',
                        modalAnimationOut: 'customLeaveModalAnimation',
                        }}
                >
                    <h2>Deseja realmente Excluir ?</h2>
                    <button onClick={handleDelete} className="buttons">SIM</button>
                    <button onClick={onCloseModal} className="buttons">NAO</button>
                </Modal>
                </section>
            )


}

export default TodoView;


