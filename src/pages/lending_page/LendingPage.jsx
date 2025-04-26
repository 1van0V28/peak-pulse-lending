import { useState } from "react"
import { Header } from "../../header/Header"
import { HeroSection } from "../../hero_section/HeroSection"
import { FeaturesSection } from "../../features_section/FeaturesSection"
import { ScreenshotsSection } from "../../screenshots_section/ScreenshotsSection"
import { TestimonialsSection } from "../../testimonials_section/TestimonialsSection"
import { StatsSection } from "../../stats_section/StatsSection"
import { NewsletterSection } from "../../newsletter_section/NewsletterSection"
import { Footer } from "../../blocks/footer/Footer"


export function LendingPage({onRouterChange}) {
    const [navState, setNavState] = useState("")

    const onNavChange = function(linkId) {
        setNavState(linkId)
    }

    return (
        <>
            <Header navState={navState} onRouterChange={onRouterChange}/>
            <HeroSection onNavChange={onNavChange}/>
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