import React, {Component} from 'react';

class FormSearch extends Component {
    constructor() {
        super()
        this.state={
            searchValue: '',
        }
    }

    handleChange(val) {
        this.setState({
            searchValue: val.target.value
        })
    }

    searchTitle() {
        this.props.onSubmit(this.state.searchValue)
    }

    render() {
        return(
            <div className="d-flex justify-content-center">
                <input onChange={(val) => this.handleChange(val)} 
                type="text" value={this.state.searchValue} 
                className="mr-2" placeholder="search title..."/>
                <button onClick={() => this.searchTitle()} className="btn btn-sm bg-warning">Search</button>
            </div>
        )
    }

}

export default FormSearch