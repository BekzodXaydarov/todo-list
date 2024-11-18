import { useDispatch } from "react-redux";
import { useData } from "../../store/useSelector";
import { OpenModal, setUpdate } from "../../store/Slices/modal.slice";
import "./main.css";
import { removeData, toggleTodo } from "../../store/Slices/data.slice";
import { useMemo } from "react";

const Main = () => {
  const { todo, filter, search } = useData();
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(OpenModal({}));
  };
  const handleUpdate = (item) => {
    handleOpenModal()
    dispatch(setUpdate(item))
  }
  const filteredTodos = useMemo(() => {
    if (filter === "complete") {
      return todo.filter((item) => item.completed);
    }
    if (filter === "incomplete") {
      return todo.filter((item) => !item.completed);
    }
    return todo;
  }, [todo, filter]);

  return (
    <div className="main">
      {todo.length > 0 ? (
        <ul>
          {filteredTodos.filter((item) => item.text.toLowerCase().includes(search.toLowerCase())).map((item) => {
            return (
              <li key={item.id}>
                <div className="list-info">
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => dispatch(toggleTodo(item.id))}
                  />
                  <h1
                    style={{
                      textDecoration: item.completed ? "line-through" : "",
                      opacity: item.completed ? "0.2" : "1",
                    }}
                  >
                    {item.text}
                  </h1>
                </div>
                <div className="list-icon">
                  <button>
                    <img src="/pen1.svg" alt="" onClick={() => handleUpdate(item)} />
                  </button>
                  <button onClick={() => dispatch(removeData(item))}>
                    <img src="/bin1.svg" alt="" />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <img src="/LIST.png" className="empty-img" />
      )}
      <div className="add-btn" onClick={handleOpenModal}>
        <img src="/plus.svg" alt="" />
      </div>
    </div>
  );
};

export default Main;
