import "./header__button_download.css"


export function ButtonDownload({onRouterChange}) {
    return (
        <button className="header__button_download" onClick={() => {onRouterChange("download")}}>Скачать</button>
    )
}