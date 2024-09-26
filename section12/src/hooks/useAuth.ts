import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/api/user";
import { useNavigate } from "react-router-dom";
import { useMessage } from "./useMessage";
import { useLoginUser } from "../hooks/useLoginUser";

export const useAuth = () => {
    const navigate = useNavigate();
    const { showMessage } = useMessage();
    const { setLoginUser } = useLoginUser();
    const [loading, setloading] = useState(false);
    const login = useCallback(
        (id: string) => {
            setloading(true);
            axios
                .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then((res) => {
                    if (res.data) {
                        setLoginUser(res.data);
                        showMessage({
                            title: "ログインしました",
                            status: "success",
                        });
                        navigate("/home");
                    } else {
                        showMessage({
                            title: "ユーザーが見つかりません",
                            status: "error",
                        });
                        setloading(false);
                    }
                })
                .catch(() => {
                    showMessage({
                        title: "ログインできません",
                        status: "error",
                    });
                    setloading(false);
                });
        },
        [navigate, showMessage]
    );

    return { login, loading };
};
