import React, { useState } from 'react';
import { useLocation, useHistory, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';

const DetailMovie = () => {
    const history = useHistory()
    const {id} = useParams()
    const {state: {modalStat}} = useLocation()
    const [modal, setModal] = useState(modalStat)
    
    const [movie] = useFetch(`https://ghibliapi.herokuapp.com/films/${id}`);
    const {title, director, producer, rt_score, description} = movie
    const toggle = () => {
        setModal(!modal)
        history.push(`/movies`)
    }
    return(
        <>
            <Modal isOpen={modal}>
                <ModalHeader className="d-flex justify-content-center">
                    <div className="titleModal">{title}</div>
                </ModalHeader>
                <ModalHeader className="d-flex justify-content-center">
                    <Row className="text-center">           
                        <Col><b>Director:</b></Col>             
                        <Col className="mx-4"><b>Producer:</b></Col>
                        <Col><b>Rating:</b></Col>
                    </Row>
                    <Row className="text-center">           
                        <Col>{director}</Col>             
                        <Col className="mx-4 ">{producer}</Col>
                        <Col>{rt_score}/100</Col>
                    </Row>
                </ModalHeader>
                <ModalBody className="text-center detailMovie">{description}</ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={() => toggle()}>Back</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default DetailMovie