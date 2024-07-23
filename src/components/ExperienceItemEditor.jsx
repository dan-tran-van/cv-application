import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ExperienceItemEditor({
  item,
  selectedExperienceIDs,
  setSelectedExperienceIDs,
  setEditingCV,
  editingCV,
  experience,
}) {
  const itemIndex = experience.findIndex((e) => e.id === item.id);
  const isSelected = selectedExperienceIDs.includes(item.id);

  function handleClearExperience() {
    setEditingCV({
      ...editingCV,
      experience: [
        ...editingCV.experience.slice(0, itemIndex),
        {
          ...editingCV.experience[itemIndex],
          companyName: "",
          positionTitle: "",
          mainResponsibilities: "",
          startDate: undefined,
          endDate: undefined,
        },
        ...editingCV.experience.slice(itemIndex + 1),
      ],
    });
  }

  function handleCompanyNameChange(e) {
    setEditingCV({
      ...editingCV,
      experience: [
        ...editingCV.experience.slice(0, itemIndex),
        {
          ...editingCV.experience[itemIndex],
          companyName: e.target.value,
        },
        ...editingCV.experience.slice(itemIndex + 1),
      ],
    });
  }

  function handlePositionTitleChange(e) {
    setEditingCV({
      ...editingCV,
      experience: [
        ...editingCV.experience.slice(0, itemIndex),
        {
          ...editingCV.experience[itemIndex],
          positionTitle: e.target.value,
        },
        ...editingCV.experience.slice(itemIndex + 1),
      ],
    });
  }

  function handleMainResponsibilitiesChange(e) {
    setEditingCV({
      ...editingCV,
      experience: [
        ...editingCV.experience.slice(0, itemIndex),
        {
          ...editingCV.experience[itemIndex],
          mainResponsibilities: e.target.value,
        },
        ...editingCV.experience.slice(itemIndex + 1),
      ],
    });
  }

  function handleStartDateChange(date) {
    setEditingCV({
      ...editingCV,
      experience: [
        ...editingCV.experience.slice(0, itemIndex),
        {
          ...editingCV.experience[itemIndex],
          startDate: date,
        },
        ...editingCV.experience.slice(itemIndex + 1),
      ],
    });
  }

  function handleEndDateChange(date) {
    setEditingCV({
      ...editingCV,
      experience: [
        ...editingCV.experience.slice(0, itemIndex),
        {
          ...editingCV.experience[itemIndex],
          endDate: date,
        },
        ...editingCV.experience.slice(itemIndex + 1),
      ],
    });
  }

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          name={`select-experience-${item.id}`}
          checked={isSelected}
          onChange={() => {
            if (isSelected) {
              const newSelectedExperienceIDs = selectedExperienceIDs.filter(
                (id) => id !== item.id
              );
              setSelectedExperienceIDs(newSelectedExperienceIDs);
            } else {
              setSelectedExperienceIDs([...selectedExperienceIDs, item.id]);
            }
          }}
        />
      </td>
      <td>
        <input
          type="text"
          name={`company-name-${item.id}`}
          id={`company-name-${item.id}`}
          value={item.companyName}
          onChange={handleCompanyNameChange}
        />
      </td>
      <td>
        <input
          type="text"
          name={`position-title-${item.id}`}
          id={`position-title-${item.id}`}
          value={item.positionTitle}
          onChange={handlePositionTitleChange}
        />
      </td>
      <td>
        <textarea
          name={`main-responsibilities-${item.id}`}
          id={`main-responsibilities-${item.id}`}
          onChange={handleMainResponsibilitiesChange}
          value={item.mainResponsibilities}
        >
        </textarea>
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
        <button onClick={handleClearExperience}>Clear</button>
      </td>
    </tr>
  );
}
