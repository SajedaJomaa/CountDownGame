import { useState,useRef } from "react";
import ResultModel from "./ResultModel.jsx";


export default function TimerChallenge({ title, targetTime }) {

    const timer = useRef();
    const dialog = useRef();



    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        setTimeRemaining(targetTime * 1000);
        dialog.current.open();
    }
    function handelReset() {
        setTimeRemaining(targetTime * 1000);

    }

    function handelStart() {
        timer.current = setInterval(() => {
            setTimeRemaining( prevTimeRemaining => prevTimeRemaining - 10 );
        }, 10);
    }
    
    function handelStop() {
        dialog.current.open();
        clearInterval(timer.current);
    }
    return (
        <>
            <ResultModel
                ref={dialog}
                targetTime={targetTime}
                remainingTime={timeRemaining}
                onReset={handelReset}
            />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                {targetTime} second{targetTime>1? 's':''}
                </p>
                <p>
                    <button
                        onClick={timerIsActive ? handelStop : handelStart}>
                        {timerIsActive ? 'Stop ' : 'Start '}
                        Challange
                    </button>
                </p>
                <p
                    className={timerIsActive ? "active" : undefined}>
                    {timerIsActive ? "Time is running..." : "Timer inactive"}
                </p>
            </section>
            
            </>);
}