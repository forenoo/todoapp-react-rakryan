import Swal from "sweetalert2";

const TodoAdd = ({ daftarTugas, setDaftarTugas, tugas, setTugas }) => {
  const showErrorAlert = () => {
    Swal.fire({
      icon: "error",
      title: "Tugas Harus Diisi",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleAddTugas = () => {
    tugas.length > 0
      ? (setDaftarTugas([
          ...daftarTugas,
          {
            id: Date.now(),
            namaTugas: tugas,
            checked: false,
          },
        ]),
        setTugas(""))
      : showErrorAlert();
  };

  return (
    <section>
      <div className="row justify-content-center align-item-center mb-2">
        <div className="col-8">
          <input
            type="text"
            className="form-control"
            placeholder="Masukkan Tugas Baru"
            value={tugas}
            onChange={(e) => setTugas(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-primary" onClick={handleAddTugas}>
            Tambah
          </button>
        </div>
      </div>
    </section>
  );
};

export default TodoAdd;
