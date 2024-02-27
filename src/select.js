import React from "react";
import styled from "styled-components";

const Select = styled.select`
  padding: 20px;
  margin: 100px 0;
  border-radius: 10px;
  width: 200px;
  font-size: 1.25rem;
`;

function Tooltipselector({ onchange }) {
  const handlechange = (e) => {
    onchange(e.target.value); // Corrected typo: e.traget.value to e.target.value
  };

  return (
    <Select name="tooltipselector" onChange={handlechange}>
      <option value="left">Left</option>
      <option value="right">Right</option>
      <option value="top">Top</option> 
      <option value="bottom">Bottom</option>
    </Select>
  );
}

export default Tooltipselector;
