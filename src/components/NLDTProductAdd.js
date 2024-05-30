import React, { Component } from 'react'

export default class NLDTProductAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            title: '',
            status: 0
        }

    }
    nldtHandleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    //submid form
    nldtHandleSubmit = (ev) => {
        console.log("Form2", this.state);
        ev.preventDefault();
        this.props.onSummit(this.state);
    }
    render() {
        return (
            <div>
                <h2>them moi san pham</h2>
                <form className='col-md-6'>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            Id
                        </span>
                        <input
                            type="text"
                            className="form-control"

                            name='id'
                            value={this.state.id}
                            onChange={this.nldtHandleChange}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="t">
                            Title
                        </span>
                        <input
                            type="text"
                            className="form-control"

                            name='title'
                            value={this.state.title}
                            onChange={this.nldtHandleChange}

                        />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="title">
                            State
                        </span>
                        <input
                            type="text"
                            className="form-control"

                            name='state'
                            value={this.state.status}
                            onChange={this.nldtHandleChange}

                        />
                    </div>
                    <button className='btn btn-success' onClick={this.nldtHandleSubmit}>ghi lai</button>

                </form>
            </div>
        )
    }
}