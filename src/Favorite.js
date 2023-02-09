import Toggle from "./Toggler"

export default function Favorite() {
    return (
        <Toggle render={function({on, toggle}) {
            return (
                <div>
                    <h3>Click heart to favorite</h3>
                    <h1>
                        <span
                            onClick={toggle}
                        >
                            {on ? "❤️" : "♡"}
                        </span>
                    </h1>
                    
                </div>
            )
        }}/>
    )
}