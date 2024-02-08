import generateRandomString from "../utils/generateRandomString";

function UpdateLogs () {
    console.log(`This update was unnecessary!`);

    // Generate a random string
    const string = generateRandomString(12);

    return <>
        <div className={`update-logs-container`}>
            <p>Random string - {string}</p>
        </div>
    </>
}

export default UpdateLogs;