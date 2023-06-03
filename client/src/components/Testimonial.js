import styled from "styled-components";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";

const StyledTestimonial = styled.div`
  position: relative;

  .testimonial {
	border: 1px solid white;
	border-radius: 0.5rem;
	transition: transform 0.5s ease-in-out;
	overflow: hidden;
	padding: 2rem;
	background-color: rgba(255, 255, 255, 0.25);

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
		color: #ffffff;
		font-size: 1.25rem;
		font-weight: 500;

		@media only screen and (max-width: 768px) {
		  font-size: 1.10rem;
		}
	  }

	  .user-date {
		color: #ffffff;
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
	  background-color: rgba(255, 255, 255, 0.2);
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
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid #ffffff;
		border-radius: 0.25rem;
		color: #ffffff;
		padding: 0.5rem;
		box-shadow: 0 0 1px #ffffff;

		@media only screen and (max-width: 768px) {
		  padding: 0.25rem;
		}
	  }
	}
  }
`;

const Testimonial = ({_name, _quote, _rating, _date}) => {
	const [name] = useState(_name || 'Alexey Leonov');
	const [quote] = useState(_quote || 'Very cool podcast.');
	const [rating] = useState(_rating || 5);
	const [date] = useState(_date || "07/18/2023");
	const [avatar] = useState(<FontAwesomeIcon
		icon={icon({name: 'user-astronaut', style: 'regular', family: 'sharp'})}
		size={'3x'}
		color={'#8F81C2'}
		fixedHeight
		border
		style={{backgroundColor: '#ffffff'}}
	/>);

	return (
		<StyledTestimonial>
			<div className={'testimonial'}>
				<div className={'user'}>
					<span className={'user-image'}>{avatar}</span>
					<div>
						<h3 className={'user-name'}>{name}</h3>
						<p className={'user-rating'}>{formatRating(rating)}</p>
						<p className={'user-date'}>{new Date(date).getMonth() + 1}/{new Date(date).getDate()}/{new Date(date).getFullYear()}</p>
					</div>
				</div>
				<div className={'quote-wrapper'}>
					<p className={'user-quote'}>{quote}</p>
				</div>
				<div className={'actions'}>
					<button id={'reply'}>Reply</button>
				</div>
			</div>
		</StyledTestimonial>
	)
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

export default Testimonial;