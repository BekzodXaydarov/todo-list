import React from "react";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Modal from "./components/modal/modal";
import { useColor, useModal } from "./store/useSelector";
import { useDispatch } from "react-redux";
import { CloseModal } from "./store/Slices/modal.slice";
import Toastify from "./components/toastify/toastify";

const App = () => {
  const {isActive} = useModal();
  const dispatch = useDispatch()
  const color = useColor()
  

  return (
    <div  className={`${color ? "darkMode":"whiteMode"}`} style={{height:"100%"}}>
    <Toastify />
      <main>
        <Header />
        <Main />
      </main>
      <div className={`${isActive ? "active-main" : ""}`} onClick={() => dispatch(CloseModal({}))}>
      </div>
      {isActive && <Modal />}
    </div>
  );
};

export default App;

// figma link
// https://www.figma.com/design/60vknWTtJiUCiHlxerMZgt/Simple-ToDo-List-Design-(Community)?node-id=1-2&node-type=frame&t=8D8I65UQZRqTzIWW-0