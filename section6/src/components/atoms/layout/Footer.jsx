import React from "react";
import { Link } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export const Footer = () => {
    return <SFooter>&copy; 2024 test Inc.</SFooter>;
};

const SFooter = styled.header`
    background-color: #11999e;
    text-align: center;
    padding: 8px 0;
    color: white;
    position: fixed;
    width: 100%;
    bottom: 0;
`;
