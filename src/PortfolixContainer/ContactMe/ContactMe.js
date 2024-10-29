import React, { useState } from 'react'
import axios from 'axios'
import { toast, toastfy } from 'react-toastify'
import Typical from 'react-typical'
import { useTypeWriter, Cursor, useTypewriter } from 'react-simple-typewriter'
import imageBackground from '../../../src/images/bg-contact-me.jpeg'
import loading from '../../../src/images/loading.gif'
import ScreenHeading from '../../util/ScreenHeading/ScreenHeading'
import ScrollService from '../../util/ScrollService'
import Animations from '../../util/Animations'
import './ContactMe.css'
import { faL } from '@fortawesome/free-solid-svg-icons'

export default function ContactMe(props) {

    const [typeEffect] = useTypewriter({
        words: ['Keep in touch! 💌', "Send me a great news! 🗞️"],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 60,
        delaySpeed: 250,
    })

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [banner, setBanner] = useState("")
    const [bool, setBool] = useState(false)

    const handleSenderName = (senderName) => {
        setName(senderName.target.value)
    }
    const handleSenderEmail = (senderEmail) => {
        setEmail(senderEmail.target.value)
    }
    const handleSenderMessage = (senderMessage) => {
        setMessage(senderMessage.target.value)
    }

    const submitForm = async (e) => {
        e.preventDefault()
        try {
            let formInfo = {
                name,
                email,
                message,
            }
            setBool(true)
            const submissionInfo = await axios.post(`/contact`, formInfo)

            if (
                name.length === 0 ||
                email.length === 0 ||
                message.length === 0
            ) {
                setBanner(false)
                toast.error(submissionInfo.data.msg)
                setBool(false)
            } else if (submissionInfo.status === 200) {
                setBanner(false)
                toast.success(submissionInfo.data.msg)
                setBool(false)
            }
        } catch (error) {

        }
    }

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return

        Animations.animations.fadeInScreen(props.id)
    }

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    return (
        <div className='main-container fade-in' id={props.id || ''}>
            <ScreenHeading
                subHeading="Let's do some impactful project!"
                title="Ping Me!"
            />
            <div className='central-form'>
                <div className='col'>
                    <h2>
                        {" "}
                        {typeEffect}
                    </h2>
                    <a href='https://github.com/rarj' title='Github'>
                        <i className='fa-brands fa-github' aria-hidden="true"></i>
                    </a>
                    <a href='https://id.linkedin.com/in/ri0arjuna' title='LinkedIn'>
                        <i className='fa-brands fa-linkedin' aria-hidden="true"></i>
                    </a>
                    <a href='https://www.instagram.com/rio.arj/' title='Instagram'>
                        <i className='fa-brands fa-instagram' aria-hidden='true'></i>
                    </a>
                    <a href='https://ri0arjuna.medium.com/' title='Medium Blog'>
                        <i className="fa-brands fa-medium" aria-hidden='true'></i>
                    </a>
                    <a href='https://mvnrepository.com/artifact/com.rioarj.labs/cardx' title='Sonatype - Maven Central'>
                        <i className='fa fa-cube' aria-hidden='true'></i>
                    </a>
                </div>
                <div className='back-form'>
                    <div className='img-back'>
                        <h4>Hi there, send me an email!</h4>
                        <img src={imageBackground} alt="Oops.." />
                    </div>
                    <form onSubmit={submitForm}>
                        <p>{banner}</p>
                        <label htmlFor='name'>Name</label>
                        <input type='text'
                            onChange={handleSenderName}
                            value={name}
                        />

                        <label htmlFor='email'>Email</label>
                        <input type='email'
                            onChange={handleSenderEmail}
                            value={email}
                        />

                        <label htmlFor='message'>Message</label>
                        <textarea type='text'
                            onChange={handleSenderMessage}
                            value={message}
                        />

                        <div className='send-btn'>
                            <button type='submit'>
                                Send <i className='fa fa-paper-plane' />
                                {
                                    bool ? (
                                        <b className='load'>
                                            <img src={loading} alt="Oops.." />
                                        </b>
                                    ) : ("")
                                }
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
