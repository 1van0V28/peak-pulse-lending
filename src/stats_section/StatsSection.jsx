import { Section } from "../section/Section"
import { Counter } from "./stats_section__counter/Counter"


export function StatsSection() {
    return (
        <Section header={"Пик наших достижений"}>
            <Counter /> {/*список в ряд, для мобилок - в колонку*/}
        </Section>
    )
}