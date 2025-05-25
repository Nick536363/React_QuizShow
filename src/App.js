import { useState } from 'react';
import './App.css';
import Game from './Game';

function App() {
  const [index, SetIndex] = useState(0)
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

  return (
    <div className='App'>
      <Game question = {questions[index]}  />
    </div>
  );
}

export default App;
