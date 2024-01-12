import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import Hello from './Hello'
import Timer from './Timer'
class App extends React.Component {
    render() {
      return (
        //اگه تگ دیو رو برداری ارور میده چون همه کامپوننت هات باید در یک تگ والد باشن مثل دیو یا هرچی
        <div className='main'>
          <Hello/>
          <Timer />
        </div>
      )
    }
  }

  export default App
  