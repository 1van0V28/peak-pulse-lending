import { useState } from "react"
import "./newsletter_section__newsletter_form.css"


const getInputStyle = function(name, state) {
    let inputStyle = "newsletter_section__input"
    if (state[name]) {
        inputStyle += " newsletter_section__input--filled"
    }

    return inputStyle
}


const isFulfilled = function(state) {
    for (let value of Object.values(state)) {
        if (!value) {
            return false
        }
    }

    return true
}


export function NewsletterForm({onRouterChange}) {
    const [formState, setFormState] = useState({
        email: "",
        name: "",
        acception: false,
    })

    const handleInputChange = function(event) {
        const {name, value, type, checked} = event.target
        if (type === "email" || type === "text") {
            setFormState({...formState, [name]: value})
        } else if (type === "checkbox") {
            setFormState({...formState, [name]: checked})
        }
    }

    return (
        <form className="newsletter_section__newsletter_form" action={() => {onRouterChange("newsletter")}}>
            <input className={getInputStyle("email", formState)} 
            type="email"
            name="email"
            placeholder="Твой email" 
            value={formState.email}
            onChange={handleInputChange}>
            </input>

            <input className={getInputStyle("name", formState)} 
            type="text" 
            name="name"
            placeholder="John Doe" 
            value={formState.name}
            onChange={handleInputChange}>
            </input>

            <label className="newsletter_section__acception">
                <input className="newsletter_section__checkbox" 
                type="checkbox" 
                name="acception"
                onChange={handleInputChange}>
                </input>
                Я согласен(на) получать информационную рассылку
            </label>

            {isFulfilled(formState) ?
            <input className="newsletter_section__submit newsletter_section__submit--active" type="submit" value="Подписаться"></input>
            :
            <input className="newsletter_section__submit" type="submit" value="Подписаться" disabled></input>
            }
        </form>
    )
}