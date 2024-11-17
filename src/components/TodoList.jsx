import { FaTrashCan } from "react-icons/fa6";

const TodoList = ({ daftarTugas, setDaftarTugas, hide }) => {
  const handleCheckboxChange = (id) => {
    setDaftarTugas(
      daftarTugas.map((tugas) =>
        tugas.id === id ? { ...tugas, checked: !tugas.checked } : tugas
      )
    );
  };

  const handleDeleteTugas = (id) => {
    setDaftarTugas(daftarTugas.filter((tugas) => tugas.id !== id));
  };

  return (
    <section>
      {daftarTugas.map((tugas) => (
        <div
          className={`row ms-5 ${hide && tugas.checked ? "hide" : ""}`}
          key={tugas.id}
        >
          <div className="col-9 d-flex align-items-center">
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange(tugas.id)}
              className="form-check-input"
            />
            <label className={`ms-2 ${tugas.checked && "done"}`}>
              {tugas.namaTugas}
            </label>
          </div>
          <div className="col-2 text-center p-0">
            <button className="btn" onClick={() => handleDeleteTugas(tugas.id)}>
              <FaTrashCan />
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TodoList;
