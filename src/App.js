import React, { useState } from 'react';
import styled from "styled-components";
import Tooltip from './components/tooltip';
import Tooltipselector from './select';
import "./style.css";

const TooltipTarget = styled.span`
  color: blue;
  cursor: pointer; /* Make sure the cursor changes to indicate it's clickable */
`;

export default function App(){
  const[position,setposition]=useState("left");

  const handlechange=(value)=>{
    setposition(value);
  };
  return(
    <div className="App">
    <Tooltipselector onchange={handlechange}/>
    <Tooltip text= "I am Tooltip" position={position} background="red">
    
      <TooltipTarget>Press</TooltipTarget>
    </Tooltip>
 
    
    
    
    
    </div>
  );
}