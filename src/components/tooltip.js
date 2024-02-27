import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const TooltipText = styled.span`
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  width: 120px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  transition: opacity 0.3s;

  ${(props) => {
    switch (props.position) {
      case 'top':
        return `
          bottom: 125%;
          left: 50%;
          margin-left: -60px;
        `;
      case 'bottom':
        return `
          top: 125%;
          left: 50%;
          margin-left: -60px;
        `;
      case 'right':
        return `
          top: 50%;
          left: 125%;
          margin-top: -10px;
        `;
      case 'left':
        return `
          top: 50%;
          right: 125%;
          margin-top: -10px;
        `;
      default:
        return null;
    }
  }}
`;

const TooltipButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

const Tooltip = ({ children, position }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleButtonClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <TooltipContainer>
      <TooltipButton onClick={handleButtonClick}>{children}</TooltipButton>
      <TooltipText isVisible={isVisible} position={position}>
        I am a tooltip
      </TooltipText>
    </TooltipContainer>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']).isRequired,
};

export default Tooltip;
