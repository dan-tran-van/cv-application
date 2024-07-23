export default function Navigation({
  isEditing,
  setIsEditing,
  savedCV,
  setSavedCV,
  editingCV,
  setEditingCV,
  isPreviewing,
  setIsPreviewing,
}) {
  function handleSave() {
    setSavedCV(editingCV)
    setIsPreviewing(false);
    setIsEditing(!isEditing);
  }

  function handleCancel() {
    setEditingCV(savedCV);
    setIsPreviewing(false);
    setIsEditing(!isEditing);
  }

  function handlePreview() {
    setIsPreviewing(!isPreviewing);
  }

  return (
    <nav>
      {isEditing ? (
        <>
          <div className="nav__element nav__save">
            <button onClick={handleSave}>Save</button>
          </div>
          <div className="nav__element nav__cancel">
            <button onClick={handleCancel}>Cancel</button>
          </div>
          <div className="nav__element nav__preview">
            <button onClick={handlePreview}>
              {isPreviewing ? "Exit preview" : "Preview"}
            </button>
          </div>
        </>
      ) : (
        <div className="nav__element nav__edit">
          <button
            onClick={() => {
              setIsEditing(!isEditing);
            }}
          >
            Edit
          </button>
        </div>
      )}
    </nav>
  );
}
