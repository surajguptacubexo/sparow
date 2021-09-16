import React, {Component} from 'react';

const randomWords = require('random-words');

class Home extends Component {
    // constructor() {
    //     super();
    //
    // }
    random = () => {
        for (var i = 1; i <= 1000; i++) {

            if((i % 5 === 0) && (i%20 === 0) && (i%100 === 0)){
                document.write("beep boop" + "<br/>")
            }
            else if ((i % 5 === 0) && (i%20 === 0)) {
                document.write("boop" + "<br/>")
            }

            else if (i % 5 === 0) {
                document.write("beep" + "<br/>")
            }

            // else if((i % 5 === 0) && (i%20 === 0) && (i%100 === 0)){
            //     document.write("boop" + "<br/>")
            // }
            else{
                document.write(randomWords()+ "<br/>")
            }

            ;


        }

    }

    render() {


        return (
            <div>

                {this.random()}
            </div>
        );
    }
}

export default Home;