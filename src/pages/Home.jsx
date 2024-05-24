import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Home() {

    const navigate = useNavigate();
    const [count, setCount] = useState(5);
    const intervalRef = useRef(null);

    useEffect(() => {

        startCountdown();

        return () => clearInterval(intervalRef.current)

    })

    const startCountdown = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount <= 1) {
                    clearInterval(intervalRef.current);
                    navigate('/login');
                    return 0;
                }
                return prevCount - 1;
            });
        }, 1000);
    }

    const handleRestart = () => {
        setCount(5);
        startCountdown();
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Great! Now you have <span className={count === 5 ? "text-green-700" : "text-black"}>{count}</span>s to click the button
                    <br />
                    by the end of this instruction to stop the timer.
                </h2>
                <div className="flex justify-center mt-4">
                    <button onClick={handleRestart} className="bg-[#000000] hover:bg-[#505050] text-white font-bold py-2 px-4 me-4 rounded">
                        Restart
                    </button>
                    <button onClick={() => window.location.reload()} className="bg-[#000000] hover:bg-[#505050] text-white font-bold py-2 px-4 rounded">
                        Refresh
                    </button>
                </div>
            </div>
        </>
    )
}
