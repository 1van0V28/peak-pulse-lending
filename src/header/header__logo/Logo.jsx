import { LogoIcon } from "../../icons/LogoIcon"


export function Logo() {
    return (
        <div className="header__logo">
            <LogoIcon className={"header__logo_icon"}/>
            <p>
                <span className="header__logo_text--colored">Peak</span>
                Pulse
            </p>
        </div>
    )
}