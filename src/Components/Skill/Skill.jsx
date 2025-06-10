import React from 'react'
import "./Skill.css"
import FaddedTxt from '../FaddedText/FaddedTxt';

const Skill = () => {

  let programLan = [
    { name : "TypeScript", level : 80},
        { name: "JavaScript", level: 80 },
    { name: "Java Core", level: 80 },
    { name: "Python", level: 50 },
    { name: "C", level: 40 },
    { name: "C++", level: 30 },

  ];

  let DevlopLan = [
    { name: "Cloudflare workers (Hono)", level : 75},
    { name: "Express JS", level : 85},
    { name: "Next Js", level : 60},
    { name: "Tailwind CSS", level: 90 },
    { name: "React Js", level: 65 },
    { name: "Redux Toolkit", level : 80}
  ];

  let DataBase = [
    { name: "MongoDB", level: 85 },
    { name: "Postgress", level : 85},
    { name: "SQL", level: 50 }
  ];

  let coreSubj = [
    { name: "DSA", level: 40 },
    { name: "OOP", level: 70 },
    { name: "OS", level: 50 },
  ]

  return (
    <div className='skill_wrapper'>
      <div className='skill_container'>


        <div className='fadded_text_container'>
          <FaddedTxt title={"MY SKILLS"} />
          <FaddedTxt heading={"MY SKILLS"} />
        </div>


        <div className='lang_skills'>

          <div className="skill-container">
            <h2 className='skils_heading'>Programming Language</h2>

            <div>
              {programLan.map((skill, index) => (
                <div className="skill" key={index}>
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: `${skill.level}%` }}>
                    </div>
                    <div>{skill.level}%</div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          <div className="skill-container">
            <h2 className='skils_heading' >Web Devlopment Language</h2>

            <div>
              {DevlopLan.map((skill, index) => (
                <div className="skill" key={index}>
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: `${skill.level}%` }}>
                    </div>
                    <div>{skill.level}%</div>
                  </div>
                </div>
              ))}
            </div>

          </div>


          <div className="skill-container">
            <h2 className='skils_heading' >Core Subject</h2>

            <div>
              {coreSubj.map((skill, index) => (
                <div className="skill" key={index}>
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: `${skill.level}%` }}>
                    </div>
                    <div>{skill.level}%</div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          <div className="skill-container">
            <h2 className='skils_heading'>Data Base</h2>

            <div>
              {DataBase.map((skill, index) => (
                <div className="skill" key={index}>
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: `${skill.level}%` }}>
                    </div>
                    <div>{skill.level}%</div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Skill
