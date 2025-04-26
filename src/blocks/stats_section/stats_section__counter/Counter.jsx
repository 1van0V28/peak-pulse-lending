import { useState, useEffect } from "react"
import "./stats_section__counter.css"


const COUNTERS_LIST = {
    "пользователей": {
        maxCount: 500,
        text: "K+"
    },
    "тренировок": {
        maxCount: 10,
        text: "M+"
    },
    "скачиваний": {
        maxCount: 1000,
        text: "K+"
    },
    "рейтинг": {
        maxCount: 4.8,
        text: "/5"
    }
}


const getCounterParams = function(maxCount) {
    maxCount = String(maxCount)
    if (maxCount.includes(".")) {
        const pointIndex = maxCount.indexOf(".")
        const numberOfDigits = maxCount.slice(pointIndex + 1).length
        return {
            increment: 1 / (Math.pow(10, numberOfDigits)),
            incrementTime: ((3 / Number(maxCount)) * 1000) / Math.pow(10, numberOfDigits)
        }
    }

    return {
        increment: 1,
        incrementTime: (3 / Number(maxCount)) * 1000,
    }
}


export function Counter({name, isVisible, ref}) {
    const [counterState, setCounterState] = useState(0)

    useEffect(() => {
        let startCount = 0
        const maxCount = COUNTERS_LIST[name].maxCount
        const counterParams = getCounterParams(maxCount)

        const timer = setInterval(() => {
            const newStartCount = String(startCount + counterParams.increment).slice(0, String(maxCount).length)
            startCount += counterParams.increment
            setCounterState(Number(newStartCount))
            if (startCount >= maxCount) {
                clearInterval(timer)
            }
        }, counterParams.incrementTime)
    }, [isVisible])

    return (
        <div className="stats_section__counter" ref={ref}>
            <p className="stats_section__number">{`${counterState + COUNTERS_LIST[name].text}`}</p>
            <p className="stats_section__text">{name}</p>
        </div>
    )
}