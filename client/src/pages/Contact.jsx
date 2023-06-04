import React from 'react';
import styled from 'styled-components';
import Loading from "../components/Loading";
import getRandomError from "../helper/getRandomError";
import ErrorDisplay from "../components/ErrorDisplay";
import NETWORK_STATUS from "../config.js";

const StyledContact = styled.div`
  position: relative;
  width: 100%;

  h1 {
    text-align: center;
    color: #ffffff;
    font-size: 2rem;
    font-size: clamp(2rem, 1.8rem + 0.75vw, 3rem);
    font-weight: 600;
    margin: 4rem 0;
  }

  .form-wrapper {
    padding: 2rem;
    width: 100%;
    background: radial-gradient(ellipse at bottom, #5B5AA8 25%, #4f4ddf 100%);
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5) inset;

    @media only screen and (max-width: 768px) {
      padding: 1rem 0;
    }
  }

  .contact-form {
    width: 100%;
    max-width: 800px;
    height: 100%;
    margin: 4rem auto;
    padding: 1rem 2rem;

    @media only screen and (max-width: 768px) {
      margin: 0 auto;
      padding: 0;
      width: 90%;
    }

    .submit-wrapper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;

      input[type='submit'] {
        margin-top: 1rem;
        padding: 1rem 2rem;
        background-color: #202020;
        color: #ffffff;
        font-size: 1rem;
        font-weight: 400;
        border: 1px solid #ffffff;
        border-radius: 0.5rem;
        cursor: pointer;
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
        transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out, border 0.5s ease-in-out;

        :hover {
          background-color: #ffffff;
          color: #202020;
          border: 1px solid #4f4ddf;
        }
      }
    }
  }
`;

const StyledFormControl = styled.div`
  margin-bottom: 2rem;

  .wrapper {
    min-width: 300px;
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 2rem;
    background-color: #181717;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
    border-radius: 0.5rem;

    @media only screen and (max-width: 768px) {
      padding: 1rem;
    }

    label {
      color: #ffffff;
      font-size: 1rem;
      font-weight: 200;
      margin-bottom: 0.5rem;

      @media only screen and (max-width: 768px) {
        font-size: 1rem;

        &::after {
          content: '*';
          color: #ff0000;
        }
      }
    }

    input, textarea {
      padding: 0.5rem;
      font-size: 1rem;
      font-weight: 200;
      border: 1px solid #ffffff;
      border-radius: 0.5rem;
      background-color: #202020;
      color: #ffffff;
      transition: border-color 0.5s ease-in-out;
      min-width: 300px;
      max-width: 600px;
      width: 100%;

      :hover {
        border-color: #4f4ddf;
      }

      :focus {
        outline: none;
      }

      @media only screen and (max-width: 768px) {
        font-size: 1rem;
        width: 90%;
      }
    }

    textarea {
      min-height: 200px;
      resize: none;
      min-width: 300px;
      max-width: 600px;
      width: 100%;
    }
  }
`;

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactStatus:   NETWORK_STATUS.DEFAULT,
            showContactForm: true,
            loading:         false,
            randomError:     getRandomError(),
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendMail     = this.sendMail.bind(this);
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({
            showContactForm: false,
            loading:         true,
        });
        this.sendMail({message: "hi"})
                .then(res => {
                    clearTimeout(res[0]);
                    this.setState({contactStatus: NETWORK_STATUS.GOOD});
                })
                .catch(() => {
                    this.setState({contactStatus: NETWORK_STATUS.FAULT});
                }).finally(() => this.setState({loading: false}));
    }

    sendMail = async ({message}) => {
        this.setState({loading: true});

        await timeout(3500);

        return message;
    }

    render() {
        return (
                <StyledContact>
                    <h1>Contact Us</h1>
                    {this.state.showContactForm ?
                            <div className={'form-wrapper'}>
                                <form className={'contact-form'}
                                      onSubmit={this.handleSubmit}>
                                    <StyledFormControl>
                                        <div className={'wrapper'}>
                                            <label>First Name</label>
                                            <input type={'text'}/>
                                        </div>
                                    </StyledFormControl>

                                    <StyledFormControl>
                                        <div className={'wrapper'}>
                                            <label>Last Name</label>
                                            <input type={'text'}/>
                                        </div>
                                    </StyledFormControl>

                                    <StyledFormControl>
                                        <div className={'wrapper'}>
                                            <label>E-mail</label>
                                            <input type={'text'}/>
                                        </div>
                                    </StyledFormControl>

                                    <StyledFormControl>
                                        <div className={'wrapper'}>
                                            <label>Message</label>
                                            <textarea/>
                                        </div>
                                    </StyledFormControl>

                                    <div className={'submit-wrapper'}>
                                        <input type={'submit'}
                                               value={'Submit'}/>
                                    </div>
                                </form>
                            </div>
                            :
                            <>
                                {this.state.loading ?
                                        <Loading/>
                                        :
                                        <ErrorDisplay
                                                error={this.state.randomError}/>
                                }
                            </>
                    }
                </StyledContact>
        )
    }
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default Contact;