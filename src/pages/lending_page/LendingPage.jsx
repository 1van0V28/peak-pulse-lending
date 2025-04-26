import { useState } from "react"
import { Header } from "../../blocks/header/Header"
import { HeroSection } from "../../blocks/hero_section/HeroSection"
import { FeaturesSection } from "../../blocks/features_section/FeaturesSection"
import { ScreenshotsSection } from "../../blocks/screenshots_section/ScreenshotsSection"
import { TestimonialsSection } from "../../blocks/testimonials_section/TestimonialsSection"
import { StatsSection } from "../../blocks/stats_section/StatsSection"
import { NewsletterSection } from "../../blocks/newsletter_section/NewsletterSection"
import { Footer } from "../../blocks/footer/Footer"


export function LendingPage({onRouterChange}) {
    const [navState, setNavState] = useState("")

    const onNavChange = function(linkId) {
        setNavState(linkId)
    }

    return (
        <>
            <Header 
            onRouterChange={onRouterChange}
            navState={navState} />
            <HeroSection 
            onNavChange={onNavChange}/>
            <FeaturesSection 
            onNavChange={onNavChange} 
            navState={navState}/>
            <ScreenshotsSection 
            onNavChange={onNavChange} 
            navState={navState}/>
            <TestimonialsSection 
            onNavChange={onNavChange} 
            navState={navState}/>
            <StatsSection 
            onNavChange={onNavChange} 
            navState={navState}/>
            <NewsletterSection 
            onRouterChange={onRouterChange}
            onNavChange={onNavChange} 
            navState={navState}/>
            <Footer/>
        </>
    )
}