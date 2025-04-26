export function NewsletterPage({onRouterChange}) {
    return (
        <>
            <h1>Страница подтверждения подписки</h1>
            <button onClick={() => {onRouterChange("lending")}}>Вернуться на главную</button>
        </> 
    )
}