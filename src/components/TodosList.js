
import TodosItem from './TodosItem'

const TodosList = (props) => {
  return (
    <div>
      <h2>todos</h2>

      {props.todos.map((item,idx) => <TodosItem todos={item} key={idx} /> )} 
    </div>
  );
};

export default TodosList;