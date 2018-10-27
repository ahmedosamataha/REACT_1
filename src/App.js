import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state={
      pageOn : true,
      colorAccess : false,
      data : "  "
    }
  }
operation()
{
  this.setState({
    pageOn : !this.state.pageOn
  })
}
handle(event){

    this.setState({
      data:event.target.value
    })
}
myColor(){
  this.setState({
    colorAccess : !this.state.colorAccess
  })
}

  render(){
    return(
      <div>
      {this.state.pageOn?
      <div>
        <h1> "Osama's first react app" </h1>

        <textbox> color : <input type="text"
         onChange={this.handle.bind(this)}/>
         </textbox>
         <button onClick={()=>this.myColor()}> SHOW ? </button>
         <div >
         {this.state.colorAccess?
         <textarea style={{backgroundColor: this.state.data }}> please
          type the color u want above </textarea>

         :
         <textarea style={{backgroundColor: 'white' }}> please
          type the color u want above </textarea>
       }
         </div>

        </div>
        :null
      }
        <button onClick={()=>this.operation()}> SHOW CONTENT ? </button>
      </div>
    )
  }
}
export default App;
