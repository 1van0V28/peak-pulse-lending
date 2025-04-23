import { useRef, useEffect } from "react"
import { Feature } from "./features_section__feature/Feature"
import { MonitorHeartIcon } from "../icons/MonitorHeartIcon"
import { FootPrintIcon } from "../icons/FootPrintIcon"
import { FitnessCenterIcon } from "../icons/FitnessCenterIcon"
import { DeviceWearablesIcon } from "../icons/DeviceWearablesIcon"
import "./features_section.css"


const FEATURES_LIST = [
    [<MonitorHeartIcon className="features_section__icon"/>, "Точный мониторинг пульса в реальном времени."],
    [<FootPrintIcon className="features_section__icon"/>, "Подсчет шагов и дистанции с высокой точностью."],
    [<FitnessCenterIcon className="features_section__icon"/>, "Персонализированные планы тренировок для твоих целей."],
    [<DeviceWearablesIcon className="features_section__icon"/>, "Интеграция с умными часами и приложениями."]
]


const setupTitleObserver = function(title) {
    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("features_section__title--appearence")
                titleObserver.unobserve(entry.target)
            }
        })
    }, {threshold: 1})

    titleObserver.observe(title)
}


const setupFeaturesObserver = function(featuresList) {
    const featuresObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            const animationDelay = index * 1
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("features_section__feature--appearence")
                }, animationDelay * 1000)
                featuresObserver.unobserve(entry.target)
            }
        })
    })

    featuresList.forEach((feature) => {
        featuresObserver.observe(feature)
    })
}


export function FeaturesSection() {
    const titleRef = useRef(null)
    const featuresRef = useRef([])

    const featuresList = FEATURES_LIST.map((feature, index) => {
        const animationDelay = index * 1
        return (
            <Feature key={index + 1} 
            text={feature[1]} 
            animationDelay={animationDelay}
            featureRef={(el) => {featuresRef.current[index] = el}}>
                {feature[0]}
            </Feature>
        )
    })

    useEffect(() => {
        setupTitleObserver(titleRef.current)
        setupFeaturesObserver(featuresRef.current)
    }, [])

    return (
        <section className="features_section">
            <h1 className="features_section__title" ref={titleRef}>Почему PeakPulse?</h1>
            <div className="features_section__features_container">
                {featuresList}
            </div>
        </section>
    )
}