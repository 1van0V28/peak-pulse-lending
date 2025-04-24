import { useRef, useEffect } from "react"
import "./section.css"


const setupTitleObserver = function(title) {
    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("section__title--appearence")
                titleObserver.unobserve(entry.target)
            }
        })
    }, {threshold: 1})

    titleObserver.observe(title)
}


const getSectionStyle = function(background) {
    switch (background) {
        case ("to_light"):
            return "section section--to_light"
        case ("to_dark"):
            return "section section--to_dark"
        default:
            return "section section--to_dark"
    }
}


export function Section({children, title, background}) {
    const titleRef = useRef(null)

    useEffect(() => {
        setupTitleObserver(titleRef.current)
    })

    return (
        <section className={getSectionStyle(background)}>
            <h1 className="section__title" ref={titleRef}>{title}</h1>
            {children}
        </section>
    )
}