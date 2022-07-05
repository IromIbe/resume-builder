import React, { useState } from "react";
import { CreateBody } from "./createResume.style";
import { RiAddLine } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";

function CreateResume() {
  const [experience, setExperience] = useState({
    company: "Capgemini",
    designation: "Associate Software Engineer",
    role: "Full Stack Developer (React and Node)",
  });
  const [experienceList, setExperienceList] = useState([experience]);
  const [userData, setUserData] = useState({
    name: "Cynthia Bisong",
    email: "CynthiaBisong@gmail.com",
    phone: "09123456789",
    address: "23 Main St, New York, NY 10001",
    position: "Chief Software Engineer",
    company: "Caparizon",
    designation: "Software Engineer",
    role: "Full Stack Developer",
    institute: "",
    degree: "",
    year: "",
  });

  const handleAdd = (e) => (
    e.preventDefault(),
    setExperienceList([
      ...experienceList,
      { company: "", designation: "", role: "" },
    ])
  );

  const handleRemove = (e, i) => {
    e.preventDefault();
    setExperienceList(
      experienceList.filter((experience, index) => index !== i)
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.name, e.target.value);
    setUserData({ ...userData, [name]: value });
  };

  const handleCompanyAdd = (e, index) => {
    const { name, value } = e.target;
    const newExperienceList = [...experienceList];
    newExperienceList[index][name] = value;
    setExperienceList(newExperienceList);
  };
  return (
    <CreateBody className='py-10 md:px-10 lg:px-20 px-4 flex flex-col justify-center w-100'>
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
            <textarea
              name='address'
              id='address'
              cols='3'
              rows='2'
              value={userData.address}
              onChange={handleChange}
            ></textarea>
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
                      onChange={(e) => handleCompanyAdd(e, index)}
                    />
                  </label>
                  <label htmlFor=''>
                    Designation
                    <input
                      type='text'
                      name='designation'
                      value={exp.designation}
                      onChange={(e) => handleCompanyAdd(e, index)}
                    />
                  </label>
                  <label htmlFor=''>
                    Role
                    <input
                      type='text'
                      name='role'
                      value={exp.role}
                      onChange={(e) => handleCompanyAdd(e, index)}
                    />
                  </label>
                </div>
                <div className='flex'>
                  <button
                    className='bg-[#3c4d58] text-white p-2 rounded-md mr-4'
                    onClick={handleAdd}
                  >
                    <RiAddLine />
                  </button>
                  {experienceList.length > 1 && (
                    <button
                      className='bg-[#3c4d58] text-white p-2 rounded-md'
                      onClick={(e) => handleRemove(e, index)}
                    >
                      <RiCloseLine />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </form>
    </CreateBody>
  );
}

export default CreateResume;
