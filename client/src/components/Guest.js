import styled from 'styled-components';
import {useEffect, useState} from "react";

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
	margin: 0.5rem;
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
`;

const StyledName = styled.p`
  font-size: ${props => props.$isHovered ? '1.65rem' : '1.5rem'};
  font-weight: 200;
  transition: color 0.5s ease-in-out, font-size 0.5s ease-in-out;
  color: ${props => props.$isHovered ? '#7270ea' : '#5B5AA8'};
`;

const Guest = ({name, episode, image}) => {
	const [guestName] = useState(name || "Demonologist");
	const [guestEpisode] = useState(episode || "https://www.youtube.com/@CosmicCloset");
	const [guestImage] = useState(image || require('../assets/images/guests/rsutton.webp'));
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
		<StyledGuest href={guestEpisode} target={"_blank"} onMouseEnter={() => setHovered(true)}
		             onMouseLeave={() => setHovered(false)}>
			<StyledWrapper $isHovered={hovered} $isWings={wings}>
				<img src={guestImage} alt={guestName}/>
			</StyledWrapper>
			<StyledName $isHovered={hovered} className={'guest-name'}>{guestName}</StyledName>
		</StyledGuest>
	)
}

export default Guest;