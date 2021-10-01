import React, {Component} from 'react';

class BIll extends Component {
    constructor(props) {
        super(props);
        // this.state={add:0,
        //     remove:0,
        //     quant:0,
        //     result:0,
        //     itemPrice:10,}
            // itemPrice:{item1:10,item2:8,item3:20}}
        this.state={
            item1:{quant1:0,result:0,price:10},
            item2:{quant2:0,result:0,price:20},
            item3:{quant3:0,result:0,price:30},
            Total:0,

        }
    //     const ADD=(id)=>{
    //     if(id===1){
    //         this.setState(
    //             {
    //                 item1:{quant1:this.state.item1.quant1+1}
    //             }
    //         )
    //     }
    // }
        this.ADD=this.ADD.bind(this)
        this.REMOVE=this.REMOVE.bind(this)
        // this.REMOVE=this.REMOVE.bind(this)
        // this.Total=this.Total.bind(this)
    }

    ADD=(id)=>{
        if(id===1){
                    this.setState({
                        item1:{...this.state.item1, quant1:this.state.item1.quant1 + 1},
                    },
                        () => {
                                        this.setState({
                                                    item1:{...this.state.item1, result:this.state.item1.result+this.state.item1.price}
                                                })
                                      }
                                      )
        }
        else if(id===2){
             this.setState({
                        item2:{...this.state.item2, quant2:this.state.item2.quant2 + 1},
                    },
                        () => {
                                        this.setState({
                                                    item2:{...this.state.item2, result:this.state.item2.result+this.state.item2.price}
                                                })
                                      }
                                      )
        }
        else {
             this.setState({
                        item3:{...this.state.item3, quant3:this.state.item3.quant3 + 1},
                    },
                        () => {
                                        this.setState({
                                                    item3:{...this.state.item3, result:this.state.item3.result+this.state.item3.price}
                                                })
                                      }
                                      )
        }
    }
REMOVE=(id)=>{
        if(id===1){
                    this.setState({
                        item1:{...this.state.item1, quant1:this.state.item1.quant1 - 1},
                    },
                        () => {
                                        this.setState({
                                                    item1:{...this.state.item1, result:this.state.item1.result-this.state.item1.price}
                                                })
                                      }
                                      )
        }
        else if(id===2){
             this.setState({
                        item2:{...this.state.item2, quant2:this.state.item2.quant2 - 1},
                    },
                        () => {
                                        this.setState({
                                                    item2:{...this.state.item2, result:this.state.item2.result-this.state.item2.price}
                                                })
                                      }
                                      )
        }
        else {
             this.setState({
                        item3:{...this.state.item3, quant3:this.state.item3.quant3 - 1},
                    },
                        () => {
                                        this.setState({
                                                    item3:{...this.state.item3, result:this.state.item3.result-this.state.item3.price}
                                                })
                                      }
                                      )
        }

    }





    render() {

        return ( <>
            <div className="container">
                <div className="row">
                <h1>Logo</h1>
                <h1>company Name</h1>
                    </div>
            </div>
                <table className="table table-dark">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Item Name</th>
                        <th scope="col">Price/1</th>
                         <th scope="col">ADD</th>
                        <th scope="col">Quantity</th>
                         <th scope="col">REMOVE</th>
                        <th scope="col">Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                          <td>{this.state.item1.price}</td>
                        <td><button onClick={(id) => this.ADD(1)}>+</button></td>
                        <td>{this.state.item1.quant1}</td>
                        <td><button onClick={(id)=>this.REMOVE(1)}>-</button></td>
                        <td>{this.state.item1.result}</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>{this.state.item2.price}</td>
                        <td><button onClick={(id)=>this.ADD(2)}>+</button></td>
                        <td>{this.state.item2.quant2}</td>
                        <td><button  onClick={(id)=>this.REMOVE(2)}>-</button></td>
                         <td>{this.state.item2.result}</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                          <td>{this.state.item3.price}</td>
                        <td><button onClick={(id) => this.ADD(3)}>+</button></td>
                        <td>{this.state.item3.quant3}</td>
                        <td><button  onClick={(id)=>this.REMOVE(3)}>-</button></td>
                         <td>{this.state.item3.result}</td>
                    </tr>


                    </tbody>
                    <h2>Total:{this.state.item1.result+this.state.item2.result+this.state.item3.result}</h2>
                </table>
            </>
        );
    }
}

export default BIll;