import { useRef, useEffect } from "react"
import { Section } from "../section/Section"
import { Screenshot } from "./screenshot_section__screenshot/Screenshot"


const SCREENSHOTS_LIST = [
    "activityMonitorImage",
    "monthlyActivityImage",
    "profileImage"
]


export function ScreenshotsSection({onNavChange, navState}) {
    const imagesRef = useRef([])

    const screenshotsList = SCREENSHOTS_LIST.map((screenshot, index) => {
        return (
            <Screenshot key={index + 1} 
            name={screenshot}
            isReversed={(index % 2) === 0}
            ref={(el) => {imagesRef.current[index] = el}}/>
        )
    })

    useEffect(() => {
        window.addEventListener(("scroll"), () => {
            const windowHeight = window.innerHeight

            imagesRef.current.forEach((image) => {
                if (!image) return
                
                const imageRect = image.getBoundingClientRect()
                const imageCenter = imageRect.top + imageRect.height / 2
                const viewportCenter = windowHeight / 2
                const distanceFromCenter = Math.abs(imageCenter - viewportCenter)

                let scale
                if (distanceFromCenter < viewportCenter) {
                    scale = 1 + ((1.1 - 1) * (1 - distanceFromCenter / viewportCenter));
                    
                } else {
                    scale = 1
                }
                
                image.style.transform = `scale(${scale})`
            })
        })
    }, [])

    return (
        <Section 
        title={"PeakPulse, когда ты на Пике"} 
        background={"to_light"}
        id={"screenshots"}
        onNavChange={onNavChange}
        navState={navState}>
            {screenshotsList}
        </Section>
    )
}