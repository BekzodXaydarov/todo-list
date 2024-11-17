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
