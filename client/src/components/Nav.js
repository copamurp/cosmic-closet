import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {icon} from '@fortawesome/fontawesome-svg-core/import.macro';
import SocialLink from "./SocialLink";

const NavWrapper = styled.nav`
  width: 100%;
  max-width: 1800px;
  font-family: 'Kanit', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  .header {
	width: 100%;
	display: flex;
    flex-direction: column;
	align-items: center;
	justify-content: center;
    
    @media only screen and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
	}

	.header-banner {
	  max-width: 40%;
	  height: auto;
	  margin-top: 2rem;
	  
	  @media only screen and (max-width: 768px) {
	    max-width: 80%;
	  }
	}

	.header-text {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;
	  
	  @media only screen and (max-width: 768px) {
	    align-items: center;
	  }

	  h2, h3 {
		color: #ffffff;
	  }

	  h2 {
		font-size: 1.5rem;
		font-size: clamp(1.5rem, 1.35rem + 0.75vw, 2.25rem);
		font-weight: 600;
	    
	    @media only screen and (max-width: 768px) {
	      font-size: 1.25rem;
	      		  font-size: clamp(1.25rem, 1.125rem + 0.75vw, 1.875rem);
	      text-align: center;
		}
	  }

	  h3 {
		font-size: 1rem;
		font-size: clamp(1rem, 0.9rem + 0.5vw, 1.5rem);
		font-weight: 200;
	    
	    @media only screen and (max-width: 768px) {
	      font-size: 0.75rem;
	      		  font-size: clamp(0.75rem, 0.675rem + 0.5vw, 1.125rem);
	      text-align: center;
		}
	  }
	}
  }

  hr {
	margin: 1rem 0;
	color: #a5a5a5;
	width: 90%;
  }

  .nav {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	.page-list {
	  flex-basis: 40%;
	  display: flex;
	  align-items: center;
	  justify-content: space-evenly;
	  list-style: none;
	  
	  @media only screen and (max-width: 768px) {
	    flex-basis: 60%;
	  }
	}

	.social-list {
	  flex-basis: 30%;
	  display: flex;

	  .spotify-badge {
		flex-basis: 35%;
	  }

	  .other-badges {
		flex-shrink: 1;
		flex-basis: 45%;
		display: flex;
		align-items: center;
		justify-content: space-evenly;

		@media only screen and (max-width: 768px) {
		  display: none;
		}
	  }
	}
  }
`;

const SpotifyBadge = styled.img`
  max-height: 32px;
  transition: transform 0.2s ease-in-out;
  transform: scale(1);

  :hover {
	transform: scale(1.1);
	cursor: pointer;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 200;
  color: #ffffff;
  transform: scale(1);
  transition: color 0.2s ease-in-out, transform 0.2s ease-in-out;

  :hover:not(.active) {
	color: #a5a5a5;
	transform: scale(1.1);
  }

  &.active {
	font-weight: 400;
	color: white;
	border-bottom: 1px solid #ffffff;
  }
`;

const Nav = () => {
	return (
		<NavWrapper>
			<div className={'header'}>
				<img className={'header-banner'} src={require('../assets/images/banner.png')} alt={'The' +
					' Cosmic Closet Podcast' +
					' Banner'}/>
				<div className={'header-text'}>
					<h3 className={'mission-statement'}>Unlock mysteries from the Unseen Realms to Infinite Frontiers -
						this is the Cosmic Closet Podcast!</h3>
				</div>
			</div>
			<hr/>
			<div className={'nav'}>
				<ul className={'page-list'}>
					<StyledNavLink className={'page-link'} to={'/'}>Home</StyledNavLink>
					<StyledNavLink className={'page-link'} to={'/about'}>About</StyledNavLink>
					<StyledNavLink className={'page-link'} to={'/contact'}>Contact</StyledNavLink>
				</ul>

				<ul className={'social-list'}>
					<div className={'spotify-badge'}>
						<a href={'https://open.spotify.com/show/7s2ljVGvKi30OZ3uR6zWKE'} target={'_blank'}
						   rel="noreferrer">
							<SpotifyBadge src={require('../assets/images/Spotify_Logo_CMYK_White.png')} alt={'Spotify' +
								' badge'}/>
						</a>
					</div>

					<div className={'other-badges'}>
						<SocialLink icon={icon({name: 'youtube', style: 'brands'})}
						            link={'https://twitter.com/cosmic_closet?lang=en'} size={'xl'} color={'#FF0000'}
						/>
						<SocialLink icon={icon({name: 'twitter', style: 'brands'})}
						            link={'https://twitter.com/cosmic_closet?lang=en'} size={'xl'} color={'#1DA1F2'}
						/>
						<SocialLink icon={icon({name: 'instagram', style: 'brands'})}
						            link={'https://twitter.com/cosmic_closet?lang=en'} size={'xl'} color={'white'}
						/>
						<SocialLink icon={icon({name: 'podcast', style: 'regular', family: 'sharp'})}
						            link={'https://twitter.com/cosmic_closet?lang=en'} size={'xl'} color={'#833AB4'}
						/>
					</div>
				</ul>
			</div>
		</NavWrapper>
	);
}

export default Nav;