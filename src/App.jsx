import React from "react";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Modal from "./components/modal/modal";
import { useModal } from "./store/useSelector";

const App = () => {
  const modal = useModal();
  return (
    <>
      <div className="app">
        <Header />
        <Main />
      </div>
      {modal && <Modal />}
    </>
  );
};

export default App;

// figma link
// https://www.figma.com/design/60vknWTtJiUCiHlxerMZgt/Simple-ToDo-List-Design-(Community)?node-id=1-2&node-type=frame&t=8D8I65UQZRqTzIWW-0