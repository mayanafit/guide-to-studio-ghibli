import React, {useState, useEffect} from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';

const DetailMovie = () => {
    const history = useHistory()
    const {state: {modalStat, id}} = useLocation()
    const [modal, setModal] = useState(modalStat)
    
    const [movie, error, loading] = useFetch(`https://ghibliapi.herokuapp.com/films/${id}`);

    const toggle = () => {
        setModal(!modal)
        history.push(`/movies`)
    }
    return(
        <>
            <Modal isOpen={modal}>
                <ModalHeader className="d-flex justify-content-center">
                    <h3>{movie.title}</h3>
                </ModalHeader>
                <ModalHeader className="d-flex justify-content-center">
                    <Row className="text-center">           
                        <Col><b>Director:</b></Col>             
                        <Col className="mx-4"><b>Producer:</b></Col>
                        <Col><b>Rating:</b></Col>
                    </Row>
                    <Row className="text-center">           
                        <Col>{movie.director}</Col>             
                        <Col className="mx-4 ">{movie.producer}</Col>
                        <Col>{movie.rt_score}/100</Col>
                    </Row>
                </ModalHeader>
                <ModalBody className="text-center detailMovie">{movie.description}</ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={() => toggle()}>Back</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default DetailMovie