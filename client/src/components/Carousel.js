import styled from "styled-components";

const StyledCarousel = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .carousel {
	width: 100vw;
	max-width: 800px;
	overflow: hidden;
	padding: 0;
	margin: 2rem;
	box-sizing: border-box;

	.carousel-inner {
	  overflow: hidden;
	  width: 100%;
	  height: 100%;
	  padding: 1rem;
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