// Import necessary React components and Material-UI components
import React, { useEffect, useState } from 'react';
import SliderSizes from "../../feacture/SliderSizes";
import { Button } from "@mui/material";

// Define a functional component called SizeIndex with props
function SizeIndex(props) {
    // State variable to store size-related properties
    const [value, setValue] = useState({
        width: '250px',
        height: '250px',
        border: '1px solid black',
        borderRadius: '0',
    });

    // State variable to toggle the display of code
    const [showCodeState, setShowCodeState] = useState(false);

    // Function to toggle the display of code
    function showcode() {
        setShowCodeState(!showCodeState);
    }

    // useEffect to update parent component's state when the local state changes
    useEffect(() => {
        props.updateState(value);
    }, [value]);

    // Render the component
    return (
        <>
            {/* Container for size-related sliders */}
            <div className={"sizePageFeacture"}>
                {/* Slider for width property */}
                <SliderSizes min={1} max={450} defval={250} label={"width"} setData={function (res) {
                    setValue({
                        ...value,
                        width: res + 'px'
                    });
                }}/>

                {/* Slider for height property */}
                <SliderSizes min={1} max={450} defval={250} label={"Height"} setData={function (res) {
                    setValue({
                        ...value,
                        height: res + 'px'
                    });
                }}/>

                {/* Slider for border property */}
                <SliderSizes min={1} max={10} defval={1} label={"Border"} setData={function (res) {
                    setValue({
                        ...value,
                        border: res + 'px solid black'
                    });
                }}/>

                {/* Slider for border-radius property */}
                <SliderSizes min={10} max={150} defval={10} label={"Radius"} setData={function (res) {
                    setValue({
                        ...value,
                        borderRadius: res + 'px'
                    });
                }}/>
            </div>

            {/* Button to toggle the display of code */}
            <Button variant="outlined" onClick={showcode}>
                {showCodeState ? "hide code" : "show code"}
            </Button>

            {/* Display the code when showCodeState is true */}
            {showCodeState && (
                <div>
                    {props.refs}
                </div>
            )}
        </>
    );
}

// Export the SizeIndex component as the default export
export default SizeIndex;
