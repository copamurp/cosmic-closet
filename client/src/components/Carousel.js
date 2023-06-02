import styled from "styled-components";

const StyledCarousel = styled.div`
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
	  padding: 0;

	  .carousel-item {
		position: relative;
		width: 100%;
		height: 100%;
		transition: transform 0.5s ease-in-out;
		overflow: hidden;

		.carousel-caption {
		  position: absolute;
		  top: 0;
		  right: 0;
		  bottom: 0;
		  left: 0;
		  z-index: 10;

		  display: flex;
		  flex-direction: column;
		  justify-content: center;

		  color: #ffffff;
		  text-align: center;
		  text-shadow: 0 0 2px #000000;
		  background-color: rgba(0, 0, 0, 0.5);
		  padding: 2rem;
		  margin: 0;
		  box-sizing: border-box;
		}
	  }
	}
  }
`;

const Carousel = () => {
	return (
		<StyledCarousel>
			<div className={'carousel'}>
				<div className={'carousel-inner'}>
					<div className={'carousel-item active'}>
						<div className={'carousel-caption'}>
							<p>Lorum ipsum dolor sit amet, consectetur adipiscing elit.
								Aliquam euismod, nunc nec aliquam ultricies, nunc elit
								ultricies nunc, nec aliquam nunc elit nec nunc.
								Aliquam euismod, nunc nec aliquam ultricies, nunc elit
								ultricies nunc, nec aliquam nunc elit nec nunc.
							</p>
						</div>
					</div>
				</div>
			</div>
		</StyledCarousel>

	)
}

export default Carousel;