import { Section } from "../section/Section"
import { Screenshot } from "./screenshot_section__screenshot/Screenshot"


export function ScreenshotsSection() {
    return (
        <Section header={"PeakPulse, когда ты на Пике"}>
            <Screenshot /> {/*список-карусель в ряд для адаптивности*/}
        </Section>
    )
}