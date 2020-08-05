import React, {useState, useEffect} from 'react';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

const TableData = ({movieData, index}) => {

    const {title, description, release_date, id} = movieData

    return(
        <>
            <tr>
                <th scope="row" className="text-left">{index+1}.</th>
                <td className="td-width-title">
                    <Link className="title" to={{
                            pathname: `/movies/${title.toLowerCase().split(` `).join(`-`)}`,
                            state: {id, modalStat: true}
                        }}>
                        {title}
                    </Link>
                </td>
                <td className="td-width-desc">{description}</td>
                <td>{release_date}</td>
                <td>
                    <Button color="warning" size="sm">
                        <i className="fa fa-plus" aria-hidden="true"></i>&nbsp;
                        Add to List
                    </Button>
                </td>
            </tr>
        </>
    )
}

export default TableData