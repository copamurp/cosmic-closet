import styled from "styled-components";

const StyledCarousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  .carousel {
	position: relative;
	width: 100vw;
	max-width: 800px;
	height: 25vh;
	overflow: hidden;
	padding: 0;
	margin: 0;
	box-sizing: border-box;

	.carousel-inner {
	  position: relative;
	  overflow: hidden;
	  width: 100%;
	  height: 100%;
	  padding: 2rem;
	}
  }
`;

const Carousel = ({children}) => {
	return (
		<StyledCarousel>
			<div className={'carousel'}>
				<div className={'carousel-inner'}>
					{children}
				</div>
			</div>
		</StyledCarousel>

	)
}

export default Carousel;