import "./App.css";
import Navigation from "./components/Navigation";
import CV from "./components/CV";
import CVEditor from "./components/CVEditor";
import { useState } from "react";

function App() {
  const [savedCV, setSavedCV] = useState({
    general: GENERAL,
    experience: EXPERIENCE,
    education: EDUCATION,
  });

  const [editingCV, setEditingCV] = useState({
    general: GENERAL,
    experience: EXPERIENCE,
    education: EDUCATION,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isPreviewing, setIsPreviewing] = useState(false);

  return (
    <>
      <main>
        {!isEditing ? 
          <CV
            general={savedCV.general}
            experience={savedCV.experience}
            education={savedCV.education}
          />
        : isPreviewing ?
          <CV
            general={editingCV.general}
            experience={editingCV.experience}
            education={editingCV.education}
          />
        :
          <CVEditor
            general={editingCV.general}
            experience={editingCV.experience}
            education={editingCV.education}
            editingCV={editingCV}
            setEditingCV={setEditingCV}
          />
        }
      </main>

      <Navigation 
        isEditing={isEditing} 
        setIsEditing={setIsEditing} 
        isPreviewing={isPreviewing}
        setIsPreviewing={setIsPreviewing}
        setEditingCV={setEditingCV}
        editingCV={editingCV}
        setSavedCV={setSavedCV}
        savedCV={savedCV}
      />
    </>
  );
}

export default App;

const GENERAL = {
  name: "Trần Văn Đàn",
  email: "dantran@trangtranh.com",
  phone: "+84 392 197 603",
};

const EXPERIENCE = [
  {
    id: 2,
    companyName: "Trang tranh",
    positionTitle: "CTO",
    mainResponsibilities:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum.",
    startDate: new Date(2023, 9, 3),
    endDate: undefined,
  },
  {
    id: 1,
    companyName: "Du gian",
    positionTitle: "CEO",
    mainResponsibilities:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum.",
    startDate: new Date(2023, 9, 3),
    endDate: undefined,
  },
];

const EDUCATION = [
  {
    id: 1,
    schoolName: "The Odin Project",
    studyTitle: "Full-stack web developer",
    startDate: new Date(2023, 4),
    endDate: undefined,
  },
];
