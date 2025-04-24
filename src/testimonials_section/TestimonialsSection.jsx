import { useRef, useEffect } from "react"
import { Section } from "../section/Section"
import { Testimonial } from "./testimonials_section__testimonial/Testimonial"
import "./testimonials_section.css"


const TESTIMONIALS_LIST = [
    "man1",
    "woman1",
    "man2"
]


const setupTestimonialsObserver = function(testimonials) {
    const testimonialsObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("testimonials_section__testimonial--appearence")
                testimonialsObserver.unobserve(entry.target)
            }
        })
    }, {threshold: 1})

    testimonials.forEach((testimonial) => {
        testimonialsObserver.observe(testimonial)
    })
}


export function TestimonialsSection() {
    const testimonialsRef = useRef([])

    const testimonialsList = TESTIMONIALS_LIST.map((testimonial, index) => {
        return (
            <Testimonial key={index + 1} name={testimonial} ref={(el) => {testimonialsRef.current[index] = el}}/>
        )
    })

    useEffect(() => {
        setupTestimonialsObserver(testimonialsRef.current)
    }, [])

    return (
        <Section title={"От тех, кто на Пике"} background={"to_dark"}>
            <div className="testimonials_section__testimonials_container">
                {testimonialsList}
            </div>
        </Section>
    )
}