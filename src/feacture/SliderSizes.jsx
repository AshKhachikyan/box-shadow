// Import necessary React components and styling elements from Material-UI
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {Typography} from "@mui/material";

// Define a functional component called SliderSizes with some default props
export default function SliderSizes({min=1,max=300,defval=150,label='property',setData}) {

    // Event handler for slider value change
    const handleChange = (event, newValue) => {
        // Check if the new value is a number, then update the data using the provided setData function
        if (typeof newValue === 'number') {
            setData(newValue)
        }
    };

    // Render the component
    return (
        // Container with a fixed width using Material-UI Box component
        <Box sx={{ width: 300 }}>
            {/* Display a label above the slider */}
            <Typography gutterBottom>{label}</Typography>

            {/* Slider component with specified props */}
            <Slider
                defaultValue={defval}
                min={min}
                step={1}
                max={max}
                aria-label="Default"
                valueLabelDisplay="auto"
                onChange={handleChange}
            />
        </Box>
    );
}
