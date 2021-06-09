import { queryAllByAttribute } from '@testing-library/dom';
import React from 'react'
import './App.css';

let num =0; 

const questions =[
  {q:'おっぱいの大きさ',c:['巨乳','貧乳','気にしない']},
  {q:'お尻の大きさ',c:['巨尻','貧尻','気にしない']},
  {q:'女性の性格',c:['S','M','どちらでもない']},
  {q:'タイプ',c:['痴女','控えめ','気にしない']},
];

class Quiz extends React.Component{
  constructor(){
    super();
    this.state = { 
        huge: 0,
        sharp:0,
        marge:0,
        isAnswerd:false,
    }
  }

  conc(){
     if(this.state.huge===questions.length){
       return "風間リカです"
     }
     if(this.state.sharp===questions.length){
       return "笠間ありさです"
     }
     if(this.state.marge===questions.length){
       return "わかるかボケ！！"
     }
     if(this.state.huge===questions.length){
       return "風間リカです"
     }
    }

  plump()　{
     this.setState({
       huge: this.state.huge +1,
       isAnswerd:true
     })
     num++;
  }

  slim() {
     this.setState({
       sharp: this.state.sharp +1,
       isAnswerd:true
     })
     num++;
  }

  notcare() {
     this.setState({
       marge: this.state.marge +1,
       isAnswerd:true
     })
     num++;
  }

  stop(){
    if(num===questions.length){
        return "あなたにおすすめのav女優は"
    }else{
      return questions[num].q      
    }
  }
  zero(){
    if(num===questions.length){
        return ""
    }else{
      return questions[num].c[0]       
    }
  }
  one(){
    if(num===questions.length){
        return ""
    }else{
      return questions[num].c[1]
    }
  }
  two(){
    if(num===questions.length){
        return ""
    }else{
      return questions[num].c[2]     
    }
  }
  check(){
    if(num===questions.length){
        return this.conc()
    }else{
      return ""    
    }
  }

  render() {
    return(
      <div className="container">
        <div className="quiz">Q:{this.stop()}</div>
        <ul id="ans">
          <li onClick={()=>{
            this.plump();
          }}>
            {this.zero()}
          </li>
          <li onClick={()=>{
            this.slim();
            }}>
            {this.one()}
          </li>
          <li onClick={()=>{
            this.notcare();}}>
            {this.two()}
          </li>
        </ul>
        <div id="check">{this.check()}</div>
      </div>  
    )
  }
}

function App() {
  return (
    <div className="container">
      <h1>AV女優診断</h1>
      <Quiz　/>
    </div>
  );
}

export default App;
