// Import necessary React components and styling elements from Material-UI
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { useEffect, useRef, useState } from "react";

// Import custom components for size and shadow properties
import SizeIndex from "./proprties";
import ShadowIndex from "./Shadow";

// Define a functional component called ComponentIndex
export default function ComponentIndex() {
    // State variables to store size, shadow, styles, and shadow code
    const [value, setValue] = useState(null);
    const [Shaodwvalue, setShaodwvalue] = useState(null);
    const [styles, setStyles] = useState(null);
    const [codeShadow, setcodeShadow] = useState(null);

    // useEffect to update styles and shadow code when size and shadow values change
    useEffect(() => {
        if (value && Shaodwvalue) {
            // Concatenate shadow values to generate the box-shadow property
            let argValue = '';
            for (let i = 0; i < Shaodwvalue.length; i++) {
                argValue += `${Shaodwvalue[i].color} ${Shaodwvalue[i].a}px ${Shaodwvalue[i].b}px ${Shaodwvalue[i].c}px ${Shaodwvalue[i].d}px`;
                if (Shaodwvalue[i].inset) {
                    argValue += ' inset, ';
                } else {
                    argValue += ", ";
                }
            }
            // Trim and remove the trailing comma from the generated box-shadow value
            argValue = argValue.trim().slice(0, argValue.length - 2);

            // Update state variables with the generated styles and box-shadow code
            setcodeShadow(`box-shadow:${argValue}`);
            setStyles({
                ...value,
                boxShadow: argValue
            });
        }
    }, [value, Shaodwvalue]);

    // Ref to hold the style shadow element
    const StyleShadowElement = useRef(null);

    // Render the component
    return (
        <Box sx={{ flexGrow: 1 }}>
            {/* Grid layout with three columns */}
            <Grid container spacing={2}>
                {/* First column (SizeIndex) */}
                <Grid xs={3}  sm={12}>
                    <ShadowIndex
                        // Callback function to update shadow value state
                        updateState={(res) => {
                            setShaodwvalue(res);
                        }}
                    />
                </Grid>
                {/* Second column (ViewResult) */}
                <Grid xs={6}  sm={12}>
                    <div className="ViewResult">
                        {/* Display the styled element with dynamic styles */}
                        <div style={styles} ref={StyleShadowElement}> </div>
                    </div>
                </Grid>
                {/* Third column (ShadowIndex) */}
                <Grid xs={3} sm={12}>
                    <SizeIndex
                        // Callback function to update size value state
                        updateState={(res) => {
                            setValue(res);
                        }}
                        // Reference to pass the shadow code to SizeIndex
                        refs={codeShadow}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
