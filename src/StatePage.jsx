import { useEffect, useState } from "react";
import DisplayCount from "./components/DisplayCount";
import UpdateLogs from "./components/UpdateLogs";

function StatePage () {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Set up the interval to increment the count every 1 second
        const interval = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);
    
        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, []); // Empty dependency array means this effect runs only once on mount

    return <>
        <div>
            <div className="card-container">
                    <div className="card">
                        <h1>React State + Hooks</h1>
                        
                        {/* Component that displays the count */}
                        <DisplayCount count={count} />

                        {/* The component that logs when it updates */}
                        <UpdateLogs />
                    </div>
            </div>
        </div>
    </>
}

export default StatePage;