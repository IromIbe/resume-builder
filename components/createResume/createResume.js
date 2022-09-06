import React, { useState, useEffect } from "react";
import { CreateBody } from "./createResume.style";
import { RiAddLine } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Modal from "../modal/modal";
import { skills } from "./skills";
import Link from "next/dist/client/link";
import { useRouter } from "next/router";

function CreateResume() {
  // modal for submitted successfully
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [view, setView] = useState(false);

  // setting the various experience categories
  const [experience, setExperience] = useState({
    company: "",
    designation: "",
    role: "",
  });

  // setting the experience category in an array
  const [experienceList, setExperienceList] = useState([experience]);

  // institutional experience
  const [institutions, setInstitutions] = useState({
    school: "",
    degree: "",
    year: 0,
  });
  // setting the institution category in an array
  const [institutionList, setInstitutionList] = useState([institutions]);

  // each user data value that would require an onChange event
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    position: "",
    about: "",
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

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const allData = {
      userData: userData,
      skills: skills,
      exp: experienceList,
      school: institutionList,
    };
    if (typeof window !== "undefined") {

      localStorage.setItem("allData", JSON.stringify(allData));

      }
      setShow(true);
  };
  return (
    <CreateBody className='md:py-8  py-5 md:px-10 lg:px-20 px-4 flex flex-col justify-center w-100'>
      <form action='' onSubmit={handleSubmit}>
        <div className='flex'>
          <label htmlFor='name'>
            Name
            <input
              type='text'
              id='name'
              name='name'
              value={userData.name}
              onChange={handleChange}
              required
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
              required
            />
          </label>
        </div>
        <div className='about'>
          <label htmlFor='about'>
            About
            <textarea
              type='text'
              id='about'
              name='about'
              value={userData.about}
              onChange={handleChange}
              required
              cols='30'
              rows='3'
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
              required
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
              required
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
              required
            />
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
                      required
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
                      required
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
                      required
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
                      required
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
                      required
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
                      required
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
      {show && (
        <Modal handleClose={handleClose}>
          <div className='flex justify-center items-center flex-col'>
            <img
              src='/hurray.gif'
              alt=''
              style={{ width: "200px", height: "130px" }}
            />
            <h1 className='text-3xl font-bold'>Resume Successfully Created!</h1>
            <Link href='/view-resume'>
              <button className='text-white font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-l from-blue-500 to-cyan-500 py-2 px-3 rounded-md w-28 flex justify-center items-end my-6'>
                View
              </button>
            </Link>
          </div>
        </Modal>
      )}
    </CreateBody>
  );
}

export default CreateResume;
