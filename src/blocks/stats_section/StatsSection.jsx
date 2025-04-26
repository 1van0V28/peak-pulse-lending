import { useState, useRef, useEffect } from "react"
import { Section } from "../section/Section"
import { Counter } from "./stats_section__counter/Counter"
import "./stats_section.css"


const COUNTERS_LIST = [
    "пользователей",
    "тренировок",
    "скачиваний",
    "рейтинг"
]


export function StatsSection({onNavChange, navState}) {
    const [statsState, setStatsState] = useState(false)
    
    const countersRef = useRef([])

    const countersList = COUNTERS_LIST.map((counter, index) => {
        return (
            <Counter key={index + 1} 
            name={counter} 
            isVisible={statsState}
            ref={(el) => {countersRef.current[index] = el}}/>
        )
    })

    useEffect(() => {
        const countersObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !statsState) {
                    setStatsState(true)
                    countersObserver.unobserve(entry.target)
                } else if (statsState) {
                    countersObserver.unobserve(entry.target)
                }
            })
        }, {threshold: 1})

        countersRef.current.forEach((counter) => {
            countersObserver.observe(counter)
        })
    }, [])

    return (
        <Section 
        id={"stats"}
        title={"Пик наших достижений"} 
        background={"to_light"}
        onNavChange={onNavChange}
        navState={navState}>
            <div className="stats_section_counters_container">
                {countersList}
            </div>
        </Section>
    )
}