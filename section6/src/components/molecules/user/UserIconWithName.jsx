/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

import React, { useContext } from "react";
import { UserContext } from "../../../providers/UserProvider";

export const UserIconWithName = (props) => {
    const { image, name } = props;
    const { userInfo } = useContext(UserContext);
    const isAdmin = userInfo ? userInfo.isAdmin : false;
    return (
        <SContainer>
            <SImg height={160} width={160} alt="プロフィール" src={image} />
            {isAdmin && <SEdit>編集</SEdit>}
            <SName>{name}</SName>
        </SContainer>
    );
};

const SContainer = styled.div`
    text-align: center;
`;

const SImg = styled.img`
    border-radius: 50%;
`;

const SName = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    color: #40514e;
`;

const SEdit = styled.p`
    font-size: 18px;
    text-decoration: underline;
    color: blue;
`;
