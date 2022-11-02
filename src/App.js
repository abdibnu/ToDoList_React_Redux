import {useState} from "react"
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addItem } from "../src/redux/modules/todos";

const ContainerToDoItem = styled.div`
width: 150px;
height: 150px;
padding: 12px;
border: 2px green solid;
background-color: azure;
`;

const Task = styled.div`
font-size: 14px
font-weight: bold;
`;

const ToDoItem = ({task}) => {
  return (
    <ContainerToDoItem>
    <Task>
      {task}
    </Task>
    </ContainerToDoItem>
  );
};

const ContainerToDoList = styled.div`
display: flex;
flex-direction: row;
gap: 16px;
`

const ToDoList = () => {
  const toDos = useSelector(state => state.toDos.items);
   return(
    <ContainerToDoList>
      {toDos.map(task => {
        return <ToDoItem task={task} key={task} />;
      })}
    </ContainerToDoList>
   );
};

const ContainerToDoForm = styled.div`
padding : 32px;
background-color: azure;
`

const ToDoForm = () => {
  const dispatch = useDispatch();
  const [toDo, setToDo] = useState('');
  const handleNewToDo = ({target: {value}}) => {
    setToDo(value)
  };
  const createNewToDo =() => {
    if(!toDo) return;
    dispatch(addItem(toDo));
    // alert(`new to do is ${toDo}`, toDo);
  };
  return(
    <ContainerToDoForm>
      <input 
        value={toDo}
        onChange={handleNewToDo}
        /> 
      <buton onClick={createNewToDo}>Add New To Do</buton>
    </ContainerToDoForm>
  );
};

const ContainerApp = styled.div`
width: 100%;
height: 100%;
background-color: beige;
`;

const App = () => {
  const count = useSelector(state => state.toDos.items.length);
  return(
    <ContainerApp>
      <h1>To Do List (Available = {count}) task </h1>
      <ToDoForm/>
      <ToDoList/>
    </ContainerApp>
  );
};

export default App;
