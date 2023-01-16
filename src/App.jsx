import { useState, useEffect } from "react";

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${day}.${month}.${year}`;
}

const App = () => {
  // Состояние задач
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "Купить продукты",
      date: new Date(),
      checked: false
    },
    {
      id: 2,
      name: "Заправить автомобиль",
      date: new Date(),
      checked: false
    }
  ]);

  const [value, setValue] = useState('');

  // Функция обновления
  const onChangeHandle = (event) => {
    setValue(event.target.value);
  }

  // Функция добавления задачи
  const onSubmitHandle = (event) => {
    event.preventDefault();

    setTodos((prevState) => {
      prevState = [...prevState];

      prevState.push({
        id: Date.now(),
        name: value,
        date: new Date(),
        checked: false
      });

      return prevState;
    });

    setValue('');

    console.log(value);
  }

  const onCheckedToggle = (id) => {
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
    <div className="layout">
      <div>
        <form onSubmit = {(e) => onSubmitHandle(e)} className="text_form">
          <h2>Добавить задачу:</h2>
          <input 
            type = "text" 
            placeholder = "Купить молоко..." 
            onChange = {(e) => onChangeHandle(e)}
            value = {value}
            />
        </form>
      </div>

      <div className="form">
        {
          todos.map((todo) => {
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
          })
        }
      </div>
    </div>
  );
};
export default App;
