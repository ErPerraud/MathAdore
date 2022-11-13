import logo from '../logo.svg';

const Header = () => {

    return (
        <header className="App-header">
            <div className='Div-app-logo'>
                <a href='/'><img className='App-logo' src={logo} alt="The logo" /></a>
            </div>
            <nav className='Nav-app'>
                <ul>
                    <a className='App-link' href='/classes'><li>Classes</li></a>
                    <a className='App-link' href='/'><li>Cours</li></a>
                    <a className='App-link' href='/'><li>TD</li></a>
                    <a className='App-link' href='/'><li>TP</li></a>
                </ul>
            </nav>
        </header>
    );
}

export default Header;