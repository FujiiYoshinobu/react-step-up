/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
    const containerStyle = css`
        border: solid 2px red;
        border-radius: 20px;
        padding: 8px;
        margin: 8px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    `;
    const titleStyle = css({
        margin: 0,
        color: "white",
    });

    const SButton = styled.button`
        background-color: white;
    `;

    return (
        <div css={containerStyle}>
            <p css={titleStyle}>- Emotion -</p>
            <button>FIGHT</button>
        </div>
    );
};
