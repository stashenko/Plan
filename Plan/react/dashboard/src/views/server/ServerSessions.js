import {Col, Row} from "react-bootstrap-v5";
import React from "react";
import ServerWorldPieCard from "../../components/cards/server/graphs/ServerWorldPieCard";
import ServerRecentSessionsCard from "../../components/cards/server/tables/ServerRecentSessionsCard";
import SessionInsightsCard from "../../components/cards/server/insights/SessionInsightsCard";
import LoadIn from "../../components/animation/LoadIn";

const ServerSessions = () => {
    return (
        <LoadIn>
            <section className="server_sessions">
                <Row>
                    <Col lg={8}>
                        <ServerRecentSessionsCard/>
                    </Col>
                    <Col lg={4}>
                        <ServerWorldPieCard/>
                        <SessionInsightsCard/>
                    </Col>
                </Row>
            </section>
        </LoadIn>
    )
}

export default ServerSessions;