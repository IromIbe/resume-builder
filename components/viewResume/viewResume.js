import React, { useState, useEffect } from "react";

function ViewResume() {
  const [resume, setResume] = useState([]);
  useEffect(() => {
    const resumeData = JSON.parse(localStorage.getItem("allData"));
    if (resumeData) {
      setResume(resumeData);
    }
  }, []);
  console.log(resume[0], "resume");
  console.log(resume[1], "resume 1");
  console.log(resume[2], "resume 2");

  return (
    <div>
      <h1>Loveee</h1>
    </div>
  );
}

export default ViewResume;
