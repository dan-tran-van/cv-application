import EducationItem from './EducationItem';

export default function Education({ education }) {
  return (
    <>
      <h3>Education</h3>
      {education.map((e, index) => 
        <EducationItem key={index} item={e} /> 
      )}
    </>
  )
}