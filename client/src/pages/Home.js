import styled from "styled-components";
import YouTube from "react-youtube";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
import {Timeline} from 'react-twitter-widgets'
import Carousel from "../components/Carousel";
import SocialLink from "../components/SocialLink";
import useWindowSize from "../hooks/useWindowSize";
import {useEffect, useState} from "react";
import Testimonial from "../components/Testimonial";

const StyledHome = styled.div`
  .intro {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding: 2rem 0;
	border-bottom: 2px solid #ffffff;
	background: radial-gradient(ellipse at center, #0b0b0b 10vw, #0e0e0e 100vw);

	.header-banner {
	  width: 100%;
	  max-width: 600px;
	  margin: 0 auto;
	}

	h1 {
	  color: #ffffff;
	  font-size: 2rem;
	  font-size: clamp(2rem, 1.8rem + 0.75vw, 3rem);
	  font-weight: 600;

	  @media only screen and (max-width: 768px) {
		text-align: center;
	  }
	}
  }

  .content {
	min-height: 90vh;
	background-image: url(${require("../assets/images/home/galaxy.jpg")});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	width: 100%;
	padding: 2rem 0;
	border-bottom: 2px solid #ffffff;

	.socials-intro {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;
	  width: 80%;
	  margin-bottom: 4rem;

	  h2 {
		text-align: center;
		color: #8F81C2;
		font-size: 2rem;
		font-size: clamp(2rem, 1.8rem + 0.75vw, 3rem);
		font-weight: 600;
		margin-bottom: 2rem;
	  }

	  p {
		color: #ffffff;
		font-size: 1.25rem;
		font-weight: 200;
		line-height: 1.5;
		margin: 0 1rem;
	  }
	}

	.socials-big {
	  display: flex;
	  align-items: center;
	  justify-content: space-evenly;
	  width: 75%;
	  margin: 2rem 0;

	  @media only screen and (max-width: 768px) {
		width: 100%;
	    margin-bottom: 6rem;
	  }
	}

	.feed-wrapper {
	  width: 100%;
	  max-width: 1800px;
	  display: flex;
	  align-items: stretch;
	  justify-content: space-evenly;

	  @media only screen and (max-width: 1100px) {
		flex-direction: column;
		align-items: center;
		justify-content: center;
	  }

	  h3 {
		color: #8F81C2;
		font-size: 1.5rem;
		font-size: clamp(1.5rem, 1.35rem + 0.75vw, 2.25rem);
	    
	    		@media only screen and (max-width: 1100px) {
			      		  margin-bottom: 1.5rem;
				}
	  }

	  .video-wrapper {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;

		@media only screen and (max-width: 1100px) {
		  margin-bottom: 2rem;
		}
	  }

	  .twitter-wrapper {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
	  }
	}
  }

  .testimonials {
	position: relative;
	background: #8F81C2;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	width: 100%;
	height: 50vh;
	padding: 4rem 0;
	border-bottom: 2px solid #ffffff;

	h2 {
	  font-size: 2rem;
	  font-size: clamp(2rem, 1.8rem + 0.75vw, 3rem);
	  font-weight: 600;
	  justify-self: flex-start;
	}

	.carousel-wrapper {
	  width: 100vw;
	  max-width: 1800px;
	  min-height: 50vh;
	}
  }
`;

const Home = () => {
	const {height, width} = useWindowSize();
	const [feedWidth, setFeedWidth] = useState(0);
	const [tweetsLoading, setTweetsLoading] = useState(true);

	useEffect(() => {
		function handleResize() {
			if (width < 500) {
				return 350;
			} else if (width < 768) {
				return 400;
			} else if (width < 1200) {
				return 500;
			} else {
				return 600;
			}
		}

		setFeedWidth(handleResize());
	}, [width]);

	let testimonials = [
		<Testimonial/>
	];

	return (
		<StyledHome>
			<div className={'intro'}>
				<img className={'header-banner'} src={require("../assets/images/nav-header-logo.webp")}
				     alt="Cosmic Closet Podcast Banner"/>
				<h1>Welcome to the Cosmic Closet Podcast</h1>
			</div>

			<div className={'content'}>
				<div className={'socials-intro'}>
					<h2>Find us on your favorite podcast platform</h2>
					<p>
						From the paranormal to conspiracy theories, we have new episodes every week! Our goal is to
						open the door of the cosmos and explore the many aspects of our universe, both seen and
						unseen.
						We have interviewed Anti-Vaxxers, demonologists, space funding CEOs, Flat Earth believers,
						and
						heads of micronations. Below are the platforms we are currently on, subscribe and follow us!
					</p>
				</div>

				<div className={'socials-big'}>
					<SocialLink icon={icon({name: 'youtube', style: 'brands'})}
					            link={'https://www.youtube.com/@CosmicCloset'} size={'4x'} color={'#FF0000'}
					/>
					<SocialLink icon={icon({name: 'twitter', style: 'brands'})}
					            link={'https://twitter.com/cosmic_closet?lang=en'} size={'4x'} color={'#1DA1F2'}
					/>
					<SocialLink icon={icon({name: 'instagram', style: 'brands'})}
					            link={'https://www.instagram.com/cosmicclosetpodcast/?hl=en'} size={'4x'} color={'white'}
					/>
					<SocialLink icon={icon({name: 'podcast', style: 'regular', family: 'sharp'})}
					            link={'https://podcasts.apple.com/us/podcast/cosmic-closet-podcast/id1465437814?ign-mpt=uo%3D4'} size={'4x'} color={'#833AB4'}
					/>
				</div>

				<div className={'feed-wrapper'}>
					<div className={'video-wrapper'}>
						<h3>Latest Episode</h3>
						<YouTube
							videoId="24eohEB4Saw"
							opts={{
								height: '400px',
								width: '100%',
							}}
							style={{
								width: feedWidth
							}}
						/>
					</div>

					<div className={'twitter-wrapper'}>
						<h3>Follow Our Twitter</h3>
						<Timeline
							renderError={_err => {
								return <div style={{color: 'white'}}>Failed to fetch tweets.</div>;
							}}
							dataSource={{
								sourceType: 'profile',
								screenName: 'Cosmic_Closet'
							}}
							options={{
								height: '400px',
								width: feedWidth,
								theme: 'dark'
							}}
							onLoad={() => setTweetsLoading(false)}
						/>
					</div>
				</div>
			</div>

			<div className={'testimonials'}>
				<h2>Testimonials</h2>
				<div className={'testimonials-wrapper'}>
					<Carousel children={testimonials}/>
				</div>
			</div>
		</StyledHome>
	)
}

export default Home;