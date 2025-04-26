export function NewsletterPage({onRouterChange}) {
    const onReturnButtonClick = function() {
        onRouterChange("lending")
    }

    return (
        <>
            <h1>Страница подтверждения подписки</h1>
            <button onClick={onReturnButtonClick}>Вернуться на главную</button>
        </> 
    )
}