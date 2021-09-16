import React, { useEffect, useState } from 'react';
import TodoCard from '../TodoCard/TodoCard';
import { Api } from '../../../api/api';
import './TodoList.scss';


const TodoList = () =>{
    const [tarefas, setTarefas] = useState([]);

    useEffect(() => {
        getTarefa();
    }, []) 

    const getTarefa = async () =>{
        const response = await Api.fetchGet();
        const data = await response.json();
        console.log(response);
        console.log(data);
        setTarefas(data);
    }

    return(
        <div className="list">
            {tarefas.map((tarefa) =>(
                <TodoCard tarefa={tarefa} key={tarefa.id}/>
            ))}
        </div>
    )
}

export default TodoList;