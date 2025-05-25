function Result(props){
    return(
    <div className="result">
        <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"/>
        <h2>Вы отгадали {props.correct} ответа из {props.all}</h2>
        <button>Попробовать снова</button>
    </div>
    );
}

export default Result;