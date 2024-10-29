import React, { useState } from 'react'
import ScreenHeading from '../../util/ScreenHeading/ScreenHeading'
import ScrollService from '../../util/ScrollService'
import Animations from '../../util/Animations'
import './Resume.css'

export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
    const [carouselOffSetStyle, setCarouselOffSetStyle] = useState({})

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return

        Animations.animations.fadeInScreen(props.id)
    }

    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const ResumeHeading = (propss) => {
        return (
            <div className='resume-heading'>
                <div className='resume-main-heading'>
                    <div className='heading-bullet' />
                    <span>{propss.heading ? propss.heading : ''}</span>
                    {propss.fromDate && propss.toDate ? (
                        <div className='heading-date'>
                            {propss.fromDate + " — " + propss.toDate}
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className='resume-sub-heading'>
                    <span>{propss.subHeading ? propss.subHeading : ''}</span>
                </div>
                <div className='resume-heading-description'>
                    <span>{propss.description ? propss.description : ''}</span>
                </div>
            </div>
        )
    }

    const resumeBullets = [
        { label: "Education", logoSrc: "education.svg" },
        { label: "Work History", logoSrc: "work-history.svg" },
        { label: "Technology Stack", logoSrc: "programming-skills.svg" },
        { label: "Interests", logoSrc: "interests.svg" },
    ]

    const programmingSkillDetails = [
        { skill: "Kotlin", ratingPercentage: 90 },
        { skill: "JAVA", ratingPercentage: 90 },
        { skill: "Python", ratingPercentage: 70 },
        { skill: "Ruby", ratingPercentage: 70 },
        { skill: "Jetpack Compose", ratingPercentage: 85 },
        { skill: "MVVM", ratingPercentage: 90 },
        { skill: "Modularization", ratingPercentage: 90 },
        { skill: "Clean Architecture", ratingPercentage: 95 },
        { skill: "Coroutines", ratingPercentage: 95 },
        { skill: "Unit Testing", ratingPercentage: 95 },
        { skill: "UI Test", ratingPercentage: 87 },
    ]

    const projectDetails = [
        {
            title: "MoviX",
            duration: {
                fromDate: "2024",
                toDate: "NOW",
            },
            description: "Movie apps",
            subHeading: "Using Kotlin, Jetpack Compose as well as built in modern approach."
        },
        {
            title: "iNotes",
            duration: {
                fromDate: "2023",
                toDate: "NOW",
            },
            description: "Note Taking apps",
            subHeading: "Using Kotlin, Jetpack Compose as well as built in modern approach."
        },
        {
            title: "CardX",
            duration: {
                fromDate: "2024",
                toDate: "NOW",
            },
            description: "Debit Card Preview library",
            subHeading: "Using Kotlin, Jetpack Compose as well as built in modern approach."
        },
    ]

    const resumeDetails = [
        <div className='resume-screen-container' key="education">
            <ResumeHeading
                heading="Universitas Budi Luhur"
                fromDate="2024"
                toDate="Present"
                subHeading="Master of Computer Science"
            />
            <ResumeHeading
                heading="Universitas Islam Syekh Yusuf"
                fromDate="2014"
                toDate="2018"
                subHeading="Bachelor of Technology"
            />
        </div>,
        <div className='resume-screen-container' key="work-experience">
            <ResumeHeading
                heading="KreditPlus Mobile"
                fromDate="2023"
                toDate="2024"
                subHeading="Sr. Android Engineer"
            />
            <ResumeHeading
                heading="Kumparan"
                fromDate="2021"
                toDate="2022"
                subHeading="Android Engineer"
            />
            <ResumeHeading
                heading="Accurate"
                fromDate="2019"
                toDate="2021"
                subHeading="Android Engineer"
            />
            <ResumeHeading
                heading="Qasir.id"
                fromDate="2018"
                toDate="2019"
                subHeading="Jr. Android Engineer"
            />
        </div>,
        <div className='resume-screen-container programming-skills-container'
            key="programming-skills">
            <span className='tech-stacks'>
                <img src="https://img.shields.io/badge/Kotlin-7F52FF?logo=kotlin&logoColor=fff&style=for-the-badge"
                    alt='Kotlin Badge' />
                <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white"
                    alt='JAVA Badge' />
                <img src="https://img.shields.io/badge/Coroutines-4285F4?logo=kotlin&logoColor=fff&style=for-the-badge"
                    alt='Coroutines Badge' />
                <img src="https://img.shields.io/badge/ReactiveX-B7178C?logo=reactivex&logoColor=fff&style=for-the-badge"
                    alt='Rx Badge' />
                <img src="https://img.shields.io/badge/Hilt-B7178C?logo=kotlin&logoColor=fff&style=for-the-badge"
                    alt='Hilt Badge' />
                <img src="https://img.shields.io/badge/Firebase-DD2C00?logo=firebase&logoColor=fff&style=for-the-badge"
                    alt='Firebase Badge' />
                <img src="https://img.shields.io/badge/Jetpack%20Compose-4285F4?logo=jetpackcompose&logoColor=fff&style=for-the-badge"
                    alt='Jetpack Compose Badge' />
                <img src="https://img.shields.io/badge/Koin-B7178C?logo=kotlin&logoColor=fff&style=for-the-badge"
                    alt='Koin Badge' />
                <img src="https://img.shields.io/badge/GraphQL-E10098?logo=graphql&logoColor=fff&style=for-the-badge"
                    alt='GraphQL Badge' />
                <img src="https://img.shields.io/badge/Ruby-CC342D?logo=ruby&logoColor=fff&style=for-the-badge"
                    alt='Ruby Badge' />
                <img src="https://img.shields.io/badge/Dagger2-E10098?logo=kotlin&logoColor=fff&style=for-the-badge"
                    alt='Dagger2 Badge' />
                <img src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=fff&style=for-the-badge"
                    alt='Python Badge' />
                <img src="https://img.shields.io/badge/Material%20Design-757575?logo=materialdesign&logoColor=fff&style=for-the-badge"
                    alt='Material Design Badge' />
                <img src="https://img.shields.io/badge/Retrofit2-172B4D?logo=kotlin&logoColor=fff&style=for-the-badge"
                    alt='Retrofit2 Badge' />
                <img src="https://img.shields.io/badge/OkHTTP-757575?logo=kotlin&logoColor=fff&style=for-the-badge"
                    alt='OkHTTP Badge' />
                <img src="https://img.shields.io/badge/Android%20Studio-3DDC84?logo=androidstudio&logoColor=fff&style=for-the-badge"
                    alt='Android Studio Badge' />
                <img src="https://img.shields.io/badge/Postman-FF6C37?logo=postman&logoColor=fff&style=for-the-badge"
                    alt="Postman Badge" />
                <img src="https://img.shields.io/badge/GitHub%20Actions-2088FF?logo=githubactions&logoColor=fff&style=for-the-badge"
                    alt="GitHub Actions Badge" />
                <img src="https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=fff&style=for-the-badge"
                    alt="GitHub Badge" />
                <img src="https://img.shields.io/badge/Jira-0052CC?logo=jira&logoColor=fff&style=for-the-badge"
                    alt="Jira Badge" />
                <img src="https://img.shields.io/badge/Confluence-172B4D?logo=confluence&logoColor=fff&style=for-the-badge"
                    alt="Confluence Badge" />
                <img src="https://img.shields.io/badge/Fastlane-00F200?logo=fastlane&logoColor=000&style=for-the-badge"
                    alt="Fastlane Badge" />
                <img src="https://img.shields.io/badge/Sonatype-1B1C30?logo=sonatype&logoColor=fff&style=for-the-badge"
                    alt="Sonatype Badge" />
            </span>
        </div>,
        <div className='resume-screen-container' key="interests">
            <ResumeHeading
                heading='Teaching'
                subHeading="Fueling minds with the energy of knowledge and growth."
            />
            <ResumeHeading
                heading='Reading'
                subHeading="Absorbing the energy of stories and knowledge."
            />
            <ResumeHeading
                heading='Skateboard'
                subHeading="Embracing the energic spirit of adventure on every ride."
            />
            <ResumeHeading
                heading='Gaming'
                subHeading="Finding joy and relaxation in every virtual adventure."
            />
        </div>
    ]

    const handleCarousel = (index) => {
        let offsetHeight = 360
        let newCarouselOffset = {
            style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" }
        }
        setCarouselOffSetStyle(newCarouselOffset)
        setSelectedBulletIndex(index)
    }

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div
                onClick={() => handleCarousel(index)}
                className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
                key={index}
            >
                <img className='bullet-logo'
                    src={require(`../../assets/Resume/${bullet.logoSrc}`)}
                    alt='Oops..'
                />
                <span className='bullet-label'>{bullet.label}</span>
            </div>
        ))
    }

    const getResumeScreen = () => {
        return (
            <div style={carouselOffSetStyle.style}
                className='resume-details-carousel'
            >
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        )
    }

    return (
        <div className='resume-container screen-container fade-in'
            id={props.id || ""}>
            <div className='resume-content'>
                <ScreenHeading
                    title="Résumé"
                    subHeading="Strive not to be a success, but rather to be of value." />
            </div>
            <a href='Rio Arjuna - Sr. Android Engineer.pdf' download='Rio Arjuna - Sr. Android Engineer.pdf'>
                <button className='btn highlighted-btn'>Download Résumé</button>
            </a>
            <div className='resume-card'>
                <div className='resume-bullets'>
                    <div className='bullet-container'>
                        <div className='bullet-icons'></div>
                        <div className='bullets'>{getBullets()}</div>
                    </div>
                </div>
                <div className='resume-bullet-details'>{getResumeScreen()}</div>
            </div>
        </div>
    )
}
