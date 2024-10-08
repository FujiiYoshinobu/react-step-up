/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export const Card = (props) => {
    const { children } = props;
    return <SCard>{children}</SCard>;
};

const SCard = styled.div`
    background-color: white;
    box-shadow: #ddd 0px 0px 4px 2px;
    border-radius: 8px;
    padding: 16px;
`;
