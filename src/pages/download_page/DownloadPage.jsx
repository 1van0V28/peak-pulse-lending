export function DownloadPage({onRouterChange}) {
    const onReturnButtonClick = function() {
        onRouterChange("lending")
    }

    return (
        <>
            <h1>Страница загрузки приложения</h1>
            <button onClick={onReturnButtonClick}>Вернуться на главную</button>
        </>
        
    )
}