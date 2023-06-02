import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const StyledSocial = styled(FontAwesomeIcon)`
  transition: transform 0.2s ease-in-out;
  transform: scale(1);

  :hover {
	transform: scale(1.2);
  }
`;

const SocialLink = ({link, icon, color, size}) => {
	return (
		<a href={link} target="_blank" rel="noreferrer">
			<StyledSocial icon={icon} style={{color: color}} size={size} />
		</a>
	)
}

export default SocialLink;