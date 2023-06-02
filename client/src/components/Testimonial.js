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
      top: 5px;
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
      
      .user-title {
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
      min-height: 100px;
	}
  }
`;

const Testimonial = ({user, quote}) => {
	const [testimonialUser] = useState(user ||
		{
			image: <FontAwesomeIcon
				icon={icon({name: 'user-astronaut', style: 'regular', family: 'sharp'})}
				size={'2x'}
				color={'#8F81C2'}
				fixedWidth
				fixedHeight
				border
				style={{backgroundColor: '#ffffff'}}
			/>,
			name: 'Alexey Leonov',
			title: 'Cosmonaut'
		});
	const [testimonialQuote] = useState(quote || 'Very cool podcast.');

	return (
		<StyledTestimonial>
			<div className={'testimonial'}>
				<div className={'user'}>
					<span className={'user-image'}>{testimonialUser.image}</span>
					<div>
						<h3 className={'user-name'}>{testimonialUser.name}</h3>
						<p className={'user-title'}>{testimonialUser.title}</p>
					</div>
				</div>
				<div className={'quote-wrapper'}>
					<p className={'user-quote'}>{testimonialQuote}</p>
				</div>
			</div>
		</StyledTestimonial>
	)
}

export default Testimonial;