import styled from 'styled-components';
import {useEffect, useState} from "react";

const StyledGuest = styled.div`
  flex-basis: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: scale(1);
  transition: transform 0.5s ease-in-out;

  :hover {
	transform: scale(1.2);
  }

  .image-wrapper {
	width: 100px;
	height: 100px;
	position: relative;
	overflow: hidden;
	border-radius: 50%;

	img {
	  height: 100%;
	  width: auto;
	}
  }
`;

const StyledName = styled.p`
  font-size: ${props => props.$isHovered ? '1.65rem' : '1.5rem'};
  font-weight: 200;
  transition: color 0.5s ease-in-out, font-size 0.5s ease-in-out;
  color: ${props => props.$isHovered ? '#7270ea' : '#5B5AA8'};
`;

const Guest = ({image, name}) => {
	const [guestImage] = useState(image || require('../assets/images/guests/rsutton.webp'));
	const [guestName] = useState(name || "Demonologist");
	const [hovered, setHovered] = useState(false);
	const [wings, setWings] = useState(false);

	useEffect(() => {
		const checkWings = () => {
			if (name === "Wings") {
				setWings(true);
			}
		}

		checkWings();
	}, [name]);

	return (
		<StyledGuest onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
			<div className={'image-wrapper'}>
				<img src={guestImage} alt={guestName}/>
			</div>
			<StyledName $isHovered={hovered} className={'guest-name'}>{guestName}</StyledName>
		</StyledGuest>
	)
}

export default Guest;