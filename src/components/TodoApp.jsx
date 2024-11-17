import { useState } from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import TodoHide from "./TodoHide";

const TodoApp = () => {
  const [daftarTugas, setDaftarTugas] = useState([]);
  const [tugas, setTugas] = useState("");
  const [hide, setHide] = useState(false);

  return (
    <div className="containers">
      <h1 className="text-center fw-bold fs-3 my-3">Todo List</h1>
      <TodoAdd
        daftarTugas={daftarTugas}
        setDaftarTugas={setDaftarTugas}
        tugas={tugas}
        setTugas={setTugas}
      />
      <TodoList
        daftarTugas={daftarTugas}
        setDaftarTugas={setDaftarTugas}
        hide={hide}
      />
      <TodoHide daftarTugas={daftarTugas} hide={hide} setHide={setHide} />
    </div>
  );
};

export default TodoApp;
