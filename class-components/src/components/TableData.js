import React, {Component} from 'react';

class TableData extends Component {

    render() {
        const {title, description, release_date, id} = this.props.movieData
        return (
            <tr>
                <th scope="row" className="text-left">{this.props.idx+1}.</th>
                <td>
                    <button onClick={(id) => this.idvalue(id)} className="btn title">{title}</button>
                </td>
                <td className="td-width">{description}</td>
                <td>{release_date}</td>
            </tr>
        )
    }
}

export default TableData