import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import "owl.carousel/dist/assets/owl.carousel.css"
import "owl.carousel/dist/assets/owl.theme.default.css"
import ScreenHeading from '../../util/ScreenHeading/ScreenHeading'
import ScrollService from '../../util/ScrollService'
import Animations from '../../util/Animations'
import "./Projects.css"
import shape from "../../assets/Projects/shape-bg.png";

export default function Projects(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return

        Animations.animations.fadeInScreen(props.id)
    }

    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const options = {
        loop: true,
        margin: 0,
        nav: false,
        animateIn: "bounceInRight",
        animateOut: "bounceOutRight",
        dots: true,
        autoplay: true,
        smartSpeed: 2000,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1000: {
                items: 3,
            }
        }
    }

    return (
        <div>
            <div className='projects-section screen-container fade-in' id={props.id || ''}>
                <ScreenHeading
                    title="Projects"
                    subHeading="Done is better than perfect." />
                <div className='container'>
                    <div className='row'>
                        <OwlCarousel
                            className='owl-carousel'
                            id='projects-carousel'
                            {...options}
                        >
                            <div className='col-lg-12'>
                                <div className='project-item'>
                                    <div className='project-description'>
                                        <p>
                                            <i className='fa fa-quote-left' />
                                            MoviX is an innovative application designed to enhance your movie browsing experience by providing an intuitive and user-friendly interface. Discover and explore a vast collection of movies effortlessly with MoviX's robust search and detailed information features.
                                            <i className='fa fa-quote-right' />
                                        </p>
                                    </div>
                                    <div className='project-info'>
                                        <img src='img/Projects/MoviX-icon.webp' alt="Oops.." />
                                        <h5>MoviX</h5>
                                        <ul className='tech-stacks list-unstyled'>
                                            <a href='https://github.com/rarj' title='Github'>
                                                <li>
                                                    <i className='fa-brands fa-github' aria-hidden="true"></i>
                                                </li>
                                            </a>
                                            <a href='https://play.google.com/store/apps/details?id=com.arj.movix' title='MoviX - Play Store'>
                                                <li>
                                                    <i className='fa-brands fa-google-play'></i>
                                                </li>
                                            </a>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='project-item'>
                                    <div className='project-description'>
                                        <p>
                                            <i className='fa fa-quote-left' />
                                            This is new publish apps, the basic features is a simple like you flip your palm!
                                            If you want to contribute to this project, simply send me email to add contributor into this project!
                                            <i className='fa fa-quote-right' />
                                        </p>
                                    </div>
                                    <div className='project-info'>
                                        <img src='img/Projects/iNotes-icon.webp' alt="Oops.." />
                                        <h5>iNotes</h5>
                                        <ul className='tech-stacks list-unstyled'>
                                            <a href='https://play.google.com/store/apps/details?id=rio.arj.inotes' title='iNotes - Play Store'>
                                                <li>
                                                    <i className='fa-brands fa-google-play'></i>
                                                </li>
                                            </a>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='project-item'>
                                    <div className='project-description'>
                                        <p>
                                            <i className='fa fa-quote-left' />
                                            CardX, a cutting-edge Kotlin library designed to revolutionize the way you preview Debit Cards within your Android applications.
                                            Leveraging the power of Jetpack Compose, CardX offers a seamless integration that enables developers to effortlessly showcase debit card designs with stunning visual appeal. What sets CardX apart is its incorporation of flip animation, adding an engaging and dynamic element to the card preview experience.
                                            <i className='fa fa-quote-right' />
                                        </p>
                                    </div>
                                    <div className='project-info'>
                                        <img src='img/Projects/Libs.png' alt="Oops.." />
                                        <h5>CardX</h5>
                                        <ul className='tech-stacks list-unstyled'>
                                            <a href='https://central.sonatype.com/artifact/com.rioarj.labs/cardx' title='CardX - Maven Central'>
                                                <li>
                                                    <i className='fa-solid fa-cube'></i>
                                                </li>
                                            </a>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
            <div className="footer-image">
                <img src={shape} alt="Oops.." />
            </div>
        </div>
    )
}
