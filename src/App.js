import { useState } from "react"
import { Header } from "./header/Header"
import { HeroSection } from "./hero_section/HeroSection"
import { FeaturesSection } from "./features_section/FeaturesSection"
import { ScreenshotsSection } from "./screenshots_section/ScreenshotsSection"
import { TestimonialsSection } from "./testimonials_section/TestimonialsSection"
import { StatsSection } from "./stats_section/StatsSection"
import { NewsletterSection } from "./newsletter_section/NewsletterSection"
import "./App.css"


export default function App() {
	const [navState, setNavState] = useState("")
	return (
		<>
			<Header/>
			<HeroSection/>
			<FeaturesSection/>
			<ScreenshotsSection/>
			<TestimonialsSection/>
			<StatsSection/>
			<NewsletterSection/>
		</>
	)
}
