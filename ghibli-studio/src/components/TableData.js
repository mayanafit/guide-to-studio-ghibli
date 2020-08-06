import React from 'react';
import { Button } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import swal from '@sweetalert/with-react';
import { addList, deleteList } from '../store/actions/listsAction';

const TableData = ({movieData, index}) => {
    const { buttonRemove } = useSelector((state) => state.homeReducer);
    const { lists } = useSelector((state) => state.listsReducer);
    const dispatch = useDispatch()
    const location = useLocation()
    const {title, description, release_date, id} = movieData

    const handleAdd = () => {
        const matchList = lists.filter(list => list.id === id)  
            if (matchList.length > 0) {
                swal("Sorry!", "You already add this movie.", "error")
            } else {
                dispatch(addList(movieData))
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
                dispatch(deleteList(movieData))
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
                            pathname: `${ location.pathname }/${id}`,
                            state: {modalStat: true}
                        }}>
                        {title} &nbsp;
                        <i className="fa fa-external-link" aria-hidden="true"></i>
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