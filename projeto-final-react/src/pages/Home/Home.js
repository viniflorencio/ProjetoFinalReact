import React from 'react';
import TodoList from '../../components/structure/TodoList/TodoList';
import './Home.scss';

export const Home = () => {
    return (
    <section className="content">
      <h1 className="content-title">Listagem de tarefas</h1>
      <div className="content-list">
        <TodoList />
      </div>
    </section>
    )
}

export default Home