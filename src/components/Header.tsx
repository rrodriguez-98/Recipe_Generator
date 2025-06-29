import headerLogo from "../assets/react.svg"


export default function Header() {
    return (
        <header className="header">
            <img src ={headerLogo}/>
            <h1>Recipe Generator</h1>
        </header>
    )
    
}