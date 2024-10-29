import React from 'react'
import { TOTAL_SCREENS } from '../util/CommonUtils'
import Header from '../PortfolixContainer/Home/Header/Header'

export default function PortolixContainer() {
    const mapAllScreens = () => {
        return (
            TOTAL_SCREENS.map((screen) => (
                (screen.component) ?
                    <screen.component
                        screenName={screen.screen_name}
                        key={screen.screen_name}
                        id={screen.screen_name} /> :
                    <div key={screen.screen_name}></div>
            ))
        )
    }

    return (
        <div className='portfolix-container'>
            <Header />
            {mapAllScreens()}
        </div>
    )
}
