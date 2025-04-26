import { LogoIcon } from "../../../attachments/icons/LogoIcon"
import "./header__logo.css"


export function Logo() {
    const onLogoClick = function() {
        window.location.reload()
    }

    return (
        <div className="header__logo" onClick={onLogoClick}>
            <LogoIcon className={"header__logo_icon"}/>
            <p>
                <span className="header__logo_text--colored">Peak</span>
                Pulse
            </p>
        </div>
    )
}