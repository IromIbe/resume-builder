import React, { useState } from "react";

function useAddition({ e, obj }) {
  e.preventDefault();
  const [value, setValue] = useState([obj]);
}
