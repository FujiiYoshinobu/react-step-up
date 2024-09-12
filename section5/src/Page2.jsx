import { Link } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";

export const Page2 = () => {
    const { id } = useParams();
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    return (
        <div>
            <h1>Page 2</h1>
            <Link to="/page2/999">URL Parameter</Link>
            <br />
            <Link to="/page2/999?name=hoge">Query Parameter</Link>
            <p>{id}</p>
            <p>{query.get("name")}</p>
        </div>
    );
};
