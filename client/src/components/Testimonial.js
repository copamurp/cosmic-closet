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

	.user {
	  position: absolute;
	  top: 10px;
	  left: 10px;
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
	  }

	  .user-date {
		color: #ffffff;
		font-size: 1rem;
		font-weight: 300;
	  }
	}

	.quote-wrapper {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;
	  min-height: 200px;
	  width: 75%;
	  margin: 0 auto;
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