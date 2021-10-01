import React, {Component} from 'react';

class Home extends Component {
    state = {
  todos: [{id:1,name:'ishan',location:"indore"},{id:2,name:'ishml;an',location:"inbjkkldore"},{id:3,name:'iszdfgzdhhan',location:"ifgbhxfghfndore"}],

}
    render() {
        return (
            <div>
                <h2>HH</h2>
                <ul>
                    {this.state.todos.map(todo => (
                    <li>{todo.name}</li>
                 ))}
                </ul>

            </div>
        );
    }
}

export default Home;