import React from 'react';
import styled from 'styled-components';
import Loading from "../components/Loading";
import getRandomError from "../helper/getRandomError";
import ErrorDisplay from "../components/ErrorDisplay";
import NETWORK_STATUS from "../config.js";

const StyledContact = styled.div`
    width: 100%;
    min-height: 80vh;

    h1 {
        text-align: center;
        color: #ffffff;
        font-size: 2rem;
        font-size: clamp(2rem, 1.8rem + 0.75vw, 3rem);
        font-weight: 600;
        margin: 2rem 0;
    }

    .form-wrapper {
        padding: 1rem;
        min-height: 50vh;
        height: 100%;
        width: 100%;
        background: radial-gradient(ellipse at bottom, #5B5AA8 25%, #4f4ddf 100%);
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5) inset;
    }

    .contact-form {
        width: 100%;
        max-width: 800px;
        height: 100%;
        margin: 0 auto;
        display: flex;

        @media only screen and (max-width: 768px) {
            flex-direction: column;
        }

        > div {
            width: 50%;
            margin: 0 2.5%;
            display: flex;
            flex-direction: column;

            @media only screen and (max-width: 768px) {
                margin: 0 auto;
                width: 100%;

                :not(:last-child) {
                    float: none;
                }

                :last-child {
                    float: none;
                }
            }

            :not(:last-child) {
                float: left;
            }

            :last-child {
                float: right;
            }
        }
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
            border: 1px solid #4f4ddf;
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
`;

const StyledFormControl = styled.div`
    margin-bottom: 2rem;

    label {
        color: #ffffff;
        font-size: 1rem;
        font-weight: 200;
        margin-bottom: 0.25rem;

        @media only screen and (max-width: 768px) {
            font-size: 1rem;

            &::after {
                content: '*';
                color: #ff0000;
            }
        }
    }

    .wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: flex-start;
        margin: 0 auto;
        padding: 0.5rem;
        background-color: #181717;
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
        border-radius: 0.25rem;

        @media only screen and (max-width: 768px) {
            padding: 1rem;
        }

        input {
            width: 100%;
            padding: 0.5rem;
            font-size: 1rem;
            font-weight: 200;
            border: 1px solid #4f4ddf;
            border-radius: 0.25rem;
            background-color: #202020;
            color: #ffffff;
            transition: border-color 0.5s ease-in-out;

            :hover {
                border-color: #ffffff;
            }

            :focus {
                outline: none;
            }
        }
    }

    .message {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: flex-start;
        width: 100%;
        margin: 0 auto;
        padding: 0.5rem;
        background-color: #181717;
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
        border-radius: 0.25rem;

        @media only screen and (max-width: 768px) {
            padding: 1rem;
        }

        textarea {
            resize: none;
            width: 100%;
            height: 100%;
            padding: 0.5rem;
            font-size: 1rem;
            font-weight: 200;
            border: 1px solid #4f4ddf;
            border-radius: 0.25rem;
            background-color: #202020;
            color: #ffffff;
            transition: border-color 0.5s ease-in-out;
            min-height: 200px;
        }
    }

    &#message {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: stretch;
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
                                    <div>
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
                                    </div>

                                    <div>
                                        <StyledFormControl id={'message'}>
                                            <div className={'message'}>
                                                <label>Message</label>
                                                <textarea/>
                                            </div>
                                        </StyledFormControl>
                                    </div>
                                </form>

                                <div className={'submit-wrapper'}>
                                    <input type={'submit'}
                                           value={'Submit'}/>
                                </div>
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