const TodoHide = ({ daftarTugas, hide, setHide }) => {
  return (
    <section>
      {daftarTugas.length > 0 ? (
        <div className="mb-3 mt-2 ms-4">
          <input
            type="checkbox"
            onChange={() => setHide(!hide)}
            className="form-check-input"
          />
          <label className="ms-2">Sembunyikan Tugas Selesai</label>
        </div>
      ) : null}
    </section>
  );
};

export default TodoHide;
