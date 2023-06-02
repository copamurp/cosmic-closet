import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  background: #0e0e0e;
  color: #ffffff;
  padding: 2rem 0;
  text-align: center;
  font-size: 1rem;
  font-weight: 200;
  display: flex;
  
  .wrapper {
    width: 100%;
    max-width: 1800px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
  }
  
  .links {
    flex-basis: 35%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: clamp(2rem, 2rem + 1vw, 4rem);
  }
  
  .socials {
    flex-basis: 35%;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;
	padding-right: clamp(2rem, 2rem + 1vw, 4rem);
  }
  
  button {
    background: none;
    border: none;
    color: #ffffff;
    font-size: 1rem;
    font-weight: 200;
    padding: 0.5rem 0;
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
			<div className={'wrapper'}>
				<div className={'links'}>
					<button>Contact Us</button>
					<button>Anchor 2</button>
					<button>Anchor 3</button>
				</div>
				<div className={'copyright'}>
					<p style={{fontWeight: '500', fontSize: '1.25rem'}}>The Cosmic Closet Podcast</p>
					<p>contactcosmiccloset@gmail.com</p>
					<p>© 2023, All Rights Reserved</p>
				</div>
				<div className={'socials'}>
					<button>Social 1</button>
					<button>Social 2</button>
					<button>Social 3</button>
				</div>
			</div>
		</StyledFooter>
	)
}

export default Footer;