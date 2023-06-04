import React from 'react';
import styled from 'styled-components';
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const StyledError = styled.div`
  color: #ffffff;
  text-align: center;
  font-size: 2rem;
  padding: 2rem;
  width: 100%;
  min-width: 350px;
  max-width: 750px;
  height: 100%;
  min-height: 350px;
  max-height: 750px;

  .terminal {
    background-color: rgba(7, 7, 7, 0.5);
    flex: 1;
    width: 100%;
    height: 100%;
    padding: 1rem;
    border-radius: 0.25rem;
    box-shadow: 0 0 3px 1px rgba(7, 7, 7, 0.8);

    .error-code {
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }

    .error-message {
      font-size: 1rem;
      height: 90%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.4);
      border-radius: 0.25rem;
      box-shadow: 0 0 1px rgba(7, 7, 7, 0.8);
      padding: 2rem;
      margin-bottom: 0.5rem;
    }
  }
`;

class ErrorDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: this.props.error,
        }
    }

    render() {
        return (
                <StyledError>
                    <FontAwesomeIcon icon={icon({
                        name:   'robot',
                        style:  'light',
                        family: 'classic',
                    })}
                                     size={'2x'}
                                     style={{marginBottom: '2rem'}}
                    />
                    <div className={'terminal'}>
                        <p className={'error-code'}>
                            error {this.state.error.code}
                        </p>
                        <p className={'error-message'}>
                            {this.state.error.message}
                        </p>
                    </div>
                </StyledError>
        )
    }
}

export default ErrorDisplay;