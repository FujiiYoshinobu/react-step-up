import { useState } from "react";
import "./App.css";
import { ChildArea } from "./ChildArea";

export default function App() {
    const [text, setText] = useState("");
    const [open, setOpen] = useState(false);

    const onChangeText = (e) => setText(e.target.value);

    const onClickOpen = () => setOpen(!open);

    return (
        <div>
            <input value={text} onChange={onChangeText} />
            <br />
            <br />
            <button onClick={onClickOpen}>display</button>
            <ChildArea open={open} />
        </div>
    );
}
