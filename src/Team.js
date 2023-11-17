import CardGroup from 'react-bootstrap/esm/CardGroup';
import './App.css';
import NavBar from './NavBar';
import {useState} from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Instagram from "./insta.png"
import Telegram from "./telega.jpg"
import Email from "./email.png"

function Team() {
    const [accounts, setAccounts] = useState([]);
    const teammates = {
        "members": ["Adilet Alpysbayev", "Abylay Pugashbek", "Almas Zhabilov", "Adilkhan Seiytkaziev"],
        "group": "CS-2114S",
        "contacts": {
            "telegram": ["https://t.me/alpysbayevs", "https://t.me/pugashbek", "https://t.me/djoullenz", "https://t.me/Ad1Sey"],
            "instagram": ["https://www.instagram.com/a.alpysbayevs/", "https://www.instagram.com/pugashbek/", "https://www.instagram.com/djoullenz/", "https://www.instagram.com/alpysbayevs/"],
        }

    }
    return (
        <div className="overlay">
            <div className="App">
                <NavBar accounts={accounts} setAccounts={setAccounts}/>
                <div className='form-div'>
                    <CardGroup style={{paddingTop: "250px"}}>

                        {teammates.members.map((member, index) => (

                            <Card bg="dark" key={index} text='white' border="danger" style={{width: '15rem'}}>
                                <Card.Header>{member}</Card.Header>
                                <Card.Body>
                                    <Card.Title>{teammates.group}</Card.Title>
                                    <Card.Text>
                                        <br></br>

                                        <Row>
                                            <Col xs={8} md={6}>
                                                <a target="_blank" rel="noopener noreferrer"
                                                   href={teammates.contacts.instagram[index]}>
                                                    <Image style={{width: "42px"}} src={Instagram} rounded/></a>
                                            </Col>
                                            <Col xs={8} md={6}>
                                                <a target="_blank" rel="noopener noreferrer"
                                                   href={teammates.contacts.telegram[index]}>
                                                    <Image style={{width: "42px"}} src={Telegram} rounded/></a>
                                            </Col>
                                        </Row>

                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        ))}

                    </CardGroup>
                </div>
            </div>
            <div className="moving-background"></div>
        </div>
    );
}

export default Team;