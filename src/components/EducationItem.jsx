export default function EducationItem({ item }) {
  const formattedStartDate = item.startDate ? new Intl.DateTimeFormat('en-US').format(item.startDate) : 'Not started';
  const formattedEndDate = item.endDate ? new Intl.DateTimeFormat('en-US').format(item.endDate) : 'Present';

  return (
    <>
    {item.schoolName !== "" & item.studyTitle !== "" ? 
      <div className="education-item">
        <div className="study-title">{item.studyTitle}</div>
        <div className="school-name">{item.schoolName}</div>
        <div className="education-duration">
          {formattedStartDate} - {formattedEndDate}
        </div>
      </div>
      :
      <></>
    }
    
    </>
    
  )
}