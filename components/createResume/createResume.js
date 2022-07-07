import React, { useState } from "react";
import { CreateBody } from "./createResume.style";
import { RiAddLine } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";
import Select from "react-select";
import makeAnimated from "react-select/animated";

// select options
const skills = [
  { value: "React", label: "React" },
  { value: "Angular", label: "Angular" },
  { value: "JavaScript", label: "JavaScript" },
  { value: "TypeScript", label: "TypeScript" },
  { value: "HTML", label: "HTML" },
  { value: "CSS", label: "CSS" },
  { value: "SASS", label: "SASS" },
  { value: "LESS", label: "LESS" },
  { value: "Bootstrap", label: "Bootstrap" },
  { value: "MongoDB", label: "MongoDB" },
  { value: "MySQL", label: "MySQL" },
  { value: "PostgreSQL", label: "PostgreSQL" },
  { value: "Redux", label: "Redux" },
  { value: "Redux-Saga", label: "Redux-Saga" },
  { value: "React-Router", label: "React-Router" },
  { value: "Express", label: "Express" },
  { value: "NodeJS", label: "NodeJS" },
];

function CreateResume() {
  // setting the various experience categories
  const [experience, setExperience] = useState({
    company: "Capgemini",
    designation: "Associate Software Engineer",
    role: "Full Stack Developer (React and Node)",
  });

  // setting the experience category in an array
  const [experienceList, setExperienceList] = useState([experience]);

  // institutional experience
  const [institutions, setInstitutions] = useState({
    school: "Unical",
    degree: "BSC",
    year: 2009,
  });
  const [institutionList, setInstitutionList] = useState([institutions]);

  // each user data value that would require an onChange event
  const [userData, setUserData] = useState({
    name: "Cynthia Bisong",
    email: "CynthiaBisong@gmail.com",
    phone: "09123456789",
    address: "23 Main St, New York, NY 10001",
    position: "Chief Software Engineer",
  });

  // adding multiple experience and institutions category
  const handleAdd = (e, state) => (
    e.preventDefault(),
    state === "experience"
      ? setExperienceList([
          ...experienceList,
          { company: "", designation: "", role: "" },
        ])
      : state === "school"
      ? setInstitutionList([
          ...institutionList,
          { school: "", degree: "", year: "" },
        ])
      : ""
  );

  // handling the onChange event of each multiple input category
  const handleMultipleChange = (e, index, state) => {
    const { name, value } = e.target;
    const newExperienceList = [...experienceList];
    const newInstitutionList = [...institutionList];
    state === "experience"
      ? ((newExperienceList[index][name] = value),
        setExperienceList(newExperienceList))
      : state === "school"
      ? ((newInstitutionList[index][name] = value),
        setInstitutionList(newInstitutionList))
      : "";
  };

  // deleting multiple experience categories on click of each one
  const handleRemove = (e, i, state) => {
    e.preventDefault();

    state === "experience"
      ? setExperienceList(
          experienceList.filter((experience, index) => index !== i)
        )
      : state === "school"
      ? setInstitutionList(
          institutionList.filter((institution, index) => index !== i)
        )
      : "";
  };
  // handling the onChange event of each user data value
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.name, e.target.value);
    setUserData({ ...userData, [name]: value });
  };

  // setting the select options theme for the dropdown
  const customTheme = (theme) => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: "#f5f5f5",
        primary: "#ADD8E6",
      },
    };
  };

  // setting the added skills for react select
  const [addedSkills, setAddedSkills] = useState([]);

  // making react select animatable
  const animatedComponents = makeAnimated();

  return (
    <CreateBody className='lg:py-10 md:py-10 sm:py-8 py-5 md:px-10 lg:px-20 px-4 flex flex-col justify-center w-100'>
      <form action=''>
        <div className='flex'>
          <label htmlFor='name'>
            Name
            <input
              type='text'
              id='name'
              name='name'
              value={userData.name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor='email'>
            Email
            <input
              type='email'
              id='email'
              name='email'
              value={userData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className='flex'>
          <label htmlFor='position'>
            Current Position
            <input
              type='text'
              id='position'
              name='position'
              value={userData.position}
              onChange={handleChange}
            />
          </label>
          <label htmlFor='phone'>
            Phone
            <input
              type='tel'
              id='phone'
              value={userData.phone}
              name='phone'
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor='address'>
            Address
            <input
              type='text'
              name='address'
              id='address'
              cols='3'
              rows='2'
              value={userData.address}
              onChange={handleChange}
            ></input>
          </label>
        </div>
        <div className='experience mt-10'>
          <span className='text-2xl font-bold'>Experience</span>
          {experienceList.map((exp, index) => {
            return (
              <div key={index} className=''>
                <div className='flex items-center'>
                  <label htmlFor='' className=''>
                    Company
                    <input
                      type='text'
                      name='company'
                      value={exp.company}
                      className='w-full'
                      onChange={(e) =>
                        handleMultipleChange(e, index, "experience")
                      }
                    />
                  </label>
                  <label htmlFor=''>
                    Designation
                    <input
                      type='text'
                      name='designation'
                      value={exp.designation}
                      onChange={(e) =>
                        handleMultipleChange(e, index, "experience")
                      }
                    />
                  </label>
                  <label htmlFor=''>
                    Role
                    <input
                      type='text'
                      name='role'
                      value={exp.role}
                      onChange={(e) =>
                        handleMultipleChange(e, index, "experience")
                      }
                    />
                  </label>
                </div>
                <div className='flex'>
                  <button
                    className='bg-[#3c4d58] text-white p-2 rounded-md mr-4'
                    onClick={(e) => handleAdd(e, "experience")}
                  >
                    <RiAddLine />
                  </button>
                  {experienceList.length > 1 && (
                    <button
                      className='bg-[#3c4d58] text-white p-2 rounded-md'
                      onClick={(e) => handleRemove(e, index, "experience")}
                    >
                      <RiCloseLine />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className='select mt-10' style={{ width: "100%" }}>
          <span className='text-2xl font-bold '> Skills</span>

          <Select
            components={animatedComponents}
            defaultValue={[skills[0], skills[2]]}
            onChange={setAddedSkills}
            options={skills}
            theme={customTheme}
            isSearchable
            noOptionsMessage={() => "skill not available"}
            className='mt-4'
            isMulti
            autoFocus
          />
        </div>
        <div className='school mt-10'>
          <span className='text-2xl font-bold'> Institution</span>
          {institutionList.map((institution, index) => {
            return (
              <div key={index} className=''>
                <div className='flex items-center justify-center flex-wrap'>
                  <label htmlFor='school' className=''>
                    Institution
                    <input
                      id='school'
                      type='text'
                      name='school'
                      value={institution.school}
                      className='w-full'
                      onChange={(e) => handleMultipleChange(e, index, "school")}
                    />
                  </label>
                  <label htmlFor='degree'>
                    Degree
                    <input
                      id='degree'
                      type='text'
                      name='degree'
                      value={institution.degree}
                      onChange={(e) => handleMultipleChange(e, index, "school")}
                    />
                  </label>
                  <label htmlFor='year'>
                    Graduation
                    <input
                      id='year'
                      type='number'
                      name='year'
                      value={institution.year}
                      onChange={(e) => handleMultipleChange(e, index, "school")}
                    />
                  </label>
                </div>
                <div className='flex'>
                  <button
                    className='bg-[#3c4d58] text-white p-2 rounded-md mr-4'
                    onClick={(e) => handleAdd(e, "school")}
                  >
                    <RiAddLine />
                  </button>
                  {institutionList.length > 1 && (
                    <button
                      className='bg-[#3c4d58] text-white p-2 rounded-md'
                      onClick={(e) => handleRemove(e, index, "school")}
                    >
                      <RiCloseLine />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className='submit flex justify-center items-center mt-6'>
          <button className='text-white font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-l from-blue-500 to-cyan-500 py-2 px-3 rounded-md w-28'>
            Submit
          </button>
        </div>
      </form>
    </CreateBody>
  );
}

export default CreateResume;
