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
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const StyledHome = styled.div`
  .intro {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding: 4rem 0;
	border-bottom: 2px solid #ffffff;
	background: radial-gradient(ellipse at center, #0b0b0b 10vw, #0e0e0e 100vw);

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
	background-image: url(${require("../assets/images/home/orbit.jpg")});
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
		color: #5B5AA8;
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
		box-shadow: 0 0 4px 1px #ffffff;
		padding: 1rem;
	  }

	  .media-label {
		width: 100%;
		text-align: center;
		border-radius: 0.5rem;
		color: #ffffff;
		font-size: 1.5rem;
		font-size: clamp(1.5rem, 1.35rem + 0.75vw, 2.25rem);
		margin-bottom: 1rem;
		padding: 1rem;
		background-color: rgba(0, 0, 0, 0);
		box-shadow: 0 0 2px 1px #ffffff;
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
	background: radial-gradient(circle at bottom, #5B5AA8 0, #6f6ecc 100%);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	width: 100%;
	padding: 4rem 0;
	border-bottom: 2px solid #ffffff;

	h2 {
	  font-size: 2rem;
	  font-size: clamp(2rem, 1.8rem + 0.75vw, 3rem);
	  font-weight: 600;
	  justify-self: flex-start;
	}
  }
`;

const STATUS = {
	DEFAULT: 0,
	GOOD: 1,
	BAD: -1
};

const Home = () => {
	const {height, width} = useWindowSize();
	const [feedWidth, setFeedWidth] = useState(0);
	const [feedHeight] = useState('400px');
	const [tweetsLoading, setTweetsLoading] = useState(true);
	const [tweetTimeline, setTweetTimeline] = useState(null);
	const [testimonials, setTestimonials] = useState([]);
	const [testimonialsLoading, setTestimonailsLoading] = useState(false);
	const [testimonialsStatus, setTestimonialsStatus] = useState(STATUS.DEFAULT);

	useEffect(() => {
		const loadTestimonials = async () => {
			const controller = new AbortController();
			fetch("/api/testimonials", {signal: controller.signal,})
				.then(res => res.json())
				.then(data => {
					setTestimonials(
						data.map(testimonial => {
							return <Testimonial
								_name={testimonial.name}
								_quote={testimonial.quote}
								_rating={testimonial.rating}
								_date={testimonial.date}
							/>
						})
					)
				})
				.then(() => {
					setTestimonialsStatus(STATUS.GOOD);
				})
				.catch((err) => {
					console.log(err);
					setTestimonialsStatus(STATUS.BAD);
				})
		}

		loadTestimonials();
	}, []);

	useEffect(() => {
		setTestimonailsLoading(false);
	}, [testimonialsStatus]);

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
						return (
							<div
								style={{
									color: 'white', display: 'flex',
									flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly',
									textAlign: 'center', width: feedWidth, height: feedHeight, fontSize: '2rem'
								}}
							>
								<FontAwesomeIcon icon={icon({name: 'robot', style: 'light', family: 'classic'})}
								                 size={'2x'}
								                 style={{marginBottom: '2rem'}}
								/>
								get tweets failed
							</div>
						)
					}}
					dataSource={{
						sourceType: 'profile',
						screenName: 'Cosmic_Closet'
					}}
					options={{
						height: feedHeight,
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

	return (
		<StyledHome>
			<div className={'intro'}>
				<ExternalMediaWrapper label={'Latest Episode'} isBanner={true}>
					<YouTube
						videoId="24eohEB4Saw"
						opts={{
							height: feedHeight,
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
					<ExternalMediaWrapper label={'Follow Our Twitter'} isBanner={true}>
						{tweetsLoading ?
							<Loading style={{width: feedWidth, height: feedHeight}}/>
							:
							<>
								{tweetTimeline}
							</>
						}
					</ExternalMediaWrapper>
				</div>
			</div>

			<div className={'testimonials'}>
				<h2>Testimonials</h2>
				<div className={'testimonials-wrapper'}>
					{testimonialsLoading ?
						<Loading/>
						:
						<div style={{width: '100%', height: '100%'}}>
							{testimonialsStatus === STATUS.GOOD ?
								<Carousel children={testimonials}/>
								:
								<div style={{
									color: 'white',
									textAlign: 'center',
									fontSize: '2rem',
									padding: '4rem',
									width: '100vw',
									minWidth: '350px',
									maxWidth: '750px',
									height: '40vh',
									minHeight: '350px',
									maxHeight: '750px',
								}}>
									<FontAwesomeIcon icon={icon({name: 'robot', style: 'light', family: 'classic'})}
									                 size={'2x'}
									                 style={{marginBottom: '2rem'}}
									/>
									<div style={{
										backgroundColor: 'rgba(7,7,7,0.5)',
										flex: '1',
										width: '100%',
										height: '100%',
										padding: '1rem',
										borderRadius: '0.25rem',
										boxShadow: '0 0 3px 1px rgba(7,7,7,0.8)'
									}}>
										<p style={{fontSize: '1rem'}}>error</p>
										<p style={{
											fontSize: '1rem',
											height: '90%',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											backgroundColor: 'rgba(0,0,0,0.4)',
											borderRadius: '0.25rem',
											boxShadow: '0 0 1px 1px rgba(7,7,7,0.8)'
										}}>get testimonials failed</p>
									</div>
								</div>
							}
						</div>
					}
				</div>
			</div>
		</StyledHome>
	)
}

export default Home;