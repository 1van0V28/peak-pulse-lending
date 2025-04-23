import "./header__nav.css"


const LINKS_LIST = [
    ["Преимущества", "#features"],
    ["Приложение", "#screenshots"],
    ["Отзывы", "#testimonials"],
    ["Достижения", "stats"],
]


export function Nav() {
    const linksList = LINKS_LIST.map((link, index) => {
        return (
            <li key={index + 1}>
                <a className="header__link" href={link[1]}>{link[0]}</a> 
            </li>
        )
    })

    return (
        <nav>
            <ul className="header__container_links">
                {linksList}
            </ul>
        </nav>
    )
}