import styled from 'styled-components';
import {NavLink} from "react-router-dom";

const StyledFooter = styled.footer`
  width: 100%;
  height: 100%;
  max-width: 1800px;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  margin: 0 auto;
  padding: 2rem;
  min-height: 20vh;

  @media only screen and (max-width: 768px) {
	display: block;
  }

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
  }

  .center-wrap {
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;

	@media only screen and (max-width: 768px) {
	  position: absolute;
	  left: 50%;
	  transform: translateX(-50%);
	}

	p {
	  @media only screen and (max-width: 768px) {
		font-size: 0.8rem;
		font-weight: 400;
	  }
	}

	.meta {
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
		}
	  }
	}
  }

  .links {
	flex-basis: 35%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding-left: 10vw;

	@media only screen and (max-width: 768px) {
	  float: left;
	  flex: 1;
	  align-items: stretch;
	  justify-content: space-between;
	  padding-left: 0;
	}
  }

  .socials {
	flex-basis: 35%;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;
	padding-right: 10vw;

	@media only screen and (max-width: 768px) {
	  float: right;
	  padding-right: 0;
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

const Footer = () => {
	return (
		<StyledFooter>
			<div className={'links'}>
				<button
					onClick={() => {
						window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
					}}
				>Scroll To Top
				</button>
				<NavLink to={'/about'}>About</NavLink>
				<NavLink to={'/contact'}>Contact Us</NavLink>
			</div>

			<div className={'center-wrap'}>
				<div className={'meta'}>
					<img src={require('../assets/images/logo.png')} alt={'The Cosmic Closet Podcast logo.'}/>
					<p>The Cosmic Closet Podcast</p>
				</div>

				<p>contactcosmiccloset@gmail.com</p>
			</div>

			<div className={'socials'}>
				<button>Social 1</button>
				<button>Social 2</button>
				<button>Social 3</button>
			</div>
		</StyledFooter>
	)
}

export default Footer;