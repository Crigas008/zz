import React, { useState } from "react";
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Portfolio.css";
import port from "./Port.png";
import java from "./java.svg";
import kotlin from "./kotlin.svg";
import c from "./c++.png";

function Portfolio() {
    const [isTextVisible, setTextVisible] = useState(false);

    const handleClick = () => {
        setTextVisible(!isTextVisible);
    };

    return (
        <Container className="App-header">
            <Row>
                <Col>
                    <h1>
                        The Light Moderator
                    </h1>
                    <Image src={port}></Image>
                </Col>
                <Col xl={5}>
                    <Link to="/">
                        <Button className="ButtonProtfolio" variant="dark">Back to home</Button>
                    </Link>
                    <h2> Im a coder</h2>
                    <Image className="java" src={java} onClick={handleClick}></Image>
                    {isTextVisible && <p className={"Sponsor"} href={"https://github.com/Azimkin"} target={"_blank"}>Спонсировано сетью серверов Мираж</p>}
                    <Image className="java" src={c} ></Image>
                    <Image className="java" src={kotlin}></Image>
                    <Button className={"git"} href={"https://github.com/Azimkin"} target={"_blank"} atl={"Cпонисировано Миражом"} ></Button>
                </Col>

            </Row>

        </Container>
    )
}
export default Portfolio;