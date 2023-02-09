import Toggle from "./Toggler"

function Menu() {
    return (
        <Toggle render={ function ({show, toggle}) {
            return (
                <div>
                    <button onClick={toggle}>{show ? "Hide" : "Show"} Menu</button>
                    <nav style={{display: show ? "block" : "none"}}>
                        <h6>Signed in as Coder123</h6>
                        <p><a>Your Profile</a></p>
                        <p><a>Your Repositories</a></p>
                        <p><a>Repositories</a></p>
                        <p><a>Your Stars</a></p>
                        <p><a>Your Gists</a></p>
                    </nav>
                </div>
            )
        }}/>
        
    )
}
export default Menu