import React, {Component} from 'react';
class Input extends Component {
    constructor() {
        super();
        this.state={count:0,result:0}

        this.handlChange = this.handlChange.bind(this)
        this.total=this.total.bind(this)
    }
    handlChange = () => {
        this.setState({
            count:this.state.count + 1
        });
        this.total();
    }
    total = () => {
        var rate = 4;
        let price = this.state.result;
        var tprice = price + rate;
        this.setState({result: tprice});

    }





    render() {
        return (
            <div>
                 <div>
      <p>Total item {this.state.count} </p>
      <button onClick={this.handlChange}>
        Add item
      </button>
                     <h2>Total price : </h2><span>{this.state.result}</span>
    </div>
            </div>
        );
    }
}

export default Input;