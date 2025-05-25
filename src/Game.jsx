import './Game.css'

function Game(props){

    return(
        <div className="Game">
        <div className="progress"></div>
        <h1>{props.question["title"]}</h1>

        <ul>
            <li onClick={() => {props.onClickVariant(0)}}>{props.question["variants"][0]}</li>
            <li onClick={() => {props.onClickVariant(1)}}>{props.question["variants"][1]}</li>
            <li onClick={() => {props.onClickVariant(2)}}>{props.question["variants"][2]}</li>

        </ul>

        </div>
        
    )
}

export default Game;