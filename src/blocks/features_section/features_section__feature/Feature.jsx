import "./features_section__feature.css"


export function Feature({
    children, 
    text, 
    animationDelay, 
    featureRef
}) {

    return (
        <div className="features_section__feature" style={{animationDelay: `${animationDelay}s`}} ref={featureRef}>
            {children}
            <p className="features_section__feature_text">{text}</p>
        </div>
    )
}