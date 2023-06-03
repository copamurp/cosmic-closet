import styled from 'styled-components';
import {useEffect, useState} from "react";
import Loading from "../components/Loading";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
import getRandomError from "../helper/getRandomError";

const StyledContact = styled.div`
  position: relative;
  width: 100%;
  min-height: 75vh;
  display: flex;
  flex-direction: column;

  h1 {
	text-align: center;
	color: #ffffff;
	font-size: 2rem;
	font-size: clamp(2rem, 1.8rem + 0.75vw, 3rem);
	font-weight: 600;
	margin: 4rem 0;
	flex-basis: 10%;
  }

  .contact-form {
	flex-basis: 90%;
	margin: 4rem 0;

	@media only screen and (max-width: 768px) {
	  margin: 2rem 0;
	}

	label {
	  float: left;
	  width: 100%;
	  margin-bottom: 2rem;

	  @media only screen and (max-width: 768px) {
		width: 100%;
	  }
	}

	input, textarea {
	  float: right;
	  width: 60%;
	  padding: 0.5rem;

	  :focus {
		text-decoration: none;
		outline: none;
	  }

	  @media only screen and (max-width: 768px) {
		width: 50%;
	  }
	}

	textarea {
	  min-height: 150px;
	}

	> div {
	  width: 100%;
	  text-align: center;
	}

	input[type='submit'] {
	  float: none;
	  margin: 0 auto;
	  border: 1px solid #ffffff;
	  border-radius: 0.5rem;
	  background: #0e0e0e;
	  color: #ffffff;
	  max-width: 100px;
	  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;

	  :hover {
		background-color: #ffffff;
		color: #0e0e0e;
		cursor: pointer;
	  }
	}
  }
`;

const StyledWrapper = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 50%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
	width: 100%;
  }
`;

const CONTACT_STATUS = {
	DEFAULT: 0,
	GOOD: 1,
	BAD: -1
}

const Contact = () => {
	const [contactStatus, setContactStatus] = useState(CONTACT_STATUS.DEFAULT);
	const [showContactForm, setShowContactForm] = useState(true);
	const [loading, setLoading] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		setShowContactForm(false);
		sendMail({message: "hi"})
			.then(res => {
				clearTimeout(res[0]);
				setContactStatus(CONTACT_STATUS.GOOD);
			})
			.catch(err => {
				setContactStatus(CONTACT_STATUS.BAD);
			}).finally(() => setLoading(false));
	}

	const sendMail = async ({message}) => {
		setLoading(true);

		await timeout(3500);

		return message;
	}

	let randomError = getRandomError();

	return (
		<StyledContact>
			<h1>Contact Us</h1>
			{showContactForm ?
				<StyledWrapper>
					<form className={'contact-form'} onSubmit={handleSubmit}>
						<label>
							First Name
							<input type={'text'}/>
						</label>

						<label>
							Last Name
							<input type={'text'}/>
						</label>

						<label>
							E-mail
							<input type={'text'}/>
						</label>

						<label>
							Message
							<textarea/>
						</label>

						<div>
							<input type={'submit'} value={'Submit'}/>
						</div>
					</form>
				</StyledWrapper>
				:
				<>
					{loading ?
						<Loading/>
						:
						<div style={{
							color: 'white',
							textAlign: 'center',
							fontSize: '2rem',
							padding: '4rem',
							width: '100%',
							minWidth: '350px',
							maxWidth: '750px',
							height: '40vh',
							minHeight: '350px',
							maxHeight: '750px',
							margin: '0 auto'
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
								<p style={{fontSize: '1rem'}}>error {randomError.code}</p>
								<p style={{
									fontSize: '1rem',
									height: '90%',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									backgroundColor: 'rgba(0,0,0,0.4)',
									borderRadius: '0.25rem',
									boxShadow: '0 0 1px 1px rgba(7,7,7,0.8)',
									padding: '0.5rem'
								}}>
									{randomError.message}
								</p>
							</div>
						</div>
					}
				</>
			}
		</StyledContact>
	)
}

function timeout(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

export default Contact;