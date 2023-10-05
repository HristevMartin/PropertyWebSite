import './Header.css'

function Header2() {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="logo">
                    <h1>Estate Agent</h1>
                </div>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="#">Listings</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header2;