import React from "react";

class App extends React.PureComponent<{parentValue:string},{counter:number}>{
    constructor(props:{parentValue:string}){
      super(props);
      this.state={counter:0};
    }
    componentDidUpdate(prevProps: Readonly<{ parentValue: string; }>, prevState: Readonly<{ counter: number; }>, snapshot?: any): void {
          console.log(prevState, this.state);
    }
    render(){
      return <><div>
        counter value:{this.state.counter}
      </div>
      <button onClick={()=>{this.setState({counter:this.state.counter-1})}}>-1</button>
      <button onClick={()=>{this.setState({counter:this.state.counter+1})}}>+1</button>
      </>
    }
  }
  export default App;
  