export function Section({children, header}) {
    return (
        <section>
            <h1>{header}</h1>
            {children}
        </section>
    )
}