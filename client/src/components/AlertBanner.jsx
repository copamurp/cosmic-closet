import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";

const StyledAlertBanner = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    height: ${props => props.$isShown ? '4rem' : '0'};
    align-items: center;
    justify-content: center;
    background: linear-gradient(90deg, #4f4ddf 0%, #5B5AA8 50%, #4f4ddf 100%);
    border: ${props => props.$isShown ? '2px solid #4f4ddf' : 'none'};
    z-index: 5;
    transition: height 0.25s ease-in-out;
`;

const StyledAlertBannerCloseButton = styled.button`
    display: ${props => props.$isShown ? 'block' : 'none'};
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 2rem;
    height: 2rem;
    border: none;
    color: #ffffff;
    background: none;
    z-index: 6;
`;

const StyledAlertMessage = styled.p`
    display: ${props => props.$isShown ? 'block' : 'none'};
    font-size: 1.5rem;
    color: #ffffff;
    z-index: 6;
`;

class AlertBanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: this.props.message,
            show:    true,
        };
    }

    render() {
        return (<StyledAlertBanner unmountOnExit $isShown={this.state.show}>
            <StyledAlertMessage
                    $isShown={this.state.show}>{this.state.message}</StyledAlertMessage>
            <StyledAlertBannerCloseButton
                    $isShown={this.state.show}
                    unmountOnExit
                    onClick={() => this.setState({show: false})}>
                <FontAwesomeIcon
                        icon={icon({
                            name:  'circle-xmark',
                            style: 'light',
                        })}
                        size="2x"
                />
            </StyledAlertBannerCloseButton>
        </StyledAlertBanner>)
    }
}

export default AlertBanner;