import { useState, useCallback, useMemo } from "react";
import "./App.css";
import { ChildArea } from "./ChildArea";

export default function App() {
    const [text, setText] = useState("");
    const [open, setOpen] = useState(false);

    const onChangeText = (e) => setText(e.target.value);

    const onClickOpen = () => setOpen(!open);

    // openが更新されたときに、関数を再生成する
    const onClickClose = useCallback(() => setOpen(false), [open]);
    const tmp = useMemo(() => 1 + 3, []);

    return (
        <div>
            <input value={text} onChange={onChangeText} />
            <br />
            <br />
            <button onClick={onClickOpen}>display</button>
            <ChildArea open={open} onClickClose={onClickClose} />
        </div>
    );
}
