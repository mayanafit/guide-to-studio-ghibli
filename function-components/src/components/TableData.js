import React, {useState, useEffect} from 'react';
import {Button} from 'reactstrap';

const TableData = ({movieData, index}) => {

    const {title, description, release_date, id} = movieData

    return(
        <>
            <tr>
                <th scope="row" className="text-left">{index+1}.</th>
                <td>
                    <Button color="transparent" className="title">{title}</Button>
                </td>
                <td className="td-width">{description}</td>
                <td>{release_date}</td>
            </tr>
        </>
    )
}

export default TableData