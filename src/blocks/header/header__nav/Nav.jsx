import "./header__nav.css"


const LINKS_LIST = [
    ["Преимущества", "#features"],
    ["Приложение", "#screenshots"],
    ["Отзывы", "#testimonials"],
    ["Достижения", "#stats"],
    ["Новости", "#newsletter"]
]


const getLinkStyle = function(navState, linkId) {
    let linkStyle = "header__link"
    if (navState === linkId) {
        linkStyle += " header__link--active"
    }

    return linkStyle
}


export function Nav({navState}) {
    const linksList = LINKS_LIST.map((link, index) => {
        return (
            <li key={index + 1}>
                <a className={getLinkStyle(navState, link[1].slice(1))} href={link[1]}>{link[0]}</a> 
            </li>
        )
    })

    return (
        <nav className="header__nav">
            <ul className="header__container_links">
                {linksList}
            </ul>
        </nav>
    )
}