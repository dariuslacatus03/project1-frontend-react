import { Link } from "react-router-dom";
import './Shows.css';

export default function Home() {
    return (
        <div>
            <header>
                <h2>This is the main page</h2>
            </header>
            <main>
                <Link to="/shows">
                    <h1>See all shows</h1>
                </Link>
            </main>
        </div>
    )
}