import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHistory } from '@fortawesome/free-solid-svg-icons'


export default class Homepage extends React.Component {
    constructor(props){
        super(props)
        this.displayData = [];
        
        this.state = {
            kq: '',
            kq1: '0',
            showing: true ,
            history: [],
            lastact: false,
        }   
    }

    set(op) {
        const operator = ['/','*','+','-','.'];
        let {kq}  = this.state;
        let {kq1} = this.state;
        let {lastact} = this.state;
        let lastChar = kq.slice(-1);

        if((operator.indexOf(lastChar) !== -1 && operator.indexOf(op) !== -1) || (operator.indexOf(op) !== -1 && kq.length === 0)){
            alert('nhập sai ngôn ngữ toán')
            return
        }
      
    
    switch (lastact) {
        case true:
            if (operator.indexOf(op) !==-1) {
                console.log(this.state.lastact, this.state.kq, this.state.kq1);
                   this.setState({kq: kq1 + op, lastact: false, kq1: 'ans = ' + kq1})
            } else {
                this.setState({kq: '' +op, lastact: false, kq1:'ans = ' + kq1})
            }
            break;
        case false:
                this.setState({ kq: kq + op })
                console.log(this.state.lastact, this.state.kq, this.state.kq1);
            break;
    }
    }
       
        
     answer(){
        const space = ""
        const operator = ['/','*','+','-','.'];
        let {kq} = this.state;
        let lastChar = kq.slice(-1);
        
        
        
        if (operator.indexOf(lastChar) !==-1 || space.indexOf(kq) !==-1) {
            alert('nhập sai ngôn ngữ toán')    
            return        
        } 
        

        else {
        let kq1 = eval(this.state.kq).toString();    
        this.setState({kq1: kq1, history: [...this.state.history, this.state.kq], lastact: true });
        console.log(this.state.lastact, this.state.kq, this.state.kq1);
        }

    }

    backspace() {
		let lastResult = this.state.kq;
		if (lastResult.length === 0) {
			this.setState({ kq: ''});
		} else {
			let newResult = lastResult.slice(0, lastResult.length-1);
			this.setState ({ kq: newResult });
		}
    }

    render(){
        const { showing } = this.state;
       let {history}=this.state
        return (
           <div id="cal">
                

              <div id="cal1">
            <div id="a" style={{ display: (showing ? 'none' : 'block') }}>
              
            {   
                
                history.map((data, idx)=>{
                    if (data === []) {
                        return(<h3>đéo có lịch sử</h3>)
                    } else {
                        return ( <button id="but" key={idx} onClick={() => this.setState({kq: data, kq1: eval(data).toString()})}>{data}</button>)
                       
                    }
                    
                })
            }
            </div>
              <table id= "screen">
                <tbody>  
                    <tr>
                        <td rowSpan="2">
                            <button id="history" onClick={() => this.setState({ showing: !showing })}><FontAwesomeIcon icon={faHistory} /></button>
                            <button id="history" onClick= {() => this.setState({history: []})}>CH</button>
                            </td>
                        <td id="kq">
                            <input name="kq" type="text" id="display" value={this.state.kq} onChange = {() => this.set()}></input>
                        </td>
                    </tr>
                    <tr>
                        
                        <td  id="kq1">
                            <input name="kq1" type="text" id="display" value={this.state.kq1} readOnly/>
                        </td>
                    </tr>
                </tbody>
            </table >   
           
                     
                 <table id="keyboard">
                        <tbody>    
                    <tr>                 
                    <td>
                        <input id="btnOParen" type="button" name="operator" value="(" onClick={() => this.set('(')} />
                    </td>
                    <td>
                        <input id="btnCParen" type="button" name="operator" value=")" onClick={() => this.set(')')} />
                    </td>
                    <td>
                        <input id="btnPcnt" type="button" name="operator" value="Bspace" onClick={() => this.backspace()} />
                    </td>
                        <td>
                        <input id="btnCE" type="button" name="operator" value="Clear" onClick={() => this.setState({kq: '', kq1: '0'})}/>
                    </td>  
                </tr>
                    <tr>               
                        <td>
                            <input id="btn7" type="button" value="7" onClick={() => this.set('7')} />
                        </td>
                        <td>
                            <input id="btn8" type="button" value="8" onClick={() => this.set('8')} />
                        </td>
                        <td>
                            <input id="btn9" type="button" value="9" onClick={() => this.set('9')} />
                        </td>
                        <td>
                            <input id="btnDiv" type="button" name="operator" value="÷" onClick={() => this.set('/')} />
                        </td>
                    </tr>
                    <tr>                                     
                        <td>
                            <input id="btn4" type="button" value="4" onClick={() => this.set('4')} />
                        </td>
                        <td>
                            <input id="btn5" type="button" value="5" onClick={() => this.set('5')} />
                        </td>
                        <td>
                            <input id="btn6" type="button" value="6" onClick={() => this.set('6')} />
                        </td>
                        <td>
                            <input id="btnMul" type="button" name="operator" value="×" onClick={() => this.set('*')} />
                        </td>
                    </tr>
                    <tr>                                              
                        <td>
                            <input id="btn1" type="button" value="1" onClick={() => this.set('1')} />
                        </td>
                        <td>
                            <input id="btn2" type="button" value="2" onClick={() => this.set('2')} />
                        </td>
                        <td>
                            <input id="btn3" type="button" value="3" onClick={() => this.set('3')} />
                        </td>
                        <td>
                            <input id="btnSub" type="button" name="operator" value="-" onClick={() => this.set('-')} />
                        </td>
                    </tr>
                    <tr id="last">                                             
                        <td>
                            <input id="btn0" type="button" value="0" onClick={() => this.set('0')} />
                        </td>
                        <td>
                            <input id="btnPeriod" type="button" value="." onClick={() => this.set('.')}/>
                        </td>
                        <td>
                            <input id="btnEqual" type="button" name="equal" value="=" onClick={() => this.answer()} />
                        </td>
                        <td>
                            <input id="btnAdd" type="button" name="operator" value="+" onClick={() => this.set('+')} />
                        </td>
                    </tr>

                    <tr>
                    {this.displayData}
                    </tr>
                    </tbody>
                </table>
            
            
            </div>
           </div>
        )
    }
}