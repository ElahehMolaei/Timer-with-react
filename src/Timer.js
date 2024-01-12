import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'

class Timer extends React.Component {
    // هرگاه استیت ها رو تغییر بدیم صفحه رندر مجدد میشه 
    //هر مقداری رو که در صفحه می خوای به صورت داینامیک نمایش بدی از استیت ها استفاده میکنی
  //استیت ها آبجکت هستند
    constructor(){
      super();
      this.state = {
        time : new Date().toLocaleTimeString()
      }
    }
    render() {
      setInterval(()=>{
        this.setState({
          time : new Date().toLocaleTimeString()
        })
      },1000)
      return (
        <h2 className='timer'>
          it is {this.state.time}
        </h2>
      )
    }
  }
  

  export default Timer