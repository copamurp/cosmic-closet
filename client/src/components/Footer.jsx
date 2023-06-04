import React from 'react';
import styled from 'styled-components';
import {NavLink} from "react-router-dom";
import logo from '../assets/images/logo.webp';

const StyledFooter = styled.footer`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 2rem;
  background: radial-gradient(ellipse at bottom right, #1a1a1a 0, #0e0e0e 35%);

  button, p, a {
    font-size: 1rem;
    font-weight: 200;
    text-decoration: none;
    color: #ffffff;
    transform: scale(1);
    transition: color 0.2s ease-in-out, transform 0.2s ease-in-out;

    :hover {
      color: #a5a5a5;
      transform: scale(1.1);
    }

    @media only screen and (max-width: 768px) {
      :not(:last-child) {
        margin-bottom: 1rem;
      }
    }
  }

  .link-wrapper {
    width: 100%;
    max-width: 1800px;
    flex-basis: 90%;
    display: flex;
    margin-bottom: 2rem;

    > div {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      margin: 0 auto;
      width: 40%;

      @media only screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;

        :nth-child(even) {
          align-items: flex-end;
        }

        :nth-child(odd) {
          align-items: flex-start;
        }
      }
    }
  }

  .meta {
    flex-basis: 10%;

    .cosmic-closet {
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      p {
        font-weight: 500;

        @media only screen and (max-width: 768px) {
          font-size: 0.8rem;
          font-weight: 400;
        }
      }

      img {
        max-height: 26px;
        margin-right: 1rem;

        @media only screen and (max-width: 768px) {
          max-height: 20px;
          margin-right: 0;
        }
      }
    }
  }

  button {
    background: none;
    border: none;
    color: #ffffff;
    font-size: 1rem;
    font-weight: 200;
    cursor: pointer;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: #a5a5a5;
    }
  }
`;

class Footer extends React.Component {
    render() {
        return (
                <StyledFooter>
                    <div className={'link-wrapper'}>
                        <div className={'site-links'}>
                            <button
                                    onClick={() => {
                                        window.scrollTo({
                                            top:      0,
                                            left:     0,
                                            behavior: 'smooth',
                                        })
                                    }}
                            >Scroll To Top
                            </button>
                            <NavLink to={'/about'}>About</NavLink>
                            <NavLink to={'/contact'}>Contact Us</NavLink>
                        </div>

                        <div className={'social-links'}>
                            <a href={'https://open.spotify.com/show/7s2ljVGvKi30OZ3uR6zWKE'}
                               target={'_blank'}
                               rel="noreferrer">Spotify</a>
                            <a href={'https://www.youtube.com/@CosmicCloset'}
                               target={'_blank'}
                               rel="noreferrer">YouTube</a>
                            <a href={'https://twitter.com/cosmic_closet?lang=en'}
                               target={'_blank'}
                               rel="noreferrer">Twitter</a>
                        </div>
                    </div>


                    <div className={'meta'}>
                        <div className={'cosmic-closet'}>
                            <img src={logo}
                                 alt={'The Cosmic Closet Podcast logo'}/>
                            <p>The Cosmic Closet Podcast</p>
                        </div>

                        <p>contactcosmiccloset@gmail.com</p>
                    </div>
                </StyledFooter>
        )
    }
}

export default Footer;