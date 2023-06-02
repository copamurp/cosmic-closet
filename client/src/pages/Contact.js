import styled from 'styled-components';

const StyledContact = styled.div`
	width: 100%;
  display: flex;
  flex-direction: column;
  
  h1 {
    margin: 4rem 0;
	flex-basis: 10%;
    text-align: center;
  }
  
  .form-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .contact-form {
	flex-basis: 90%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
	margin: 4rem 0;
    
    label {
      float: left;
      width: 90%;
      margin-bottom: 2rem;
    }
    
    input, textarea {
      float: right;
	  width: 75%;
      padding: 0.5rem;
      
      :focus {
        text-decoration: none;
        outline: none;
      }
    }
  }
`;

const Contact = () => {
	const handleSubmit = (event) => {
		event.preventDefault();
	}

	return (
		<StyledContact>
			<h1>Contact Us</h1>
			<div className={'form-wrapper'}>
				<form className={'contact-form'} onSubmit={handleSubmit}>
					<label>
						First Name
						<input type={'text'} />
					</label>

					<label>
						Last Name
						<input type={'text'} />
					</label>

					<label>
						E-mail Address
						<input type={'text'} />
					</label>

					<label>
						Message
						<textarea />
					</label>

					<input type={'submit'} value={'Submit'} />

				</form>
			</div>
		</StyledContact>
	)
}

export default Contact;