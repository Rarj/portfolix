import React from 'react'
import { useTypeWriter, Cursor, useTypewriter } from 'react-simple-typewriter'
import "./Profile.css"
import ScrollService from '../../../util/ScrollService'

export default function Profile(props) {
    const [typeEffect] = useTypewriter({
        words: [
            'Sr. Android Engineer',
        ],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 60,
        delaySpeed: 2500,
    })

    return (
        <section className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='https://github.com/rarj' title='Github'>
                                <i className='fa-brands fa-github'></i>
                            </a>
                            <a href='https://id.linkedin.com/in/ri0arjuna' title='LinkedIn'>
                                <i className='fa-brands fa-linkedin'></i>
                            </a>
                            <a href='https://www.instagram.com/rio.arj/' title='Instagram'>
                                <i className='fa-brands fa-instagram'></i>
                            </a>
                            <a href='https://ri0arjuna.medium.com/' title='Medium Blog'>
                                <i className="fa-brands fa-medium"></i>
                            </a>
                            <a href='https://mvnrepository.com/artifact/com.rioarj.labs/cardx' title='Sonatype - Maven Central'>
                                <i className='fa fa-cube'></i>
                            </a>
                        </div>
                    </div>

                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className='highlighted-text'>Rio Arjuna</span>
                        </span>
                    </div>

                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            <h1>
                                {" "}
                                {typeEffect}
                            </h1>
                            <span className='profile-role-tagline'>
                                Innovation through collaboration, impact through technology
                            </span>
                        </span>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </section>
    )
} 
