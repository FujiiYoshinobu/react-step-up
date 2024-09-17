import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./App.css";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import { Router } from "./components/router/Router";
import { UserProvider } from "./providers/UserProvider";

function App() {
    return (
        <UserProvider>
            <Router />
        </UserProvider>
    );
}

export default App;
