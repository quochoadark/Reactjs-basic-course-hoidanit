import TodoNew from './components/todo/TodoNew';
import TodoData from './components/todo/TodoData';
import './components/todo/todo.css';
import reactLogo from './assets/react.svg';

function App() {
  const hoidanit = "eric";
  const age = 25
  const data = {
    address: "HaNoi",
    country: "VietNam"
  }
  const addNewToDo = (name) => {
    alert(`Call me ${name}`)
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewToDo={addNewToDo}
      />
      <TodoData
        name={hoidanit}
        age={age}
        country={data}
      />
      <div className='todo-image'>
        <img src={reactLogo} className='logo' />
      </div>
    </div>
  );
}

export default App
