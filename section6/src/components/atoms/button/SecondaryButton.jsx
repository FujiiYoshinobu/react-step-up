/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
    const { children } = props;
    return <SButton>{children}</SButton>;
};

const SButton = styled(BaseButton)`
    background-color: #11999e;
`;
