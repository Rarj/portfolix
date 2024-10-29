import React, { useEffect } from 'react'
import ScreenHeading from '../../util/ScreenHeading/ScreenHeading'
import ScrollService from '../../util/ScrollService'
import Animations from '../../util/Animations'
import './AboutMe.css'

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return

    Animations.animations.fadeInScreen(props.id)
  }

  ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

  const SCREEN_CONSTANTS = {
    highlights: {
      heading: "Here are a few highlights:",
      bullets: [
        "Android Engineer",
        "Machine Learning Engineer",
        "Frontend Engineer",
      ]
    }
  }

  const renderHighlight = () => {
    return (
      SCREEN_CONSTANTS.highlights.bullets.map((value, index) => (
        <div className='highlight' key={index}>
          <div className='highlight-blob'></div>
          <span>{value}</span>
        </div>
      ))
    )
  }

  return (
    <div className='about-me-container screen-container fade-in' id={props.id || ""}>
      <div className='about-me-parent'>
        <ScreenHeading title='About Me' subHeading='Simplicity is the soul of efficiency' />
        <div className='about-me-card'>
          <div className='about-me-profile'></div>
          <div className='about-me-details'>
            <span className='hi-there'>Hi there!✋🏼</span>
            <br />
            <br />
            <span className='about-me1'>
              I’m Rio, an experienced Android Engineer with a diverse background spanning multiple industries. I’m passionate about learning and exploring new technologies to create innovative and impactful solutions.
            </span>
            <br />
            <br />
            <span className='about-me2'>
              Alongside my technical expertise, I’m known for being a friendly team player and a natural cheerleader, always encouraging and supporting those around me.
            </span>
            <br />
            <br />
            <span className='about-me3'>
              I thrive in environments where collaboration is key, and I love motivating my team to push boundaries and achieve meaningful, high-impact outcomes together.
            </span>
            {/* <div className='about-me-options'>
              <button className='btn primary-btn'
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Grab some coffee! {" "}
              </button>
              <a href='Rio Arjuna - Sr. Android Engineer.pdf' download='Rio Arjuna - Sr. Android Engineer.pdf'>
                <button className='btn highlighted-btn'>Download Resume</button>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
