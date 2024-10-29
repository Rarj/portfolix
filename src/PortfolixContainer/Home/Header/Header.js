import React, { useState, useEffect } from 'react'
import { TOTAL_SCREENS, GET_SCREEN_INDEX } from '../../../util/CommonUtils'
import ScrollService from '../../../util/ScrollService'
import { faBars, faL } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.css'

export default function Header() {

    const [selectedScreen, setSelectedScreen] = useState(0)
    const [showHeaderOptions, setShowHeaderOptions] = useState(false)

    const [selectedScreenScroll, setSelectedScreenScroll] = useState("Home")

    const updateCurrentScreen = (currentScreen) => {
        if (!currentScreen || !currentScreen.screenInView) return

        let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView)
        if (screenIndex < 0) return
    }

    ScrollService.currentScreenBroadcaster.subscribe(updateCurrentScreen)

    const getHeaderOptions = () => {
        return (
            TOTAL_SCREENS.map((screen, index) => (
                <div
                    key={screen.screen_name}
                    className={getHeaderOptionsClass(index)}
                    onClick={() => switchScreen(index, screen)}
                >
                    <span
                        className={
                            selectedScreenScroll === screen.screen_name ? "SLCTD" : "NOT-SLCTD"
                        }
                    >{screen.screen_name}</span>
                    <div>

                    </div>
                </div>
            ))
        )
    }

    const getHeaderOptionsClass = (index) => {
        let classes = "header-option" + " "
        if (index < TOTAL_SCREENS.length - 1) {
            classes = classes + "header-option-separator" + " "
        }

        if (selectedScreen === index) {
            classes = classes + "selected-header-option" + " "
        }
        return classes
    }

    const switchScreen = (index, screen) => {
        let screenComponent = document.getElementById(screen.screen_name)

        if (!screenComponent) return

        setSelectedScreenScroll(screen.screen_name)

        screenComponent.scrollIntoView({ behavior: "smooth" })
        setSelectedScreen(index)
        setShowHeaderOptions(false)
    }

    return (
        <section className='sticky-content'>
            <div className='header-container' onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
                <div className='header-parent'>
                    <div className='header-hamburger' onClick={() => setShowHeaderOptions(!showHeaderOptions)} >
                        <FontAwesomeIcon className='header-hamburger-bars' icon={faBars} />
                    </div>
                    <div className='header-logo'>
                        <span className='open-bracket'>&#x5b;</span>
                        <span>PortfoliX</span>
                        <span className='close-bracket'>&#x5d;</span>
                    </div>
                    <div className={(showHeaderOptions) ? "header-options show-hamburger-options" : "header-options"}>
                        {getHeaderOptions()}
                    </div>
                </div>
            </div>
        </section>
    )
}
