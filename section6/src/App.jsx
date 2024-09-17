import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./App.css";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import { Router } from "./components/router/Router";

function App() {
    return (
        <>
            <Router />
        </>
    );
}

export default App;
