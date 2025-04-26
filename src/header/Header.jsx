import { Logo } from "./header__logo/Logo"
import { Nav } from "./header__nav/Nav"
import { ButtonDownload } from "./header__button_download/ButtonDownload"
import "./header.css"


export function Header({navState, onRouterChange}) {
    return (
        <header className="header">
            <Logo/>
            <Nav navState={navState}/>
            <ButtonDownload onRouterChange={onRouterChange}/>
        </header>
    )
}