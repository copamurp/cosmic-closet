import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {icon} from '@fortawesome/fontawesome-svg-core/import.macro';
import guest from '../assets/images/guests/rsutton.webp';

const StyledGuest = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: scale(1);
  transition: transform 0.5s ease-in-out;
  cursor: pointer;
  margin: 4rem;

  @media only screen and (max-width: 768px) {
    margin: 2rem;
  }

  :hover {
    transform: scale(1.2);
  }
`;

const StyledWrapper = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;

  img {
    height: 100%;
    width: auto;
  }

  .placeholder {
    background: radial-gradient(circle at center,
    rgba(182, 152, 255, 0.1) 0, rgba(114, 112, 234, 0.5) 90%);
  }
`;

const StyledName = styled.p`
  font-size: ${(props) => props.$isHovered ? '1.65rem' : '1.5rem'};
  font-weight: 200;
  transition: color 0.5s ease-in-out, font-size 0.5s ease-in-out;
  color: #7270ea;
`;

const StyledPlaceholderIcon = styled(FontAwesomeIcon)`
  --fa-primary-color: #a09aff;
  --fa-secondary-color: #ffffff;
  width: 100px;
  height: 100px;
`;

class Guest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageLoaded:  false,
            guestName:    props.name || 'Demonologist',
            guestEpisode: props.episode || 'https://www.youtube.com/@CosmicCloset',
            guestImage:   props.image || guest,
            hovered:      false,
        };
    }

    render() {
        return (
                <StyledGuest href={this.state.guestEpisode} target={'_blank'}
                             onMouseEnter={() => this.setState({hovered: true})}
                             onMouseLeave={() => this.setState({hovered: false})}>
                    <StyledWrapper $isHovered={this.state.hovered}>
                        {this.state.imageLoaded ?
                                null :
                                <span className={'fa-stack placeholder'}
                                      style={{
                                          width:  '100px',
                                          height: '100px',
                                      }}>
            <StyledPlaceholderIcon
                    icon={icon({
                        name:   'user-astronaut',
                        style:  'duotone',
                        family: 'classic',
                    })}
                    className={'fa-stack-1x'}
                    fixedWidth
                    fixedHeight
                    size={'4x'}
            />
          </span>
                        }
                        <img src={this.state.guestImage}
                             alt={this.state.guestName}
                             onLoad={() => this.setState({imageLoaded: true})}/>
                    </StyledWrapper>
                    <StyledName $isHovered={this.state.hovered}
                                className={'guest-name'}>{this.state.guestName}</StyledName>
                </StyledGuest>
        )
    }
}

export default Guest;
