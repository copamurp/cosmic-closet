import styled from "styled-components";
import YouTube from "react-youtube";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
import {Timeline} from 'react-twitter-widgets'
import Carousel from "../components/Carousel";
import SocialLink from "../components/SocialLink";
import useWindowSize from "../hooks/useWindowSize";

const StyledHome = styled.div`
  .intro {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100vw;
	padding: 4rem 0;
	border-bottom: 2px solid #ffffff;
	background: radial-gradient(ellipse at center, #0b0b0b 10vw, #0e0e0e 100vw);

	.header-banner {
	  width: 100vw;
	  max-width: 800px;
	  margin: 0 auto;
	}

	h1 {
	  color: #ffffff;
	  font-size: 2rem;
	  font-size: clamp(2rem, 1.8rem + 0.75vw, 3rem);
	  font-weight: 600;
	  text-shadow: 0 0 2px #ffffff;
	  
	  @media only screen and (max-width: 768px) {
	    font-size: 1.5rem;
        font-size: clamp(1.5rem, 1.35rem + 0.75vw, 2.25rem);
	    text-align: center;
	  }
	}
  }

  .content {
	background-image: url(${require("../assets/images/home/galaxy.jpg")});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100vw;
	padding: 4rem 0;
	border-bottom: 2px solid #ffffff;

	.socials-intro {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;
	  width: 80vw;
	  margin-bottom: 4rem;

	  h2 {
	    text-align: center;
		color: #8F81C2;
		font-size: 2rem;
		font-size: clamp(2rem, 1.8rem + 0.75vw, 3rem);
		font-weight: 600;
		text-shadow: 0 0 2px #aa99e6;
	  }

	  p {
		color: #ffffff;
		font-size: 1.25rem;
		font-weight: 200;
		line-height: 1.5;
		margin: 0 2rem;
		text-shadow: 0 0 4px #000000, 2px 2px 4px #000000;
	  }
	}

	.socials-big {
	  display: flex;
	  align-items: center;
	  justify-content: space-evenly;
	  width: 75vw;
	  margin: 4rem 0;
	  
	  @media only screen and (max-width: 768px) {
	    width: 100vw;
	  }
	}

	.feed-wrapper {
	  width: 100vw;
	  max-width: 1800px;
	  min-height: 50vh;
	  display: flex;
	  align-items: stretch;
	  justify-content: space-evenly;
	  
	  @media only screen and (max-width: 1200px) {
	    flex-direction: column;
	    align-items: center;
	    justify-content: center;
	  }

	  h3 {
		color: #8F81C2;
		font-size: 1.5rem;
		font-size: clamp(1.5rem, 1.35rem + 0.75vw, 2.25rem);
		text-shadow: 0 0 2px #aa99e6;
	  }

	  .video-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
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
    	width: 100vw;
    	padding: 4rem 0;
    	border-bottom: 2px solid #ffffff;

	h2 {
	  font-size: 2rem;
	  font-size: clamp(2rem, 1.8rem + 0.75vw, 3rem);
	  font-weight: 600;
	  text-shadow: 0 0 2px white;
	  justify-self: flex-start;
	}
    
    .carousel-wrapper {
      width: 100vw;
      max-width: 1800px;
      min-height: 50vh;
      display: flex;
      align-items: stretch;
      justify-content: space-evenly;
      flex-wrap: wrap;
	}
  }
`;

const Home = () => {
	const {height, width} = useWindowSize();

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
					            link={'https://twitter.com/cosmic_closet?lang=en'} size={'4x'} color={'#FF0000'}
					/>
					<SocialLink icon={icon({name: 'twitter', style: 'brands'})}
					            link={'https://twitter.com/cosmic_closet?lang=en'} size={'4x'} color={'#1DA1F2'}
					/>
					<SocialLink icon={icon({name: 'instagram', style: 'brands'})}
					            link={'https://twitter.com/cosmic_closet?lang=en'} size={'4x'} color={'white'}
					/>
					<SocialLink icon={icon({name: 'podcast', style: 'regular', family: 'sharp'})}
					            link={'https://twitter.com/cosmic_closet?lang=en'} size={'4x'} color={'#833AB4'}
					/>
				</div>

				<div className={'feed-wrapper'}>
					<div className={'video-wrapper'}>
						<h3>Latest Episode</h3>
						{width < 768 ?
							<YouTube
								videoId="24eohEB4Saw"
								opts={{
									width: '400px',
									height: '350px'
								}}
								style={{
									width: '400px'
								}}
							/>
							:
							<YouTube
								videoId="24eohEB4Saw"
								opts={{
									width: '600px',
									height: '400px'
								}}
								style={{
									width: '600px'
								}}
							/>
						}
					</div>

					<div className={'twitter-wrapper'}>
						<h3>Follow Our Twitter</h3>
						{width < 768 ?
							<Timeline
								dataSource={{
									sourceType: 'profile',
									screenName: 'Cosmic_Closet'
								}}
								options={{
									height: '350px',
									width: '400px',
									theme: 'dark'
								}}
							/>
							:
							<Timeline
								dataSource={{
									sourceType: 'profile',
									screenName: 'Cosmic_Closet'
								}} options={{
								height: '400px',
								width: '600px',
								theme: 'dark'
							}}/>
						}
					</div>
				</div>
			</div>

			<div className={'testimonials'}>
				<h2>Testimonials</h2>
				<div className={'testimonials-wrapper'}>
					<Carousel />
				</div>
			</div>
		</StyledHome>
	)
}

export default Home;