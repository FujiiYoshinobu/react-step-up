import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/api/user";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
    const navigate = useNavigate();
    const [loading, setloading] = useState(false);
    const login = useCallback((id: string) => {
        setloading(true);
        axios
            .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => {
                if (res.data) {
                    navigate("/home");
                } else {
                    alert("user not found");
                }
            })
            .catch(() => alert("ログインできません"))
            .finally(() => setloading(false));
    }, []);

    return { login, loading };
};
