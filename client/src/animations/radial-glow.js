import {keyframes} from "styled-components";

const radialGlow = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  }
  
  100% {
    box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);
  }
`;

export default radialGlow;