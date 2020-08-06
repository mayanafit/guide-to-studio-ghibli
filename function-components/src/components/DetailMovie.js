import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setMovie } from '../store/actions/moviesAction';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';

const DetailMovie = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const { movie } = useSelector((state) => state.moviesReducer)
    const {state: {modalStat}} = useLocation()
    const [modal, setModal] = useState(modalStat)
    const {title, director, producer, rt_score, description} = movie

    useEffect(() => {
        dispatch(setMovie(id))
    }, [dispatch, id])

    const toggle = () => {
        setModal(!modal)
        window.history.back();
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