export function DownloadPage({onRouterChange}) {
    return (
        <>
            <h1>Страница загрузки приложения</h1>
            <button onClick={() => {onRouterChange("lending")}}>Вернуться на главную</button>
        </>
        
    )
}