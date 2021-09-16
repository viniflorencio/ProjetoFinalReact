
import './App.css';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import { Route, Switch } from 'react-router';
import Home from './pages/Home/Home';
import TodoAdd from './pages/todoAdd/TodoAdd';
import TodoEdit from './pages/todoedit/TodoEdit';
import TodoView from './pages/TodoView/TodoView';

function App() {
  return (
    <div className="App">
      <Header/>
        <Switch>
          <Route path="/" exact={true} component={ Home } />
          <Route path="/Add" component={ TodoAdd } />
          <Route path="/view/:id" component={TodoView}/>
          <Route path="/edit/:id" component={TodoEdit}/>
        </Switch>
      <Footer/>
      
    </div>
  );
}

export default App;
