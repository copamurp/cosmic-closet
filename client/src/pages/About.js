import styled from 'styled-components';
import {useEffect, useState} from "react";
import Guest from "../components/Guest";
import Loading from "../components/Loading";

const StyledAbout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  .about-intro {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h1 {
	  color: #5B5AA8;
	  font-size: 2rem;
	  font-size: clamp(2rem, 1.8rem + 0.75vw, 3rem);
	  font-weight: 600;
	}

	h2 {
	  color: #ffffff;
	  font-size: 1.5rem;
	  font-size: clamp(1.5rem, 1.35rem + 0.75vw, 2.25rem);
	}
  }

  .about-content {
	min-height: 20vh;
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
	}
  }

  .guests {
	min-height: 30vh;
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
				<Guest name={"Wings"} image={require('../assets/images/guests/jordie.webp')}/>,
				<Guest name={"Ralph Sutton"} image={require('../assets/images/guests/rsutton.webp')}/>,
				<Guest name={"Maria"} image={require('../assets/images/guests/mmaria.webp')}/>,
				<Guest name={"Molassia"} image={require('../assets/images/guests/kbaugh.webp')}/>,
				<Guest name={"Demonologist"} image={require('../assets/images/guests/demon.webp')}/>
			].sort();

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
				<h2>"The home of news that wants to, needs to, and will be discussed."</h2>
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