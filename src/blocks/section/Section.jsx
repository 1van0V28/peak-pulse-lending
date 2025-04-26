import { useRef, useEffect } from "react"
import "./section.css"


const setupTitleObserver = function(title, sectionId, onNavChange, navState) {
    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("section__title--appearence")
                if (sectionId !== navState) {
                    onNavChange(sectionId)
                }
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


export function Section({
    children,
    id,
    title,
    background,
    onNavChange,
    navState
}) {
    const titleRef = useRef(null)

    useEffect(() => {
        setupTitleObserver(titleRef.current, id, onNavChange, navState)
    })

    return (
        <section className={getSectionStyle(background)} id={id}>
            <h1 className="section__title" ref={titleRef}>{title}</h1>
            {children}
        </section>
    )
}