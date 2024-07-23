import Experience from './Experience';
import Education from './Education';

export default function CV({ general, experience, education }) {

  return (
    <div className='cv'>
      <h2>{general.name}</h2>
      <div className="cv__contact">
        {(general.email || general.phone) && 
          <h3>Contacts</h3>
        }
        {general.email !== "" && 
          <>
            <div>{general.email}</div>
          </>
        }
        {general.phone !== "" &&
          <>
            <div>{general.phone}</div>
          </> 
        }
      </div>
      <Experience experience={experience} />
      <Education education={education} />
    </div>
  );
}
