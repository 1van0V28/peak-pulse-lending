import { Section } from "../section/Section"
import { NewsletterForm } from "./newsletter_section__newsletter_form/NewsletterForm"
import "./newsletter_section.css"


export function NewsletterSection({onRouterChange, onNavChange, navState}) {
    return (
        <Section 
        id="newsletter" 
        title={"Подпишись на новости"} 
        background={"to_dark"}
        onNavChange={onNavChange}
        navState={navState}>
            <h2 className="newsletter_section__subtitle">Получай советы по тренировкам и новости PeakPulse прямо на почту!</h2>
            <NewsletterForm onRouterChange={onRouterChange}/>
        </Section>
    )
}