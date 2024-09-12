import { useLocation, useNavigate } from "react-router-dom";
export const Page1DetailA = () => {
    const { state } = useLocation();
    console.log(state);
    const navigate = useNavigate();
    return (
        <div>
            <h1>Page 1 DetailA</h1>
            <button onClick={() => navigate(-1)}>back</button>
        </div>
    );
};
