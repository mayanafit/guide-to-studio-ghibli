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

    searchTitle(e) {
        e.preventDefault()
        this.props.onSubmit(this.state.searchValue)
    }

    render() {
        return(
            <form onSubmit={(e) => this.searchTitle(e)} className="d-flex justify-content-center">
                <input onChange={(val) => this.handleChange(val)} 
                type="text" value={this.state.searchValue} 
                className="mr-2" placeholder="search title..."/>
                <button className="btn btn-sm bg-warning">Search</button>
            </form>
        )
    }

}

export default FormSearch