import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Home() {

    const navigate = useNavigate();
    const [count, setCount] = useState(5);

    useEffect(() => {

        const intervalId = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount < 1) {
                    clearInterval(intervalId);
                    navigate("/login");
                }
                return prevCount - 1;
            });
        }, 1000);

        return () => clearInterval(intervalId)

    }, [navigate])

    const handleLogout = () => {
        navigate("/login")
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Great! Now you have {count}s to click the button
                    <br />
                    by the end of this instruction to stop the timer.
                </h2>
                <div className="flex justify-center mt-4">
                    <button onClick={handleLogout} className="bg-[#000000] hover:bg-[#505050] text-white font-bold py-2 px-4 rounded">
                        Button
                    </button>
                </div>
            </div>
        </>
    )
}
