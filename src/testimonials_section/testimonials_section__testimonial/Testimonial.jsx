import man1 from "../../attachments/images/man1.jpg"
import man2 from "../../attachments/images/man2.jpg"
import woman1 from "../../attachments/images/woman1.jpg"
import "./testimonials_section__testimonial.css"


const TESTIMONIALS_LIST = {
    man1: {
        image: man1,
        alt: "Аватар мужчины 1",
        name: "Артём Соколов",
        text: "С PeakPulse я увеличил свою выносливость на 30%! Удобные графики и статистика мотивируют не сдаваться."
    },
    man2: {
        image: man2,
        alt: "Аватар мужчины 2",
        name: "Игорь Ковалёв",
        text: "PeakPulse — мой ежедневный помощник! Отслеживаю шаги и калории, теперь я всегда в форме."
    },
    woman1: {
        image: woman1,
        alt: "Аватар женщины 1",
        name: "Екатерина Новикова",
        text: "Благодаря PeakPulse я сбросила 4 кг за месяц! Люблю следить за прогрессом — это вдохновляет!"
    }
}


export function Testimonial({name, ref}) {
    return (
        <div className="testimonials_section__testimonial" ref={ref}>
            <img className="testimonials_section__image" src={TESTIMONIALS_LIST[name].image} alt={TESTIMONIALS_LIST[name].alt}></img>
            <div>
                <p className="testimonials_section__name">{TESTIMONIALS_LIST[name].name}</p>
                <p className="testimonials_section__text">{TESTIMONIALS_LIST[name].text}</p>
            </div>
        </div>
    )
}