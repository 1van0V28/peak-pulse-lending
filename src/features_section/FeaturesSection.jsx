import { Section } from "../section/Section"
import { Feature } from "./features_section__feature/Feature"


export function FeaturesSection() {
    return (
        <Section header={"Почему PeakPulse?"}>
            <Feature /> {/*Отображать списком, обёрнутым в flex*/}
        </Section>
    )
}