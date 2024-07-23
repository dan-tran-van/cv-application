import EducationItemEditor from './EducationItemEditor';
import { useState } from 'react';

let initialEducationID = 2;

export default function EducationEditor({ 
  education,
  editingCV,
  setEditingCV
}) {
  const [selectedEducationIDs, setSelectedEducationIDs] = useState([]);

  const isSelectedAll = selectedEducationIDs.length !== 0 && selectedEducationIDs.length === education.length;

  function handleAddEducation() {
    setEditingCV({
      ...editingCV,
      education: [
        {
          id: initialEducationID++,
          schoolName: "",
          studyTitle: "",
          startDate: undefined,
          endDate: undefined,
        },
        ...education,
      ],
    });
  }

  function handleDeleteEducation() {
    let updatedEducation = [...education];
    console.log(selectedEducationIDs)
    selectedEducationIDs.forEach((sEID) => {
      updatedEducation = updatedEducation.filter((e) => e.id !== sEID)
    })

    setSelectedEducationIDs([])

    setEditingCV({
      ...editingCV,
      education: updatedEducation,
    })
  }

  return (
    <div className="education-editor">
      <h3>Education</h3>
      <button
        onClick={handleAddEducation}
      >
        Add
      </button>
      {selectedEducationIDs.length > 0 &&
        <>        
          <button
            onClick={handleDeleteEducation}
          >
            Delete
          </button>
        </>
      }
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                id="select-education-all"
                name="select-education-all"
                checked={isSelectedAll}
                onChange={() => {
                  if (isSelectedAll) {
                    setSelectedEducationIDs([])
                  } else {
                    let newSelectedEducationIDs = [];
                    education.forEach(e => {
                      newSelectedEducationIDs.push(e.id);
                    });
                    setSelectedEducationIDs(newSelectedEducationIDs)
                  }
                }}
              />
            </th>
            <th scope='col'>School name</th>
            <th scope='col'>Study title</th>
            <th scope='col'>Start date</th>
            <th scope='col'>End date</th>
            <th scope="col"></th>
          </tr>
        </thead>
          
        <tbody>
          {education.map((e) => 
            <EducationItemEditor 
              selectedEducationIDs={selectedEducationIDs}
              setSelectedEducationIDs={setSelectedEducationIDs}
              key={e.id} 
              education={education}
              item={e} 
              setEditingCV={setEditingCV}
              editingCV={editingCV}
            />
          )}
        </tbody>

      </table>
    </div>
  )
}