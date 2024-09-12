import { Home } from "../Home.jsx";
import { Page1 } from "../Page1.jsx";
import { Page2 } from "../Page2.jsx";
import { Page1DetailA } from "../Page1DetailA.jsx";
import { Page1DetailB } from "../Page1DetailB.jsx";
import { Route, Routes } from "react-router-dom";
import { UrlParameter } from "../UrlParameter.jsx";
import { Page404 } from "../Page404.jsx";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="page1" element={<Page1 />}>
                <Route path="detailA" element={<Page1DetailA />} />
                <Route path="detailB" element={<Page1DetailB />} />
            </Route>
            <Route path="page2" element={<Page2 />}>
                <Route path=":id" element={UrlParameter} />
            </Route>
            <Route path="*" element={<Page404 />}></Route>
        </Routes>
    );
};
