import styled from 'styled-components';
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const StyledLoading = styled.div`
	width: ${props => props.$controlWidth ? props.$controlWidth : '100%'};
`;

const Loading = () => {
	return (
		<StyledLoading $controlWidth>
			<FontAwesomeIcon icon={icon({name: 'spinner', style: 'regular', family: 'sharp'})} spin />;
		</StyledLoading>
	)
}

export default Loading;