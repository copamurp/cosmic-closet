import React from 'react';
import styled from 'styled-components';
import Guest from "../components/Guest";
import Loading from "../components/Loading";

const StyledAbout = styled.div`
  min-height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 4rem;
  background: radial-gradient(circle at top right, #1a1a1a 5%, #101010 75%);
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.5) inset;

  .about-intro {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      background-image: linear-gradient(to right, #5B5AA8 0%, #4f4ddf 100%);
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
    width: 100%;
    max-width: 1800px;

    p {
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
    max-width: 1600px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`;

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guests:        [],
            guestsLoading: false,
        }
    }

    componentDidMount() {
        this.setState({guestsLoading: true});
        const loadGuests = async () => {
            let guests = [
                <Guest name={"Wings of Redemption"}
                       episode={'https://www.youtube.com/watch?v=wDex6WahAls'}
                       image={require('../assets/images/guests/jordie.webp')}/>,
                <Guest name={"Ralph Sutton"}
                       episode={'https://www.youtube.com/watch?v=_YpAWJmO2uk'}
                       image={require('../assets/images/guests/rsutton.webp')}/>,
                <Guest name={"Medium Maria"}
                       episode={'https://www.youtube.com/watch?v=XzF0YzAlSqQ'}
                       image={require('../assets/images/guests/mmaria.webp')}/>,
                <Guest name={"President of Molassia"}
                       episode={'https://www.youtube.com/watch?v=P3d1sFBhhvs&start=6&themeRefresh=1'}
                       image={require('../assets/images/guests/kbaugh.webp')}/>,
                <Guest name={"Demonologist LJ"}
                       episode={'https://www.youtube.com/watch?v=p5QR9gpYALs'}
                       image={require('../assets/images/guests/demon.webp')}/>,
                <Guest name={"Rick Tumlinson"}
                       episode={'https://www.youtube.com/watch?v=awfOXxz3TSc'}
                       image={require('../assets/images/guests/rtumlinson.webp')}/>,
                <Guest name={"Rubzy"}
                       episode={'https://www.youtube.com/watch?v=mTt2DSsGExs'}
                       image={require('../assets/images/guests/rubzy.webp')}/>,
                <Guest name={"WouldYouBlather"}
                       episode={'https://www.youtube.com/watch?v=UWnYBZ4gJwQ'}
                       image={require('../assets/images/guests/wblather.webp')}/>,
            ].sort(() => Math.random() - 0.5);

            this.setState({
                guests:        guests,
                guestsLoading: false,
            });
        }

        loadGuests();
    }

    render() {
        return (
                <StyledAbout>
                    <div className={'about-intro'}>
                        <h1>The Cosmic Closet Podcast Lore</h1>
                    </div>
                    <div className={'about-content'}>
                        <p>
                            The Cosmic Closet Podcast was founded on February
                            17th, 2018, among four best friends wishing
                            to discuss a wide range of topics. For over a year,
                            the podcast took place only on YouTube.
                            Since then, the podcast has been routinely cohosted
                            by Blaine and Jakob, focusing on conspiracy
                            theories, urban legends, and the paranormal. A wide
                            array of guests have been on the Cosmic
                            Closet
                            Podcast, such as popular streamers, musicians,
                            podcasters, demonologists, psychic mediums, space
                            funding CEOs, Anti-Vaxxers, and Flat-Earthers. In
                            November 2018, the Cosmic Closet Podcast
                            partnered with the New Worlds Conference and flew
                            out to Austin, Texas, to cover their 2-day
                            space conference where Amazon and Blue Origin CEO,
                            Jeff Bezos, made an appearance.
                        </p>

                        <p>
                            Starting in May 2019, the Cosmic Closet Podcast
                            expanded to Apple Podcasts, Spotify, Stitcher,
                            and Anchor. In June 2019, the Cosmic Closet Podcast
                            website was launched to serve as the main
                            hub for all of the various platforms and the Cosmic
                            Closet Podcast community.
                        </p>
                    </div>
                    <div className={'guests'}>
                        {this.state.guestsLoading ?
                                <Loading/>
                                :
                                <>
                                    {this.state.guests.map((guest) => {
                                        return guest;
                                    })}
                                </>
                        }
                    </div>
                </StyledAbout>
        )
    }
}

export default About;