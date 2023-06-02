import styled from "styled-components";
import YouTube from "react-youtube";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
import {Timeline} from 'react-twitter-widgets'
import Carousel from "../components/Carousel";
import SocialLink from "../components/SocialLink";
import useWindowSize from "../hooks/useWindowSize";
import {useEffect, useState} from "react";
import Testimonial from "../components/Testimonial";
import Loading from "../components/Loading";
import ExternalMediaWrapper from "../components/ExternalMediaWrapper";

const StyledHome = styled.div`
  .intro {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding: 4rem 0;
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
		margin-bottom: 1rem;
	  }

	  p {
		color: #ffffff;
		font-size: 1.25rem;
		font-weight: 200;
		line-height: 1.5;
		text-align: center;
	  }
	}

	.socials-big {
	  display: flex;
	  align-items: center;
	  justify-content: space-evenly;
	  width: 75%;
	  margin-bottom: 2rem;

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

	  .media {
		border-radius: 1rem;
		background-color: rgba(67, 67, 67, 0.4);
		box-shadow: 0 0 4px 1px #8f81c2;
		padding: 1rem;
	  }

	  .media-label {
		width: 100%;
		text-align: center;
		border-radius: 0.5rem;
		color: #8F81C2;
		font-size: 1.5rem;
		font-size: clamp(1.5rem, 1.35rem + 0.75vw, 2.25rem);
		margin-bottom: 1rem;
		padding: 1rem;
		background-color: rgba(5, 5, 5, 0.5);
		box-shadow: 0 0 2px 1px #8f81c2;
	  }

	  .video-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;

		@media only screen and (max-width: 1100px) {
		  margin-bottom: 2rem;
		}
	  }

	  .twitter-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
	  }
	}
  }

  .testimonials {
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
	const [tweetTimeline, setTweetTimeline] = useState(null);

	useEffect(() => {
		const handleResize = async () => {
			if (width < 500) {
				setFeedWidth(350);
			} else if (width < 768) {
				setFeedWidth(400);
			} else if (width < 1200) {
				setFeedWidth(650);
			} else {
				setFeedWidth(750);
			}
		}

		handleResize();
	}, [width]);
	
	useEffect(() => {
		const loadTimeline = async () => {
			setTweetTimeline(
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
				/>
			);
		}

		loadTimeline().then(() => {
			setTweetsLoading(false);
		});
	}, [feedWidth]);

	let testimonials = [
		<Testimonial/>
	];

	return (
		<StyledHome>
			<div className={'intro'}>
				<ExternalMediaWrapper label={'Latest Episode'} isBanner={true}>
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
				</ExternalMediaWrapper>
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
					<div className={'media twitter-wrapper'}>
						{tweetsLoading ?
							<Loading style={{width: feedWidth}} />
							:
							<>
								<h3 className={'media-label'}>Follow Our Twitter</h3>
								{tweetTimeline}
							</>
						}
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