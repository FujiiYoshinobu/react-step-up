import React from "react";
import { Link } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export const Header = () => {
    return (
        <SHeader>
            <SLink to="/">HOME</SLink>
            <SLink to="/users">USERS</SLink>
        </SHeader>
    );
};

const SHeader = styled.header`
    background-color: #11999e;
    text-align: center;
    padding: 8px 0;
`;

const SLink = styled(Link)`
    margin: 0 8px;
`;
