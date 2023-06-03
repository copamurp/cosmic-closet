import React from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";

const StyledTestimonial = styled.div`
  position: relative;
  width: 100%;
  max-width: 850px;
  height: 100%;
  max-height: 600px;

  @media only screen and (max-width: 768px) {
    max-height: 400px;
    max-width: 500px;
  }

  .testimonial {
    border-radius: 0.5rem;
    transition: transform 0.5s ease-in-out;
    overflow: hidden;
    padding: 2rem;
    background: linear-gradient(45deg, rgba(79, 77, 223, 0.5), rgba(114, 112, 234, 0.5));
    box-shadow: 0 0 2px #B084F6;

    > div:not(:last-child) {
      margin-bottom: 1.5rem;
    }

    @media only screen and (max-width: 768px) {
      padding: 0.5rem;
    }

    .user {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      .user-image {
        margin-right: 0.5rem;
      }

      .user-name {
        color: #FEFEFE;
        font-size: 1.25rem;
        font-weight: 500;

        @media only screen and (max-width: 768px) {
          font-size: 1.10rem;
        }
      }

      .user-date {
        color: #FEFEFE;
        font-size: 1rem;
        font-weight: 300;

        @media only screen and (max-width: 768px) {
          font-size: 0.8rem;
        }
      }
    }

    .quote-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 250px;
      width: 90%;
      margin: 0.5rem auto;
      border: 2px solid #4f4ddf;
      box-shadow: 0 0 3px #B084F6;
      background-color: rgba(53, 53, 74, 0.5);
      border-radius: 0.5rem;

      @media only screen and (max-width: 768px) {
        min-height: 0;
      }

      .user-quote {
        padding: 1rem;
      }
    }

    .actions {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      button {
        background: rgba(53, 53, 74, 0.5);
        border: 1px solid #4f4ddf;
        border-radius: 0.25rem;
        color: #FEFEFE;
        padding: 0.5rem;
        box-shadow: 0 0 1px #FEFEFE;

        @media only screen and (max-width: 768px) {
          padding: 0.25rem;
        }
      }
    }
  }
`;

class Testimonial extends React.Component {
  constructor(props) {
    super(props);
    this.randomIcon = randomIcons[Math.floor(Math.random() * randomIcons.length)];
    this.state = {
      name: props.name || 'Alexey Leonov',
      quote: props.quote || 'Very cool podcast.',
      rating: props.rating || 5,
      date: props.date || "07/18/2023",
      avatar: <FontAwesomeIcon
        icon={this.randomIcon}
        size={'3x'}
        color={'#FEFEFE'}
        fixedHeight
        border
        style={{backgroundColor: 'rgba(53, 53, 74, 0.5)', borderColor: '#4f4ddf', boxShadow: '0 0 1px #FEFEFE'}}
      />
    }
  }

  render() {
    return (
      <StyledTestimonial>
        <div className={'testimonial'}>
          <div className={'user'}>
            <span className={'user-image'}>{this.state.avatar}</span>
            <div>
              <h3 className={'user-name'}>{this.state.name}</h3>
              <p className={'user-rating'}>{formatRating(this.state.rating)}</p>
              <p
                className={'user-date'}>{new Date(this.state.date).getMonth() + 1}/{new Date(this.state.date).getDate()}/{new Date(this.state.date).getFullYear()}</p>
            </div>
          </div>
          <div className={'quote-wrapper'}>
            <p className={'user-quote'}>{this.state.quote}</p>
          </div>
          <div className={'actions'}>
            <button id={'reply'}>Reply</button>
          </div>
        </div>
      </StyledTestimonial>
    )
  }
}

function formatRating(rating) {
  return (
    <div style={{display: 'flex'}}>
      {
        Array.from({length: rating}, (value, index) => {
          return (
            <FontAwesomeIcon icon={icon({name: 'star', style: 'solid', family: 'sharp'})}
                             style={{color: 'gold'}}/>
          )
        })
      }
    </div>
  )
}

const randomIcons = [
  icon({name: 'user-astronaut', style: 'regular', family: 'classic'}),
  icon({name: 'user-astronaut', style: 'solid', family: 'classic'}),
  icon({name: 'user-astronaut', style: 'light', family: 'classic'}),
  icon({name: 'user-astronaut', style: 'solid', family: 'sharp'}),
  icon({name: 'user-astronaut', style: 'regular', family: 'sharp'}),
  icon({name: 'user-astronaut', style: 'light', family: 'sharp'}),
  icon({name: 'robot-astromech', style: 'regular', family: 'classic'}),
  icon({name: 'robot-astromech', style: 'solid', family: 'classic'}),
  icon({name: 'robot-astromech', style: 'light', family: 'classic'}),
  icon({name: 'robot-astromech', style: 'solid', family: 'sharp'}),
  icon({name: 'robot-astromech', style: 'regular', family: 'sharp'}),
  icon({name: 'robot-astromech', style: 'light', family: 'sharp'}),
];

export default Testimonial;