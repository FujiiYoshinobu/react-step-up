import { memo } from "react";

export const ChildArea = memo((props) => {
    const { open, onClickClose } = props;
    const data = [...Array(500).keys()];
    data.forEach(() => {
        console.log("ChildAreaがレンダリングされた");
    });
    return (
        <>
            {open ? (
                <div>
                    <p>child component</p>
                    <button onClick={onClickClose}>close</button>
                </div>
            ) : null}
        </>
    );
});
