import React, { useEffect, useState } from "react";
import {Container, Row, Col, Image, Button} from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";

function visitorDashboard(props) {
    console.log(props.viewuserdata);
    // let [loading, setLoading] = useState(false);

    // const curretwallet = useSelector((state) => state.userslice.userId);

    // useEffect(() => {
    //     const dasboarddata = async () => {
    //       if (!props.viewuserdata.isExist) {
    //         await props.user(curretwallet);
    //         setLoading(true);
    //       }
    //     };
    //     dasboarddata();
    // }, [!props.viewuserdata.id]);
    return(
        <Container style={{ color: 'white'}}>
            <Row className='mt-5'>
                <Col>id: {props.viewuserdata.id}</Col>
                <Col>currentLevel: {props.viewuserdata.currentLevel}</Col>
                <Col>referrerID: {props.viewuserdata.referrerID}</Col>
                <Col>totalEarningUSDT: {props.viewuserdata.totalEarningUSDT}</Col>
            </Row>
        </Container>
    )
}

export default visitorDashboard;