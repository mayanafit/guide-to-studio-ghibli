import React from 'react';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import swal from '@sweetalert/with-react';

const TableData = ({movieData, index}) => {
    const { buttonRemove, lists } = useSelector((state) => state);
    const dispatch = useDispatch()
    const {title, description, release_date, id} = movieData
    const handleAdd = () => {
        let matchList = lists.filter(list => list.id === id)  
            if (matchList.length > 0) {
                swal("Sorry!", "You already add this movie.", "error")
            } else {
                dispatch({
                    type: `SET_LISTS`,
                    payload: movieData,
                })
                swal("Success!", "You add this movie to your list!", "success")
            }  
    }
    const handleRemove = () => {
        swal({
            title: "Remove this movie from your watch list?",
            text: "You can add this movie again, if you feel like re-watching. 😁",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                dispatch({
                    type: `DELETE_LIST`,
                    payload: movieData,
                })
                swal("This movie has been removed from your list!", {
                    icon: "success",
                });
            }
          });
        
    }
    return(
        <>
            <tr>
                <th scope="row" className="text-left">{index+1}.</th>
                <td className="td-width-title">
                    <Link className="title" to={{
                            pathname: `/movies/${id}`,
                            state: {id, modalStat: true}
                        }}>
                        {title}
                    </Link>
                </td>
                <td className="td-width-desc">{description}</td>
                <td>{release_date}</td>
                <td>
                    {
                        buttonRemove ? (
                            <Button onClick={() => handleRemove()} color="success" size="sm">
                                <i className="fa fa-check" aria-hidden="true"></i>&nbsp;
                                Finished Watching
                            </Button>
                        ) : (
                            <Button onClick={() => handleAdd()} color="warning" size="sm">
                                <i className="fa fa-plus" aria-hidden="true"></i>&nbsp;
                                Add to List
                            </Button>
                        )
                    }
                </td>
            </tr>
        </>
    )
}

export default TableData