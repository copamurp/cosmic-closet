import styled from 'styled-components';
import {useEffect, useState} from "react";
import Loading from "../components/Loading";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
import getRandomError from "../helper/getRandomError";
import ErrorDisplay from "../components/ErrorDisplay";
import {NETWORK_STATUS} from "../config";

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

const Contact = () => {
	const [contactStatus, setContactStatus] = useState(NETWORK_STATUS.DEFAULT);
	const [showContactForm, setShowContactForm] = useState(true);
	const [loading, setLoading] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		setShowContactForm(false);
		sendMail({message: "hi"})
			.then(res => {
				clearTimeout(res[0]);
				setContactStatus(NETWORK_STATUS.GOOD);
			})
			.catch(err => {
				setContactStatus(NETWORK_STATUS.BAD);
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
						<ErrorDisplay error={randomError}/>
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