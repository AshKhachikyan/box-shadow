// Import necessary React components and Material-UI components
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import SliderSizes from "../../feacture/SliderSizes";
import { Button, TextField } from "@mui/material";

// Styled components for custom styling
const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

// Define a functional component called CustomizedAccordions with props
export default function CustomizedAccordions({ state, setState }) {
    // State variable to track the expanded panel
    const [expanded, setExpanded] = React.useState('panel0');

    // Function to handle panel expansion
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    // Render the component
    return (
        <div>
            {/* Map over the shadow data to create accordions */}
            {state.map((values, index) => (
                <Accordion key={values.id} expanded={expanded === 'panel' + index} onChange={handleChange('panel' + index)}>
                    <AccordionSummary aria-controls={"panel1d-content" + index} id={"panel1d-content" + index} >
                        {/* Display the title of the accordion */}
                        <Typography>Shadow #{index + 1}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {/* Details section with sliders, checkboxes, buttons, and color inputs */}
                        <div>
                            <label htmlFor="inset">inset</label>
                            <input
                                type="checkbox"
                                checked={values.inset}
                                id={"inset"}
                                onChange={() => {
                                    // Toggle the 'inset' property in the state
                                    setState(state.map(valRes => {
                                        if (valRes.id === values.id) {
                                            valRes.inset = !valRes.inset;
                                        }
                                        return valRes;
                                    }));
                                }}
                            />
                            {/* Button to delete the shadow */}
                            <Button variant="outlined" onClick={() => {
                                // Remove the shadow from the state
                                setState(state.filter(dataRes => dataRes.id !== values.id));
                            }}>Delete</Button>
                        </div>
                        {/* Slider for Horizontal offset */}
                        <SliderSizes min={-100} max={100} defval={0} label={"Horizontal offset"} setData={function (res) {
                            // Update the 'a' property in the state
                            setState(state.map(resVal => {
                                if (resVal.id === values.id) {
                                    resVal.a = res;
                                }
                                return resVal;
                            }));
                        }}/>
                        {/* Slider for Vertical offset */}
                        <SliderSizes min={-100} max={100} defval={0} label={"Vertical offset"} setData={function (res) {
                            // Update the 'b' property in the state
                            setState(state.map(resVal => {
                                if (resVal.id === values.id) {
                                    resVal.b = res;
                                }
                                return resVal;
                            }));
                        }}/>
                        {/* Slider for Blur radius */}
                        <SliderSizes min={-100} max={100} defval={0} label={"Blur radius"} setData={function (res) {
                            // Update the 'c' property in the state
                            setState(state.map(resVal => {
                                if (resVal.id === values.id) {
                                    resVal.c = res;
                                }
                                return resVal;
                            }));
                        }}/>
                        {/* Slider for Spread radius */}
                        <SliderSizes min={-100} max={100} defval={0} label={"Spread radius"} setData={function (res) {
                            // Update the 'd' property in the state
                            setState(state.map(resVal => {
                                if (resVal.id === values.id) {
                                    resVal.d = res;
                                }
                                return resVal;
                            }));
                        }}/>
                        {/* Color input using input type color */}
                        <label htmlFor="ColorData"></label>
                        <input
                            type="color"
                            value={values.color}
                            id={"ColorData"}
                            onChange={(res) => {
                                // Update the 'color' property in the state
                                setState(state.map(resVal => {
                                    if (resVal.id === values.id) {
                                        resVal.color = res.target.value;
                                    }
                                    return resVal;
                                }));
                            }}
                        />
                        {/* Additional color input using TextField */}
                        <div>
                            <TextField
                                id="standard-basic"
                                onChange={(res) => {
                                    // Update the 'color' property in the state
                                    setState(state.map(resVal => {
                                        if (resVal.id === values.id) {
                                            resVal.color = res.target.value;
                                        }
                                        return resVal;
                                    }));
                                }}
                                value={values.color}
                                label="Standard"
                                variant="standard"
                            />
                        </div>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}
