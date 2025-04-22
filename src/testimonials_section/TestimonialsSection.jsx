import { Section } from "../section/Section"
import { Testimonial } from "./testimonials_section__testimonial/Testimonial"


export function TestimonialsSection() {
    return (
        <Section header={"От тех, кто на Пике"}>
            <Testimonial /> {/*отображать списком*/}
        </Section>
    )
}