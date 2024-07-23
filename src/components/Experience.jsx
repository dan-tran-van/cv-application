import ExperienceItem from './ExperienceItem';

export default function Experience({ experience }) {
  return (
    <>
      <h3>Experience</h3>
      {experience.map((e, index) => 
        <ExperienceItem key={index} item={e} />
      )}
    </>
  )
}