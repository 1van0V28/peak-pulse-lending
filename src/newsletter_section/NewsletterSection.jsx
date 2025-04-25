import { Section } from "../section/Section"
import { NewsletterForm } from "./newsletter_section__newsletter_form/NewsletterForm"
import "./newsletter_section.css"


export function NewsletterSection() {
    return (
        <Section title={"Подпишись на новости"} background={"to_dark"}>
            <h2 className="newsletter_section__subtitle">Получай советы по тренировкам и новости PeakPulse прямо на почту!</h2>
            <NewsletterForm/>
        </Section>
    )
}