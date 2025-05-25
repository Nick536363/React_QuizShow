import './Game.css'

function Game(props){
    return(
        <div className="Game">
        <div className="progress"></div>
        <h1>{props.question["title"]}</h1>

        <ul>
            <li>{props.question["variants"][0]}</li>
            <li>{props.question["variants"][1]}</li>
            <li>{props.question["variants"][2]}</li>
        </ul>

        </div>
        
    )
}

export default Game;