export default function GeneralEditor({ 
  general, 
  setEditingCV,
  editingCV
}) {
  function handleNameChange(e) {
    setEditingCV({
      ...editingCV,
      general: {
        ...editingCV.general,
        name: e.target.value
      }
    })
  }

  function handleEmailChange(e) {
    setEditingCV({
      ...editingCV,
      general: {
        ...editingCV.general,
        email: e.target.value
      }
    })
  }

  function handlePhoneChange(e) {
    setEditingCV({
      ...editingCV,
      general: {
        ...editingCV.general,
        phone: e.target.value
      }
    })
  }

  return (
    <div className="general-editor">
      <h3>General</h3>

      <div className="name-editor">
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          name="name" 
          id="name" 
          value={general.name} 
          onChange={handleNameChange}
        />
      </div>

      <div className="email-editor">
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          name="email" 
          id="email" 
          value={general.email} 
          onChange={handleEmailChange}
        />
      </div>

      <div className="phone-number-editor">
        <label htmlFor="phone-number">
          Phone number
        </label>
        <input 
          type="text" 
          name="phone-number" 
          id="phone-number" 
          value={general.phone} 
          onChange={handlePhoneChange}
        />
      </div>
    </div>
  );
}
