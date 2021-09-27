import { useDispatch, useSelector } from 'react-redux'
import {
  decrement, increment, reset, addTodo, removeTodos,
} from '../../toolkitRedux/toolkitSlice'

export const TestToolkit = () => {
  const count = useSelector((state) => state.toolkit.count)
  const todos = useSelector((state) => state.toolkit.todos)
  const dispatch = useDispatch()

  const clickPlus = async () => {
    dispatch(increment())
  }
  const clickMinus = () => {
    dispatch(decrement())
  }
  return (
    <>
      <div className="app">
        <h1>
          Счетчик
          {count}
        </h1>
        <button
          type="button"
          onClick={clickPlus}
        >
          Инкремент
        </button>
        <button
          type="button"
          onClick={clickMinus}
        >
          Декремент
        </button>
        <button
          type="button"
          onClick={() => dispatch(reset())}
        >
          RESET
        </button>
        <button
          type="button"
          onClick={() => dispatch(addTodo(prompt()))}
        >
          ADD TEXT
        </button>
        <button
          type="button"
          onClick={() => dispatch(removeTodos())}
        >
          Remove TODOS
        </button>
        <ul>
          {todos.map((el) => <li key={el}>{el}</li>)}
        </ul>
        <div />
        {/* <button> */}
        {/*  Удалить последний ТУДУ */}
        {/* </button> */}
        {/* <button> */}
        {/*  Добавить ТУДУ */}
        {/* </button> */}
      </div>
    </>
  )
}

export default TestToolkit
