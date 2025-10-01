import React from 'react'
import styles from './HowitWorks.module.css'
import HowItWorksSteps from '../../components/HowItWorksSteps/HowItWorksSteps'
import { stepsData } from '../../config/howItWorksStepsData'
import Lottie from 'lottie-react'
import lines from '../../assets/animations/lineas.json'

export default function HowItWorks() {
    return (
        <div className={styles.howItWorksMainDiv}>
            <div className={styles.lottieLinesDiv}>
                <Lottie animationData={lines} className={styles.lottieFullWidth} />
            </div>

            <div className={styles.HowItWorksDiv}>

                <h1 >Our Simple 4-Step Hiring Process</h1>

                <h2>We believe recruitment should be seamless. That’s why we’ve built a transparent, easy-to-follow process that ensures you find the right candidate, faster.</h2>

                <HowItWorksSteps
                    steps={stepsData}
                />

            </div>
        </div>
    )
}