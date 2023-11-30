import './App.css';
import SizeIndex from "./component/proprties";
import {Container} from "@mui/material";
import ComponentIndex from "./component";
import YourComponent from "./Mytest";

function App() {
    return (
        <div className="App">

            <Container maxWidth="xl">
                <ComponentIndex />

            {/*    <SizeIndex/>*/}

            </Container>
        </div>
    );
}

export default App;
