import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Top } from "../pages/Top";
import { Users } from "../pages/Users";
import { DefaultLayout } from "../templates/DefaultLayout";
import { HeaderOnly } from "../templates/HeaderOnly";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <DefaultLayout>
                            <Top />
                        </DefaultLayout>
                    }
                ></Route>
                <Route
                    path="/users"
                    element={
                        <HeaderOnly>
                            <Users />
                        </HeaderOnly>
                    }
                ></Route>
            </Routes>
        </BrowserRouter>
    );
};
