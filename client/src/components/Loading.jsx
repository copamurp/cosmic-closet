import React from 'react';
import styled from 'styled-components';
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const StyledLoading = styled.div`
  min-width: 250px;
  max-width: 500px;
  width: 100%;
  height: 100%;
  min-height: 250px;
  max-height: 250px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class Loading extends React.Component {
    render() {
        return (
                <StyledLoading $controlWidth>
                    <FontAwesomeIcon icon={icon({
                        name:   'spinner',
                        style:  'regular',
                        family: 'sharp',
                    })} spinPulse size={'3x'}/>;
                </StyledLoading>
        )
    }
}

export default Loading;