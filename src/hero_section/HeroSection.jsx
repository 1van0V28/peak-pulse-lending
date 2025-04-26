import { useRef, useEffect } from "react"
import "./hero_section.css"


const SUBTITLES_LIST = [
    "Отслеживай, ",
    "анализируй, ",
    "побеждай!"
]


const setupSectionObserver = function(title, onNavChange) {
    const sectionObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            onNavChange("")
        }
    }, {rootMargin: "-20% 0% 0% 0%"})

    sectionObserver.observe(title)
}


export function HeroSection({onNavChange}) {
    const titleRef = useRef(null)

    const subtitlesList = SUBTITLES_LIST.map((subtitle, index) => {
        const animationDelay = 2 + 1 * index;  // зависит от --time_animation_fade_in
        return (
            <span key={index + 1} className="hero_section__subtitle_element" style={{animationDelay: `${animationDelay}s`}}>{subtitle}</span>
        )
    })

    useEffect(() => {
        setupSectionObserver(titleRef.current, onNavChange)
    })

    return (
        <section className="hero_section">
            <h1 className="hero_section__title" ref={titleRef}>
                <span className="hero_section__title--colored">Peak</span>
                Pulse: Пульс твоих побед</h1>
            <h2 className="hero_section__subtitle">
                {subtitlesList}
            </h2>
        </section>
    )
}