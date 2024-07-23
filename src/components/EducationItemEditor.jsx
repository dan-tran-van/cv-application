import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function EducationItemEditor({ 
  item,
  selectedEducationIDs,
  setSelectedEducationIDs,
  setEditingCV,
  editingCV,
  education
}) {
  const itemIndex = education.findIndex((e) => e.id === item.id);
  const isSelected = selectedEducationIDs.includes(item.id);

  function handleClearEducation() {
    setEditingCV({
      ...editingCV,
      education: [
        ...editingCV.education.slice(0, itemIndex),
        {
          ...editingCV.education[itemIndex],
          schoolName: "",
          studyTitle: "",
          startDate: undefined,
          endDate: undefined,
        },
        ...editingCV.education.slice(itemIndex + 1),
      ],
    });
  }

  function handleSchoolNameChange(e) {
    setEditingCV({
      ...editingCV,
      education: [
        ...editingCV.education.slice(0, itemIndex),
        {
          ...editingCV.education[itemIndex],
          schoolName: e.target.value,
        },
        ...editingCV.education.slice(itemIndex + 1),
      ],
    });
  }

  function handleStudyTitleChange(e) {
    setEditingCV({
      ...editingCV,
      education: [
        ...editingCV.education.slice(0, itemIndex),
        {
          ...editingCV.education[itemIndex],
          studyTitle: e.target.value,
        },
        ...editingCV.education.slice(itemIndex + 1),
      ],
    });
  }


  function handleStartDateChange(date) {
    setEditingCV({
      ...editingCV,
      education: [
        ...editingCV.education.slice(0, itemIndex),
        {
          ...editingCV.education[itemIndex],
          startDate: date,
        },
        ...editingCV.education.slice(itemIndex + 1),
      ],
    });
  }

  function handleEndDateChange(date) {
    setEditingCV({
      ...editingCV,
      education: [
        ...editingCV.education.slice(0, itemIndex),
        {
          ...editingCV.education[itemIndex],
          endDate: date,
        },
        ...editingCV.education.slice(itemIndex + 1),
      ],
    });
  }

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          name={`select-education-${item.id}`}
          checked={isSelected}
          onChange={() => {
            if (isSelected) {
              const newSelectedEducationIDs = selectedEducationIDs.filter(
                (id) => id !== item.id
              );
              setSelectedEducationIDs(newSelectedEducationIDs);
            } else {
              setSelectedEducationIDs([...selectedEducationIDs, item.id]);
            }
          }}
        />
      </td>
      <td>
        <input 
          type="text" 
          value={item.schoolName}
          onChange={handleSchoolNameChange} 
        />
      </td>
      <td>
        <input 
          type="text" 
          value={item.studyTitle}
          onChange={handleStudyTitleChange}
        />
      </td>
      <td>
        <DatePicker
          selected={item.startDate && item.startDate}
          onChange={handleStartDateChange}
        />
      </td>
      <td>
        <DatePicker
          selected={item.endDate && item.endDate}
          onChange={handleEndDateChange}
        />
      </td>
      <td>
        <button onClick={handleClearEducation} >Clear</button>
      </td>
    </tr>
  )
}