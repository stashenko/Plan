import {Card, Col, Row} from "react-bootstrap-v5";
import React from "react";
import {FontAwesomeIcon as Fa} from "@fortawesome/react-fontawesome";
import {faBug} from "@fortawesome/free-solid-svg-icons";
import LoadIn from "../components/animation/LoadIn";

export const ErrorViewText = ({error}) => {
    return (
        <>
            <p>{error.message} {error.url && <a href={error.url}>{error.url}</a>}</p>
            {error.data && <><br/>
                <pre>{JSON.stringify(error.data)}</pre>
            </>}
        </>
    )
}

export const ErrorViewBody = ({error}) => {
    return (
        <Card.Body>
            <ErrorViewText error={error}/>
        </Card.Body>
    )
}

export const ErrorViewCard = ({error}) => {
    return (
        <LoadIn>
            <Card>
                <Card.Header>
                    <h6 className="col-black">
                        <Fa icon={error.icon ? error.icon : faBug}/> Error information
                    </h6>
                </Card.Header>
                <ErrorViewBody error={error}/>
            </Card>
        </LoadIn>
    )
}

const ErrorView = ({error}) => {
    return (
        <LoadIn>
            <section className="error_view">
                <Row>
                    <Col lg={12}>
                        <ErrorViewCard error={error}/>
                    </Col>
                </Row>
            </section>
        </LoadIn>
    )
}

export default ErrorView;