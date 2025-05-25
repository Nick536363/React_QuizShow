function Game(){
    const progress_style = {
            width: '50%',
            backgroundColor: 'white'
        }
    return(
        <div className="Game">
        <div className="progress" style={progress_style}>Линия прогресса</div>
        <h1>Что такое useState?</h1>

        <ul>
            <li>Это функция для хранения данных компонента.</li>
            <li>Это глобальный стейт</li>
            <li>Это когда включешь компьютер</li>
        </ul>

        </div>
        
    )
}

export default Game;