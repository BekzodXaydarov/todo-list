import { useDispatch } from "react-redux";
import "./modal.css";
import { CloseModal } from "../../store/Slices/modal.slice";
import { useState } from "react";
import { addData, updateTodo } from "../../store/Slices/data.slice";
import { OpenToastify } from "../../store/Slices/toastify.slice";
import { useData, useModal } from "../../store/useSelector";

const Modal = () => {
  const { update } = useModal()
  const { todo } = useData()
  const [text, setText] = useState(update.isUpdate ? update.text : "");
  const dispatch = useDispatch();
  const handleCloseModel = () => {
    dispatch(CloseModal({}));
  };
  const handleText = () => {
    if (text.length === 0) {
      dispatch(OpenToastify({ text: "textni kiriting", type: 'error' }))
    } else {
      if (update.isUpdate) {
        dispatch(OpenToastify({ text: "note updated", type: "success" }))
        dispatch(updateTodo({ ...update, text: text }))
        handleCloseModel()
      } else {
        if (!todo.some((item) => item.text == text)) {
          dispatch(OpenToastify({ text: "note created", type: "success" }))
          dispatch(addData(text));
          handleCloseModel()
        } else {
          dispatch(OpenToastify({ text: "bunday note bor", type: "error" }))
        }
      }
    }
  };
  return (
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
        <button className="btn2" onClick={handleText}>Apply</button>
      </div>
    </div>
  );
};

export default Modal;
