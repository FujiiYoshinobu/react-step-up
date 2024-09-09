import { useState } from "react";
import "./App.css";
import { InlineStyle } from "./components/InlineStyle";
import { CssModule } from "./components/CssModules";
import { StyledJsx } from "./components/StyledJsx";
import { StyledComponents } from "./components/StyledComponents";
import { Emotion } from "./components/Emotion";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <InlineStyle />
                <CssModule />
                <StyledJsx />
                <StyledComponents />
                <Emotion />
            </div>
        </>
    );
}

export default App;
