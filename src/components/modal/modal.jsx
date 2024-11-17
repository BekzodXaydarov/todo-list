import { useDispatch } from "react-redux";
import "./modal.css";
import { CloseModal } from "../../store/Slices/modal.slice";
import { useState } from "react";
import { addData } from "../../store/Slices/data.slice";

const Modal = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleCloseModel = () => {
    dispatch(CloseModal({}));
  };
  const handleAddText = () => {
    if (text.length > 0) {
    }
    dispatch(addData(text));
    handleCloseModel()
  };
  return (
    <div className="modal-container">
      <div className="modal">
        <h1>New Note</h1>
        <input
          type="text"
          placeholder="Input your note..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="modal-buttons">
          <button className="btn1" onClick={handleCloseModel}>
            Cancel
          </button>
          <button className="btn2" onClick={handleAddText}>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
