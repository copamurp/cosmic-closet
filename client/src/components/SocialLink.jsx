import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const StyledSocial = styled(FontAwesomeIcon)`
  transition: transform 0.2s ease-in-out;
  transform: scale(1);

  :hover {
    transform: scale(1.2);
  }
`;

class SocialLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            link:  props.link,
            icon:  props.icon,
            color: props.color,
            size:  props.size,
        }
    }

    render() {
        return (
                <a href={this.state.link} target="_blank" rel="noreferrer">
                    <StyledSocial icon={this.state.icon}
                                  style={{color: this.state.color}}
                                  size={this.state.size}/>
                </a>
        )
    }
}

export default SocialLink;