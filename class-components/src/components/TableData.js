import React, {Component} from 'react';

class TableData extends Component {

    idValue(id) {
        console.log(id, `ini id`)
        return this.props.detailValue(id)
    }

    render() {
        const {title, description, release_date, id} = this.props.movieData
        return (
            <tr>
                <th scope="row" className="text-left">{this.props.idx+1}.</th>
                <td>
                    <button onClick={() => this.idValue(id)} className="btn title">{title}</button>
                </td>
                <td className="td-width">{description}</td>
                <td>{release_date}</td>
            </tr>
        )
    }
}

export default TableData