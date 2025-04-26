import activityMonitorImage from "../../attachments/images/activity_monitor.jpg"
import monthlyActivityImage from "../../attachments/images/monthly_activity.jpg"
import profileImage from "../../attachments/images/profile.jpg"
import "./screenshot_section__screenshot.css"


const SCREENSHOTS_LIST = {
    activityMonitorImage: {
        src: activityMonitorImage,
        alt: "Скриншот приложения PeakPulse: экран \"Monthly Activity\" с круговой диаграммой тренировок, прогрессом по бегу, прыжкам и поднятию веса, а также расписанием на месяц.",
        text: "Отслеживай свой прогресс за месяц: бег, прыжки, тренировки с весом. Следи за расписанием и достигай целей с PeakPulse!"
    },
    monthlyActivityImage: {
        src: monthlyActivityImage,
        alt: "Скриншот приложения PeakPulse: экран \"Activity Monitor\" с графиком пульса, данными о шагах, дистанции, калориях, сердечном ритме и давлении.",
        text: "Контролируй пульс, шаги, дистанцию и калории в реальном времени. PeakPulse помогает заботиться о твоем здоровье!"
    },
    profileImage: {
        src: profileImage,
        alt: "Скриншот приложения PeakPulse: экран \"Profile\" с данными о весе, графиком прогресса и характеристиками тела, включая силу и выносливость.",
        text: "Следи за своим весом, силой и выносливостью. Анализируй прогресс и строй тело своей мечты с PeakPulse!"
    }
}


export function Screenshot({name, isReversed, ref}) {
    return (
        <>
            {isReversed ? (
                <div className="screenshot_section__screenshot--reversed">
                    <div className="screenshot_section__image_container" ref={ref}>
                        <img className="screenshot_section__image" src={SCREENSHOTS_LIST[name].src} alt={SCREENSHOTS_LIST[name].alt}></img>
                    </div>
                    <p className="screenshot_section__text">{SCREENSHOTS_LIST[name].text}</p>
                </div>
            ) : (
                <div className="screenshot_section__screenshot">
                    <p className="screenshot_section__text">{SCREENSHOTS_LIST[name].text}</p>
                    <div className="screenshot_section__image_container" ref={ref}>
                        <img className="screenshot_section__image" src={SCREENSHOTS_LIST[name].src} alt={SCREENSHOTS_LIST[name].alt}></img>
                    </div>
                </div>
            )}
        </>
    )
}