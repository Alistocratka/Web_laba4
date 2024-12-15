import React, { Component } from 'react';
import './App.css'; // Убедитесь, что файл существует или удалите строку, если его нет
import axios from 'axios'; // Импортируем библиотеку Axios

class App extends Component {
	constructor() {
	  super();
	  this.state = {
	    id: '' // Начальное значение состояния
	  };
	  this.handleClick = this.handleClick.bind(this); // Привязываем контекст
	}

	handleClick() {
	  axios.get('https://api.github.com/users/maecapozzi') // Выполняем HTTP-запрос
	    .then(response => {
	      this.setState({ id: response.data.id }); // Обновляем состояние
	    })
	    .catch(error => {
	      console.error('Ошибка:', error); // Ловим ошибки, если запрос не удался
	    });
	}

	render() {
	  return (
	    <div className='button_container'>
	      <button className='btn btn-primary' onClick={this.handleClick}>
	        push me
	      </button>
	      <p>{this.state.id}</p>
	    </div>
	  );
	}
}

export default App;