import "./header__button_download.css"


export function ButtonDownload({onRouterChange}) {
    const onDownloadButtonClick = function() {
        onRouterChange("download")
    }

    return (
        <button className="header__button_download" onClick={onDownloadButtonClick}>Скачать</button>
    )
}