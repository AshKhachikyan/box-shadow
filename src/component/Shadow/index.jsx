// Import necessary React components and Material-UI components
import React, { useEffect, useState } from 'react';
import { shadowData } from "../../data";
import SliderSizes from "../../feacture/SliderSizes";
import { Button, TextField } from "@mui/material";
import CustomizedAccordions from "../Acordation/AcordationIndex";

// Define a functional component called ShadowIndex with props
function ShadowIndex(props) {
    // State variable to store shadow data
    const [state, setState] = useState(shadowData);

    // useEffect to update parent component's state when the local state changes
    useEffect(() => {
        props.updateState(state);
    }, [state]);

    // Render the component
    return (
        <div>
            {/* Heading */}
            <h2>ShadowIndex</h2>

            {/* Button to add a new shadow */}
            <Button variant="outlined" onClick={() => {
                // Add a new shadow to the state with default values
                setState([...state, {
                    id: Date.now(),
                    a: 1,
                    b: 2,
                    c: 4,
                    d: 6,
                    color: '#000000'
                }]);
            }}>Add new Shadow</Button>

            {/* Customized accordions to display and edit shadow data */}
            <CustomizedAccordions
                state={state}
                setState={function (res) {
                    // Update the local state with the modified shadow data
                    setState(res);
                }}
            />
        </div>
    );
}

// Export the ShadowIndex component as the default export
export default ShadowIndex;
