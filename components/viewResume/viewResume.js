import React, { useState, useEffect } from "react";

function ViewResume() {
  const [resume, setResume] = useState({});
  console.log(resume, "resume");

  useEffect(() => {
    // Perform localStorage action
     const item = localStorage.getItem('allData')
     setResume( JSON.parse(item))
  }, [])
{!resume && (<div>Loading....</div>)}
  return (
    <div className=' bg-white flex justify-center items-center'>
      <div
        className='resume px-10 py-7 bg-[#fffdee] my-10 border-t-8'
        style={{ width: "85%", borderRadius: "10px" }}
      >
        <div className='general-info flex flex-col sm:flex-row justify-between items-start'>
          <div className='mail-name'>
            <h1 className='sm:text-5xl text-3xl font-bold leading-10 mb-4 text-gray-700'>
              {(resume?.userData?.name)?.toUpperCase()}
            </h1>
            <p className='text-sm font-semibold'>{resume?.userData?.position}</p>
          </div>
          <div className=''>
            <p className=' text-sm '>{resume?.userData?.address}</p>
            <p className='leading-8 text-sm font-bold'>
              {resume?.userData?.phone}
            </p>

            <a
              href={`mailto: ${resume?.userData?.email}`}
              className='text-[#0267f5] text-sm font-semibold cursor-pointer'
              email
            >
              {resume?.userData?.email}
            </a>
          </div>
        </div>
        <div className='summary flex  flex-col sm:mt-20 mt-4 justify-evenly'>
          <div className='about text-sm'>
            <h1 className='font-bold text-3xl leading-10 mb-3'>SUMMARY</h1>

            <p>{resume?.userData?.about}</p>
          </div>
          <div className='skills mt-8'>
          <div>
          <h1 className='font-bold text-3xl leading-10 mb-3'>SKILLS</h1>
          </div>
          <div className="flex flex-wrap ">
          {resume?.skills?.map((skill, idx) => (
              <div key={idx} className='mb-4 mt-2 m-5'>
                <p className='font-normal text-base'>
                  {skill.label}
            </p>
              </div>
            ))}
          </div>

          </div>
        </div>
        <div className='exp flex flex-col'>
          <div className='flex flex-col my-9'>
            <h1 className='font-bold text-3xl'>EXPERIENCE</h1>
            {resume?.exp?.map((exp, idx) => (
              <div key={idx} className='mb-4 mt-2'>
                <h3 className='font-bold text-lg'>
                  {exp.company} -
                  <span className='font-medium text-sm italic ml-2'>
                    {exp.designation}
                  </span>
                </h3>
                <p className='font-normal text-base italic'>{exp.role}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col'>
            <h1 className='font-bold text-3xl'>EDUCATION</h1>
            {resume?.school?.map((school, idx) => (
              <div key={idx} className='mb-4 mt-2'>
              <h3 className='font-bold text-lg'>{school.school}</h3>
                <p className=' font-normal text-base italic'>
                  {school.degree} -
                  <span className='font-medium text-sm italic ml-2'>
                    {school.year}
                  </span>
                </p>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
}

export default ViewResume;
