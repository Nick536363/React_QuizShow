import './Game.css'

function Game(props){
    var percentage = Math.round((props.index / props.all) * 100)
     const progress_style = {
            width: percentage+"%"
        }
    return(
        <div className="Game">
        <div className="progress" style={progress_style}></div>
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