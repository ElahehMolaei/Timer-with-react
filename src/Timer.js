import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'

var interval
class Timer extends React.Component {
  // هرگاه استیت ها رو تغییر بدیم صفحه رندر مجدد میشه 
  //هر مقداری رو که در صفحه می خوای به صورت داینامیک نمایش بدی از استیت ها استفاده میکنی
  //استیت ها آبجکت هستند
  //اولین فامنکشنی که در رندر یک کامپوننت اجرا میشه اون سازنده ش هست و بعد از اون فانکشن رندر
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleTimeString()
    }
  }
  //این تابع میاد یه کاریو برای اولین بار وقتی کامپوننت ساخته شد انجام بده
  componentDidMount() {
    console.log("componentDidMount");
    interval = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString()
      })
    }, 1000)
  }

  //همیشه بعد از رندر صدا زده میشه:
  componentDidUpdate() {
    // console.log("componentDidUpdate");
    // console.log(this.state.time);
    if(this.state.time==="10:13:32 PM"){
      clearInterval(interval)
    }
  }
  //هروقت این کامپوننت بسته شد چیکار کنیم ؟ اینکارو با این تابع می کنیم:
componentWillUnmount(){

}
  render() {
    console.log("render");
    return (
      <h2 className='timer'>
        it is {this.state.time}
      </h2>
    )
  }
}


export default Timer