import { useDispatch } from "react-redux";
import { useData } from "../../store/useSelector";
import { OpenModal } from "../../store/Slices/modal.slice";
import "./main.css";
import { removeData, toggleTodo } from "../../store/Slices/data.slice";

const Main = () => {
  const { todo } = useData();
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(OpenModal({}));
  };
  return (
    <div className="main">
      {todo.length > 0 ? (
        <ul>
          {todo.map((item) => {            
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
                    <img src="/pen1.svg" alt="" />
                  </button>
                  <button  onClick={()=>dispatch(removeData(item))}>
                    <img src="/bin1.svg" alt="" />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <img src="/LIST.png" />
      )}
      <div className="add-btn" onClick={handleOpenModal}>
        <img src="/plus.svg" alt="" />
      </div>
    </div>
  );
};

export default Main;
