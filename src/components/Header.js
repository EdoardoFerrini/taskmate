import logo from "../assets/logo.svg";
import "./Header.css";

export const Header = () =>{
    return(
        <header>
            <div className="logo">
                <img src={logo} alt="Taskmate logo"></img>
                <span>Taskmate</span>
            </div>
            <div className="themeSelector">
                <span className="light"></span>
                <span className="medium activeTheme"></span>
                <span className="dark"></span>
                <span className="gOne"></span>
                <span className="gTwo"></span>
            </div>
        </header>
    )
}