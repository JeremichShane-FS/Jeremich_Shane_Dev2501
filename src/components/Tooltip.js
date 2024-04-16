import styled from "styled-components";

const TooltipText = styled.div`
  display: none;
  width: max-content;
  background-color: #f5f5f5;
  color: #222;
  font-size: 0.75rem;
  text-align: center;
  padding: 5px;
  border-radius: 6px;
  position: absolute;
  z-index: 2;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;

  ::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #3a3b3c transparent transparent transparent;
  }
`;

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;

  &:hover ${TooltipText} {
    display: block;
    opacity: 1;
  }
`;

const Tooltip = ({ children, text }) => (
  <TooltipContainer>
    {children}
    <TooltipText>{text}</TooltipText>
  </TooltipContainer>
);

export default Tooltip;
