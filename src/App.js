import { useState } from 'react';
import './App.css';
import Game from './Game';
import Result from './Result';


function App() {
  const [index, SetIndex] = useState(0)
  const [correct, SetCorrect] = useState(0)
  function onClickVariant(variant_index){
    if(variant_index === questions[index]["correct"]){
      SetCorrect(correct+1)
    }
          SetIndex(index+1)
  }
  const questions = [
      {
        title: 'React - это ... ?',
        variants: ['библиотека', 'фреймворк', 'приложение'],
        correct: 0,
    },
      {
        title: 'Компонент - это ... ',
        variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
        correct: 1,
    },
      {
        title: 'Что такое JSX?',
        variants: [
            'Это простой HTML',
            'Это функция',
            'Это тот же HTML, но с возможностью выполнять JS-код',
        ],
        correct: 2,
    },
    ];
  if(index !== questions.length){
    return (
    <div className='App'>
      <Game question = {questions[index]} index = {index} all = {questions.length} onClickVariant = {onClickVariant} />
    </div>
    );
  }
  else{
    return(<div className='App'><Result correct = {correct} all = {questions.length} /></div>)
  }
}

export default App;
