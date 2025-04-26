import { useState } from "react"
import { LendingPage } from "./pages/lending_page/LendingPage"
import { DownloadPage } from "./pages/download_page/DownloadPage"
import { NewsletterPage } from "./pages/newsletter_page/NewsletterPage"


export default function App() {
	const [routerState, setRouterState] = useState("lending") // переключение на заглушки

	const onRouterChange = function(rout) {
		setRouterState(rout)
	}

	const getPage = function() {
		switch (routerState) {
			case ("lending"):
				return <LendingPage onRouterChange={onRouterChange}/>
			case ("download"):
				return <DownloadPage onRouterChange={onRouterChange}/>
			case ("newsletter"):
				return <NewsletterPage onRouterChange={onRouterChange}/>
			default:
				return <LendingPage onRouterChange={onRouterChange}/>
		}
	}

	return (
		<>
			{getPage()}
		</>
	)
}
