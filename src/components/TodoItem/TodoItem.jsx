import formatDate from "../../utils/formatDate";

const TodoItem = ({ setTodos, todo }) => {
    const onCheckedToggle = (id) => {
        // функция переключения статуса задач
        setTodos((prevState) => {
          prevState = [...prevState];
    
          prevState = prevState.map((todo) => {
            if(todo.id === id) {
              return{
                ...todo,
                checked: !todo.checked
              }
            }
    
            return todo;
          });
    
          return prevState;
        });
    }
      
    // delete
    const onDeleteTodoById = (id) => {
        setTodos((prevState) => {
            prevState = [...prevState];
            
            prevState = prevState.filter((todo) => todo.id !== id);

            return prevState;
        });
    }

    return (
        <div className="block">
            <h3>{todo.name} ({formatDate(todo.date)})</h3>
            <div className="buttons">
                <button className="button block_yes"
                onClick={() => onCheckedToggle(todo.id)}
                >
                {todo.checked ? "Не выполнено" : "Выполнено"}
                </button>
                <button className="button block_no"
                onClick={() => onDeleteTodoById(todo.id)}>
                    Удалить
                </button>
            </div>
        </div>
    );
}

export default TodoItem;