import React from 'react';
import styled from 'styled-components';

const StyledMediaWrapper = styled.div`
    width: 100%;
    max-width: 1280px;
    height: 100%;
    max-height: 720px;
    border-radius: 1rem;
    background: radial-gradient(ellipse at top left, rgba(255, 255, 255, 0.2) 0, rgba(255, 255, 255, 0.02) 100%);
    box-shadow: 0 0 3px ${props => props.$colorScheme === 'white'
            ? '#ffffff'
            : '#5B5AA8'};
    padding: 1rem;

    .media-label {
        width: 100%;
        text-align: center;
        border-radius: 0.5rem;
        color: ${props => props.$colorScheme ? 'white' : '#8F81C2'};
        font-size: 1.5rem;
        font-size: clamp(1.5rem, 1.35rem + 0.75vw, 2.25rem);
        margin-bottom: 1rem;
        padding: 1rem;
        background-color: rgba(5, 5, 5, 0.5);
        box-shadow: 0 0 2px 1px ${props => props.$colorScheme
                ? 'white'
                : 'red'};
    }
`;

class ExternalMediaWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            label:       this.props.label,
            colorScheme: this.props.colorScheme,
        }
    }

    render() {
        return (
                <StyledMediaWrapper $colorScheme={this.state.colorScheme}>
                    <h3 className={'media-label'}>{this.state.label}</h3>
                    {this.props.media}
                </StyledMediaWrapper>
        )
    }
}

export default ExternalMediaWrapper;