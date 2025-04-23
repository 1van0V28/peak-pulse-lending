import "./hero_section.css"


const SUBTITLES_LIST = [
    "Отслеживай, ",
    "анализируй, ",
    "побеждай!"
]


export function HeroSection() {
    const subtitlesList = SUBTITLES_LIST.map((subtitle, index) => {
        const animationDelay = 2 + 1 * index;  // зависит от --time_animation_fade_in
        return (
            <span key={index + 1} className="hero_section__subtitle_element" style={{animationDelay: `${animationDelay}s`}}>{subtitle}</span>
        )
    })

    return (
        <section className="hero_section">
            <h1 className="hero_section__title">
                <span className="hero_section__title--colored">Peak</span>
                Pulse: Пульс твоих побед</h1>
            <h2 className="hero_section__subtitle">
                {subtitlesList}
            </h2>
        </section>
    )
}