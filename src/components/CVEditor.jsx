import GeneralEditor from "./GeneralEditor";
import ExperienceEditor from "./ExperienceEditor";
import EducationEditor from "./EducationEditor";

export default function CVEditor({
  general,
  experience,
  education,
  setEditingCV,
  editingCV
}) {
  return (
    <div className="cv-editor">
      <GeneralEditor 
        general={general} 
        setEditingCV={setEditingCV}
        editingCV={editingCV}
      />
      <ExperienceEditor 
        experience={experience} 
        setEditingCV={setEditingCV} 
        editingCV={editingCV}
      />
      <EducationEditor 
        education={education} 
        setEditingCV={setEditingCV} 
        editingCV={editingCV}
      />
    </div>
  );
}
