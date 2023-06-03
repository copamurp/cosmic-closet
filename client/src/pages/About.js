import styled from 'styled-components';
import {useEffect, useState} from "react";
import Guest from "../components/Guest";
import Loading from "../components/Loading";

const StyledAbout = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 4rem;

  .about-intro {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h1 {
	  text-align: center;
	  color: #5B5AA8;
	  font-size: 2rem;
	  font-size: clamp(2rem, 1.8rem + 0.75vw, 3rem);
	  font-weight: 600;
	  margin-bottom: 2rem;
	}
  }

  .about-content {
	min-height: 30vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	padding: 0 4rem;

	p {
	  text-align: center;
	  color: #ffffff;
	  font-size: 1.25rem;
	  font-weight: 200;

	  @media only screen and (max-width: 768px) {
		font-size: 1rem;
		line-height: 1.75rem;
		margin-bottom: 4rem;
	  }
	}
  }

  .guests {
	min-height: 50vh;
	width: 75%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-wrap: wrap;
  }
`;

const About = () => {
	const [guests, setGuests] = useState([]);
	const [guestsLoading, setGuestsLoading] = useState(false);

	useEffect(() => {
		const loadGuests = async () => {
			let guests = [
				<Guest name={"Wings of Redemption"} episode={'https://www.youtube.com/watch?v=wDex6WahAls'}
				       image={require('../assets/images/guests/jordie.webp')}/>,
				<Guest name={"Ralph Sutton"} episode={'https://www.youtube.com/watch?v=_YpAWJmO2uk'}
				       image={require('../assets/images/guests/rsutton.webp')}/>,
				<Guest name={"Medium Maria"} episode={'https://www.youtube.com/watch?v=XzF0YzAlSqQ'}
				       image={require('../assets/images/guests/mmaria.webp')}/>,
				<Guest name={"President of Molassia"}
				       episode={'https://www.youtube.com/watch?v=P3d1sFBhhvs&start=6&themeRefresh=1'}
				       image={require('../assets/images/guests/kbaugh.webp')}/>,
				<Guest name={"Demonologist LJ"} episode={'https://www.youtube.com/watch?v=p5QR9gpYALs'}
				       image={require('../assets/images/guests/demon.webp')}/>,
				<Guest name={"Rick Tumlinson"} episode={'https://www.youtube.com/watch?v=awfOXxz3TSc'}
				       image={require('../assets/images/guests/rtumlinson.webp')}/>,
				<Guest name={"Rubzy"} episode={'https://www.youtube.com/watch?v=mTt2DSsGExs'}
				       image={require('../assets/images/guests/rubzy.webp')}/>,
				<Guest name={"WouldYouBlather"} episode={'https://www.youtube.com/watch?v=Dmhj1sTla1g'}
				       image={require('../assets/images/guests/wblather.webp')}/>,
			].sort((a, b) => {
				console.log(a)
				return a.props.name > b.props.name ? 1 : a.props.name < b.props.name ? -1 : 0;
			});

			setGuests(guests);
		}

		loadGuests().then(() => {
			setGuestsLoading(false);
		})
	}, []);

	return (
		<StyledAbout>
			<div className={'about-intro'}>
				<h1>The Cosmic Closet Podcast Lore</h1>
			</div>
			<div className={'about-content'}>
				<p>
					The Cosmic Closet Podcast was founded on February 17th, 2018, among four best friends wishing
					to discuss a wide range of topics. For over a year, the podcast took place only on YouTube.
					Since then, the podcast has been routinely cohosted by Blaine and Jakob, focusing on conspiracy
					theories, urban legends, and the paranormal. A wide array of guests have been on the Cosmic
					Closet
					Podcast, such as popular streamers, musicians, podcasters, demonologists, psychic mediums, space
					funding CEOs, Anti-Vaxxers, and Flat-Earthers. In November 2018, the Cosmic Closet Podcast
					partnered with the New Worlds Conference and flew out to Austin, Texas, to cover their 2-day
					space conference where Amazon and Blue Origin CEO, Jeff Bezos, made an appearance.
				</p>

				<p>
					Starting in May 2019, the Cosmic Closet Podcast expanded to Apple Podcasts, Spotify, Stitcher,
					and Anchor. In June 2019, the Cosmic Closet Podcast website was launched to serve as the main
					hub for all of the various platforms and the Cosmic Closet Podcast community.
				</p>
			</div>
			<div className={'guests'}>
				{guestsLoading ?
					<Loading/>
					:
					<>
						{guests.map((guest) => {
							return guest;
						})}
					</>
				}
			</div>
		</StyledAbout>
	);
}

export default About;