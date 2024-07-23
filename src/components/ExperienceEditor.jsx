import ExperienceItemEditor from "./ExperienceItemEditor";
import { useState } from "react";

let initialExperienceID = 3;

export default function ExperienceEditor({
  experience,
  setEditingCV,
  editingCV,
}) {
  const [selectedExperienceIDs, setSelectedExperienceIDs] = useState([]);

  const isSelectedAll = selectedExperienceIDs.length !== 0 && selectedExperienceIDs.length === experience.length;

  function handleAddExperience() {
    setEditingCV({
      ...editingCV,
      experience: [
        {
          id: initialExperienceID++,
          companyName: "",
          positionTitle: "",
          mainResponsibilities: "",
          startDate: undefined,
          endDate: undefined,
        },
        ...experience,
      ],
    });
  }

  function handleDeleteExperience() {
    let updatedExperience = [...experience];
    console.log(selectedExperienceIDs)
    selectedExperienceIDs.forEach((sEID) => {
      updatedExperience = updatedExperience.filter((e) => e.id !== sEID)
    })

    setSelectedExperienceIDs([])

    setEditingCV({
      ...editingCV,
      experience: updatedExperience,
    })
  }

  return (
    <div className="experience-editor">
      <h3>Experience</h3>
      <button 
        onClick={handleAddExperience}
      >
        Add
      </button>
      {selectedExperienceIDs.length > 0 && 
        <>
          <button
            onClick={handleDeleteExperience} 
          >
            Delete
          </button>
        </>
      }
      <table>
        <thead>
          <tr>
            <th scope="col">
              <input
                type="checkbox"
                id="select-experience-all"
                name="select-experience-all"
                checked={isSelectedAll}
                onChange={() => {
                  if (isSelectedAll) {
                    setSelectedExperienceIDs([])
                  } else {
                    let newSelectedExperienceIDs = [];
                    experience.forEach(e => {
                      newSelectedExperienceIDs.push(e.id);
                    });
                    setSelectedExperienceIDs(newSelectedExperienceIDs)
                  }
                }}
              />
            </th>
            <th scope="col">Company Name</th>
            <th scope="col">Position Title</th>
            <th scope="col">Main responsibilities</th>
            <th scope="col">Start date</th>
            <th scope="col">End date</th>
            <th scope="col"></th>
          </tr>
        </thead>

        <tbody>
          {experience.map((e) => (
            <ExperienceItemEditor
              selectedExperienceIDs={selectedExperienceIDs}
              setSelectedExperienceIDs={setSelectedExperienceIDs}
              key={e.id}
              experience={experience}
              item={e}
              setEditingCV={setEditingCV}
              editingCV={editingCV}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
