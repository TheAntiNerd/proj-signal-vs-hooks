import { effect, signal } from "@preact/signals-react";
import DisplayCount from "./components/DisplayCount";
import UpdateLogs from "./components/UpdateLogs";

const count = signal(0);
effect(() => {
    // Set up the interval to increment the count every 1 second
    const interval = setInterval(() => {
        count.value = count.value + 1;
        console.log(`Count was updated!`);
    }, 1000);


    // Clean up the interval on component unmount
    return () => clearInterval(interval);
});

function SignalPage () {

    return <>
        <div>
            <div className="card-container">
                    <div className="card">
                        <h1>Signals</h1>
                        
                        {/* Component that displays the count */}
                        <DisplayCount count={count} />

                        {/* The component that logs when it updates */}
                        <UpdateLogs />
                    </div>
            </div>
        </div>
    </>
}

export default SignalPage;