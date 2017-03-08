// /**
//  * Created by xiaoniao on 17/2/22.
//  */
// import React, { Component, PropTypes, cloneElement } from 'react';
// import ReactDOM from 'react-dom';
// import Tabs from './Tab';
// import TabPane from './TabPane';
import classNames from 'classnames';
//
// class App extends Component {
//     constructor(props) {
//         super(props);
//
//         this.handleChange = this.handleChange.bind(this);
//
//         this.state = {
//             activeIndex: 0
//         };
//     }
//
//     handleChange(e) {
//         this.setState({
//             activeIndex: parseInt(e.target.value, 10)
//         });
//     }
//
//     render() {
//         return (
//             <div>
//                 <div className="operator">
//                     <span>切换 Tab：</span>
//                     <select value={this.state.activeIndex} onChange={this.handleChange}>
//                         <option value="0">Tab 1</option>
//                         <option value="1">Tab 2</option>
//                         <option value="2">Tab 3</option>
//                     </select>
//                 </div>
//                 <Tabs defaultActiveIndex={this.state.activeIndex} className="tabs-bar">
//                     <TabPane order="0" tab={'Tab 1'}>第一个 Tab 里的内容</TabPane>
//                     <TabPane order="1" tab={'Tab 2'}>第二个 Tab 里的内容</TabPane>
//                     <TabPane order="2" tab={'Tab 3'}>第三个 Tab 里的内容</TabPane>
//                 </Tabs>
//             </div>
//         );
//     }
// }
//
//
// ReactDOM.render(<App/>, document.getElementById('content'));
/**
 * Created by xiaoniao on 17/2/28.
 */
import  React, {Component} from 'react';
import RractDOM from  'react-dom';
// class Qr extends  Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             active: false
//         }
//         this.handleClick = this.handleClick.bind(this);
//         this.handleClickQr = this.handleClick.bind(this);
//     }
//     componentDidMount() {
//         document.body.addEventListener('click',(e) => {
//             if (e.target && e.target.matches('div.code')){
//                 return;
//             }
//             this.setState({
//                 active: false
//             })
//         })
//     }
//     componentWillUnmount() {
//         document.body.removeEventListener('click')
//     }
//     handleClick(e) {
//         e.preventDefault();
//         this.setState({
//             active: !this.state.active
//         })
//     };
//     handleClickQr(e)  {
//         e.stopPropagation();
//     }
//     render() {
//         return(
//             <div className="qr-wrapper">
//                 <button className="Qr" onClick={this.handleClick}>二维码</button>
//                 <div className="code" style={{display: this.state.active ? 'block' : 'none'}}>
//                     <p>我是一个二维码</p>
//                 </div>
//             </div>
//         )
//     }
// }
// RractDOM.render(<Qr/>, document.getElementById('content'));

//--------------------input-----------------

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.handleChange = this.handleChange.bind(this);
//         this.state = {
//             radioValue: ''
//         }
//     }
//     handleChange(e) {
//         this.setState({
//             radioValue: e.target.value
//         })
//     }
//     render() {
//         const {radioValue} = this.state;
//         return(
//             <div>
//                 <p>gender:</p>
//                 <label>male:
//                     <input type="radio" value="male" checked={radioValue == 'male'} onChange={this.handleChange}/>
//                 </label>
//                 <p>female:</p>
//                 <label>female:
//                     <input type="radio" value="female" checked={radioValue == 'female'} onChange={this.handleChange}/>
//                 </label>
//             </div>
//         )
//     }
// }

//  checked
// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.handleChange = this.handleChange.bind(this);
//         this.state = {
//             coffee: []
//         }
//
//     }
//
//     handleChange (e){
//         const {checked, value} = e.target;
//         let coffee = this.state;
//         if (checked && coffee.indexOf(value) === -1) {
//             coffee.push(value);
//         } else {
//             coffee = coffee.filter(i => i !== value);
//             console.log(coffee);
//         }
//         this.setState = ({
//             coffee
//         })
//     };
//
//    
//     render() {
//         const coffee = this.state;
//         return (
//             <div>
//                 <p>choose your favourite coffee</p>
//                 <label htmlFor="">
//                     <input type="checkbox" value="aaaa" checked={coffee.indexOf('aaaa') !== -1}
//                            onChange={this.handleChange}/>
//                     aaaa
//                 </label>
//                 <label htmlFor="">
//                     <input type="checkbox" value="bbb" checked={coffee.indexOf('bbb') !== -1}
//                            onChange={this.handleChange}/>
//                     bbb
//                 </label>
//                 <label htmlFor="">
//                     <input type="checkbox" value="ccc" checked={coffee.indexOf('ccc') !== -1}
//                            onChange={this.handleChange}/>
//                     ccc
//                 </label>
//                 <label htmlFor="">
//                     <input type="checkbox" value="ddd" checked={coffee.indexOf('ddd') !== -1}
//                            onChange={this.handleChange}/>
//                     ddd
//                 </label>
//             </div>
//         )
//     }
// }

// select
// import styles from '../css/tabs.css'
//  class App extends Component {
//     constructor(props) {
//         super(props);
//         this.handleChange = this.handleChange.bind(this);
//         this.state = {
//             area: ['beijing', 'shanghai']
//         }
//     }
//      handleChange(e) {
//          const option = e.target;
//          const area = Object.keys(option).filter(i => option[i].selected == true).map(i => option[i].value);
//          this.setState({
//              area
//          })
//      };
//      render() {
//          const {area} = this.state;
//          const btnClass = classNames({
//              'btn' : true
//          });
//          console.log(styles);
//          return(
//              <div>
//                  <select multiple={true} value={area} onChange={this.handleChange}>
//                      <option value="beij">beijing</option>
//                      <option value="shanghai">sh</option>
//                      <option value="hangzhou">hz</option>
//                  </select>
//                  <button className={btnClass}>按钮</button>
//              </div>
//          )
//      }
// }
// css modules
// import App from './cssModules.js'
// import List from './component.js'
import App from './higherOrder';

RractDOM.render(<App/>, document.getElementById('content'));
