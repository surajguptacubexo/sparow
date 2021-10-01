import React, {Component} from 'react';

class Form extends Component {
    render() {
        return (
            <div>
                <form>
                    <div className="form-group row">
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Item Name</label>
                        <div className="col-sm-10">
                            <input type="text" readOnly className="form-control-plaintext" id="staticEmail"
                                   value="email@example.com"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label type="number" className="col-sm-2 col-form-label">Price</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword" placeholder="Price"/>
                        </div>
                    </div>
                </form>
                
            </div>
        );
    }
}

export default Form;