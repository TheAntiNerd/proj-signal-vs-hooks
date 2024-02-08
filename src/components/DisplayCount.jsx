
/**
 * Props for DisplayCount
 * @typedef DisplayCountProps
 * @property {number} count
 */

/**
 * Displays the count
 * @param {DisplayCountProps} props 
 * @returns 
 */
function DisplayCount (props) {
    // console.log(`Count was updated!`);
    
    return <>
        <div className="count-container">
            <p>Count</p>
            <div className="count-value">{props.count}</div>
        </div>
    </>;
}

export default DisplayCount;