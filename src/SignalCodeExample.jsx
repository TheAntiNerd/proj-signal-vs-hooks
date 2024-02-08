import { signal, effect } from "@preact/signals-react";

const count = signal(0); // 👈 create a new signal called 'count' with value = 0

effect(() => {
    // Set up the interval to increment the count every 1 second
    const interval = setInterval(() => {
        count.value = count.value + 1; // The value of count increaments by 1 every second.
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
});

function SignalPage () {
    // Render the count to the DOM like this. 👇
    return <div>
        {count.value}
    </div>
}




export default SignalPage;