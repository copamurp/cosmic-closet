import React from "react";
import styled from "styled-components";
import YouTube from "react-youtube";
import {Timeline} from 'react-twitter-widgets'
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
import Carousel from "../components/Carousel";
import SocialLink from "../components/SocialLink";
import Testimonial from "../components/Testimonial";
import Loading from "../components/Loading";
import ExternalMediaWrapper from "../components/ExternalMediaWrapper";
import getRandomError from "../helper/getRandomError";
import ErrorDisplay from "../components/ErrorDisplay";
import NETWORK_STATUS from "../config.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const StyledHome = styled.div`
  width: 100%;
  background-image: url(${require("../assets/images/home/orbit.webp")});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;

  .feed-wrapper {
    padding: 2rem;
  }

  .intro {
    min-height: 50vh;
    width: 100%;
    background-color: #0e0e0e;

    > div {
      background-color: transparent;
      width: 100%;
      max-width: 1800px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 4rem auto;

      h1 {
        text-align: center;
        color: #ffffff;
        font-size: 2rem;
        font-size: clamp(2rem, 1.8rem + 0.75vw, 3rem);
        font-weight: 600;
      }
    }
  }

  .content {
    min-height: 90vh;
    width: 100%;
    background-color: transparent;

    > div {
      width: 100%;
      margin: 0 auto;
      max-width: 1800px;
      padding: 2rem 0;

      .socials-intro {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 80%;
        margin: 0 auto;
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
    }

    .socials-big {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 75%;
      margin: 4rem auto;

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
    min-height: 60vh;
    background: radial-gradient(ellipse at bottom, #5B5AA8 25%, #4f4ddf 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    padding: 4rem 0;

    h2 {
      font-size: 2rem;
      font-size: clamp(2rem, 1.8rem + 0.75vw, 3rem);
      font-weight: 600;
      justify-self: flex-start;
    }

    .testimonials-wrapper {
      position: relative;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      @media only screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .carousel-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;

        @media only screen and (max-width: 768px) {
          width: 100%;
          height: 550px;
          align-items: flex-start;
          justify-content: center;
        }
      }

      > button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        color: #5B5AA8;
        background-color: #ffffff;
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        &:hover {
          transform: translateY(-50%) scale(1.1);
          color: #ffffff;
          background-color: #5B5AA8;
          box-shadow: 0 0 4px 1px #ffffff;
        }

        @media only screen and (max-width: 768px) {
          top: 80%;
          transform: translateY(80%);
        }
      }

      .carousel-button-prev {
        left: 1rem;
      }

      .carousel-button-next {
        right: 1rem;
      }
    }
  }
`;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0,
      feedWidth: '300px',
      feedHeight: '300px',
      youtube: null,
      youtubeLoading: true,
      tweetsLoading: true,
      tweetTimeline: null,
      testimonials: [],
      testimonialsLoading: false,
      testimonialsStatus: NETWORK_STATUS.DEFAULT,
      displayedTestimonial: 0,
      randomError: getRandomError(),
    };
    this.carouselRef = React.createRef();
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.refreshFeeds = this.refreshFeeds.bind(this);
  }

  updateWindowDimensions = async () => {
    const updateDims = async () => {
      await this.setState({width: window.innerWidth, height: window.innerHeight});
    };

    await updateDims().then(() => {
      this.setState({
        feedWidth: this.state.width - 96,
        feedHeight: this.state.height * 0.4
      });
    });
  }

  async componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);

    await this.refreshFeeds();

    const loadTestimonials = async () => {
      return await new Promise((resolve, reject) => {
        const controller = new AbortController();
        fetch("/api/testimonials", {signal: controller.signal,})
          .then(res => res.json())
          .then(data => {
            this.setState(
              {
                testimonials: (
                  data.map(testimonial => {
                    return <Testimonial
                      name={testimonial.name}
                      quote={testimonial.quote}
                      rating={testimonial.rating}
                      date={testimonial.date}
                    />
                  })
                )
              });
          })
          .then(() => {
            resolve(NETWORK_STATUS.GOOD);
          })
          .catch((err) => {
            console.log(err);
            reject(NETWORK_STATUS.FAULT);
          });
      });
    }

    await loadTestimonials().then(res => {
      this.setState({testimonialsStatus: res});
    }).catch(err => {
      this.setState({testimonialsStatus: err});
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.testimonialsStatus !== this.state.testimonialsStatus) {
      this.setState({testimonialsLoading: false});
    }

    if (prevState.feedWidth !== this.state.feedWidth) {
      this.refreshFeeds().then(() => {
        this.setState({tweetsLoading: false, youtubeLoading: false});
      });
    }
  }

  refreshFeeds = async () => {
    this.setState(
      {
        tweetTimeline:
          <Timeline
            renderError={_err => {
              return (
                <div
                  style={{
                    color: 'white', display: 'flex',
                    flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly',
                    textAlign: 'center', width: this.state.feedWidth, height: this.state.feedHeight, fontSize: '2rem',
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
              height: this.state.feedHeight,
              width: this.state.feedWidth,
              theme: 'dark'
            }}
          />,
        youtube:
          <YouTube
            videoId="24eohEB4Saw"
            opts={{
              height: this.state.feedHeight,
              width: this.state.feedWidth < 1248 ? this.state.feedWidth : 1248,
            }}
            style={{
              width: this.state.feedWidth < 1248 ? this.state.feedWidth : 1248,
            }}
          />
      }
    );
  }

  handleCarousel = (direction) => {
    console.log(direction);
  }

  render() {
    const youtubeFeedLoading = this.state.youtubeLoading;
    const tweetsAreLoading = this.state.tweetsLoading;
    const testimonialsAreLoading = this.state.testimonialsLoading;
    const testimonialsStatus = this.state.testimonialsStatus;

    let youtubeFeed;
    let tweetFeed;
    let testimonialFeed;
    let carousel;

    if (youtubeFeedLoading) {
      youtubeFeed = <Loading style={{width: this.state.feedWidth, height: this.state.feedHeight}}/>;
    } else {
      youtubeFeed = this.state.youtube;
    }

    if (tweetsAreLoading) {
      tweetFeed = <Loading style={{width: this.state.feedWidth, height: this.state.feedHeight}}/>;
    } else {
      tweetFeed = this.state.tweetTimeline;
    }

    if (testimonialsAreLoading) {
      testimonialFeed = <Loading style={{width: this.state.feedWidth, height: this.state.feedHeight}}/>;
      carousel =
        <Carousel ref={this.carouselRef} className={'testimonials-carousel'} showThumbs={false} showStatus={false}
                  items={testimonialFeed}></Carousel>;
    } else {
      if (testimonialsStatus === NETWORK_STATUS.GOOD) {
        testimonialFeed = this.state.testimonials;
        carousel =
          <Carousel ref={this.carouselRef} className={'testimonials-carousel'} showThumbs={false} showStatus={false}
                    items={testimonialFeed}></Carousel>;
      } else {
        testimonialFeed = <ErrorDisplay error={this.state.randomError}/>;
        carousel =
          <Carousel ref={this.carouselRef} className={'testimonials-carousel'} showThumbs={false} showStatus={false}
                    items={testimonialFeed}></Carousel>;
      }
    }

    return (
      <StyledHome>
        <div className={'intro feed-wrapper'}>
          <div>
            <ExternalMediaWrapper media={youtubeFeed} label={'Latest Episode'} colorScheme={'white'}/>
          </div>
        </div>

        <div className={'content'}>
          <div>
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
                          link={'https://podcasts.apple.com/us/podcast/cosmic-closet-podcast/id1465437814?ign-mpt=uo%3D4'}
                          size={'4x'} color={'#833AB4'}
              />
            </div>

            <div className={'feed-wrapper'}>
              <ExternalMediaWrapper media={tweetFeed} label={'Connect On Twitter'} colorScheme={'white'}/>
            </div>
          </div>
        </div>

        <div className={'testimonials'}>
          <h2>Testimonials</h2>

          <div className={'testimonials-wrapper'}>
            <button className={'carousel-button-prev'} onClick={() => {
              this.carouselRef.current.prevSlide()
            }}>
              <FontAwesomeIcon icon={icon({name: 'chevron-left', style: 'solid'})} size={'2x'}/>
            </button>

            <div className={'carousel-wrapper'}>
              {carousel}
            </div>

            <button className={'carousel-button-next'} onClick={() => {
              this.carouselRef.current.nextSlide()
            }}>
              <FontAwesomeIcon icon={icon({name: 'chevron-right', style: 'solid'})} size={'2x'}/>
            </button>
          </div>
        </div>
      </StyledHome>
    )
  }
}

export default Home;