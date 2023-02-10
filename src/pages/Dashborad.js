import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MainSection = styled.div`
    margin: 10vh 10vw 10vh 10vw;
`;

const Dashboard = () => {

    return (<>
        <Header />
        <MainSection>
            <div style={{ display: 'flex' }}>
                <h1>전시 관람</h1>
                <h3 style={{ marginTop: '10px' }}>[진열 순서]</h3>
            </div>
            <Container style={{ marginTop: '5vh' }}>
                <Row style={{ marginBottom: '5vh' }}>
                    <Col><img src='3.jpg' width='250px' height='250x'></img></Col>
                    <Col><img src='3.jpg' width='250px' height='250px'></img></Col>
                    <Col><img src='3.jpg' width='250px' height='250px'></img></Col>
                    <Col><img src='3.jpg' width='250px' height='250px'></img></Col>
                </Row>
                <Row style={{ marginBottom: '5vh' }}>
                    <Col><img src='3.jpg' width='250px' height='250x'></img></Col>
                    <Col><img src='3.jpg' width='250px' height='250px'></img></Col>
                    <Col><img src='3.jpg' width='250px' height='250px'></img></Col>
                    <Col><img src='3.jpg' width='250px' height='250px'></img></Col>
                </Row>
                <Row style={{ marginBottom: '5vh' }}>
                    <Col><img src='3.jpg' width='250px' height='250x'></img></Col>
                    <Col><img src='3.jpg' width='250px' height='250px'></img></Col>
                    <Col><img src='3.jpg' width='250px' height='250px'></img></Col>
                    <Col><img src='3.jpg' width='250px' height='250px'></img></Col>
                </Row>
                <Row style={{ marginBottom: '5vh' }}>
                    <Col><img src='3.jpg' width='250px' height='250x'></img></Col>
                    <Col><img src='3.jpg' width='250px' height='250px'></img></Col>
                    <Col><img src='3.jpg' width='250px' height='250px'></img></Col>
                    <Col><img src='3.jpg' width='250px' height='250px'></img></Col>
                </Row>
                <Row style={{ marginBottom: '5vh' }}>
                    <Col><img src='3.jpg' width='250px' height='250x'></img></Col>
                    <Col><img src='3.jpg' width='250px' height='250px'></img></Col>
                    <Col><img src='3.jpg' width='250px' height='250px'></img></Col>
                    <Col><img src='3.jpg' width='250px' height='250px'></img></Col>
                </Row>
                <Row style={{ marginBottom: '5vh' }}>
                    <Col><img src='3.jpg' width='250px' height='250x'></img></Col>
                    <Col><img src='3.jpg' width='250px' height='250px'></img></Col>
                    <Col><img src='3.jpg' width='250px' height='250px'></img></Col>
                    <Col><img src='3.jpg' width='250px' height='250px'></img></Col>
                </Row>
                <Row style={{ marginBottom: '5vh' }}>
                    <Col><img src='3.jpg' width='250px' height='250x'></img></Col>
                    <Col><img src='3.jpg' width='250px' height='250px'></img></Col>
                    <Col><img src='3.jpg' width='250px' height='250px'></img></Col>
                    <Col><img src='3.jpg' width='250px' height='250px'></img></Col>
                </Row>
                <Row style={{ marginBottom: '5vh' }}>
                    <Col><img src='3.jpg' width='250px' height='250x'></img></Col>
                    <Col><img src='3.jpg' width='250px' height='250px'></img></Col>
                    <Col><img src='3.jpg' width='250px' height='250px'></img></Col>
                    <Col><img src='3.jpg' width='250px' height='250px'></img></Col>
                </Row>
                <Row style={{ marginBottom: '5vh' }}>
                    <Col><img src='3.jpg' width='250px' height='250x'></img></Col>
                    <Col><img src='3.jpg' width='250px' height='250px'></img></Col>
                    <Col><img src='3.jpg' width='250px' height='250px'></img></Col>
                    <Col><img src='3.jpg' width='250px' height='250px'></img></Col>
                </Row>
            </Container>
        </MainSection>
    </>)
};

export default Dashboard;