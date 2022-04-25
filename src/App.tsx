import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Task from './components/Task/Task';
import VegetablieListFirst from './components/VegetableListFirst/VegetableListFirst';
import VegetablieListSecond from './components/VegetableListSecond/VegetableListSecond';

const tasks = [
  {
    id: '1',
    text: 'Do laundry',
    done: true,
  },
  {
    id: '2',
    text: 'Make pica and deliver to Ketijas house',
    done: true,
  },
  {
    id: '3',
    text: 'Clean house',
    done: false,
  },
];

const vegetables = [
  {
    id: '1',
    title: 'Cucumber',
    description: 'It is green',
    backgroundColor: 'green',
    avalaible: true,
  },
  {
    id: '2',
    title: 'Carrot',
    description: 'It is orange',
    backgroundColor: 'orange',
    avalaible: false,
  },
  {
    id: '3',
    title: 'Sweet pepper',
    description: 'It is in many colors',
    backgroundColor: 'yellow',
    avalaible: true,
  },
];

const App = () => (
  <div className="App">
    <div className="task-wrapper">
      {
        tasks.map(({ id, text, done }) => (
          <Task key={id} desc={text} className={done ? 'task__text--done' : ''} />
        ))
      }
    </div>
    <div className="task-wrapper">
      {
        tasks.filter(({ done }) => done).map(({ id, text }) => (
          <Task key={id} desc={text} className="text" />
        ))
      }
    </div>
    <div className="vegetables-wrapper">
      {
        vegetables.map(({
          id, title, description, backgroundColor, avalaible,
        }) => (
          avalaible
            ? (<VegetablieListFirst key={id} id={id} title={title} desc={description} bgColor={backgroundColor} />)
            : (<VegetablieListFirst key={id} id="" title="" desc="Not avalaible" bgColor="#fff" />)
        ))
      }
    </div>
    <div className="vegetables-wrapper">
      {
        vegetables.filter(({ avalaible }) => avalaible).map(({
          id, title, description, backgroundColor,
        }) => (
          <VegetablieListSecond key={id} bgColor={backgroundColor} id={id} title={title} desc={description} />
        ))
      }
    </div>
  </div>
);

export default App;
