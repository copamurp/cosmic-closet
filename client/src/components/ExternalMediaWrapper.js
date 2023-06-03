import styled from 'styled-components';

const StyledMediaWrapper = styled.div`
  border-radius: 1rem;
  background: radial-gradient(ellipse at top left, rgba(255, 255, 255, 0.2) 0, rgba(255, 255, 255, 0.02) 100%);
  box-shadow: 0 0 3px ${props => props.$isBanner ? '#ffffff' : 'red'};
  padding: 1rem;

  .media-label {
	width: 100%;
	text-align: center;
	border-radius: 0.5rem;
	color: ${props => props.$isBanner ? 'white' : '#8F81C2'};
	font-size: 1.5rem;
	font-size: clamp(1.5rem, 1.35rem + 0.75vw, 2.25rem);
	margin-bottom: 1rem;
	padding: 1rem;
	background-color: rgba(5, 5, 5, 0.5);
	box-shadow: 0 0 2px 1px ${props => props.$isBanner ? 'white' : 'red'};
  }
`;

const ExternalMediaWrapper = ({label, children, isBanner = false}) => {
	return (
		<StyledMediaWrapper $isBanner={isBanner}>
			<h3 className={'media-label'}>{label}</h3>
			{children}
		</StyledMediaWrapper>
	)
}

export default ExternalMediaWrapper;