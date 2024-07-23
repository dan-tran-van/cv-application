export default function ExperienceItem({ item }) {
  const formattedStartDate = item.startDate ? new Intl.DateTimeFormat('en-US').format(item.startDate) : 'Not started';
  const formattedEndDate =  item.endDate ? new Intl.DateTimeFormat('en-US').format(item.endDate) : 'Present';

  return (
    <>
      {item.companyName !== "" & item.positionTitle !== "" ?
        <div className="experience-item">
          <div className="company-name">{item.companyName}</div>
          <div className="position-title">{item.positionTitle}</div>
          <div className="experience-duration">
            {formattedStartDate} - {formattedEndDate}
          </div>
          <div className="main-responsibilities">{item.mainResponsibilities}</div>
        </div>
        :
        <></>
      }
    </>
    
  )
}