import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Figure from 'react-bootstrap/Figure';
import './Main.css'
import React from 'react';
function GroupExample() {
  return (
    <div>
      <div className='carusel'>
      <Card>
        <Card.Img variant="top" src="https://res.cloudinary.com/dfpg8ljvf/image/upload/v1665604863/samples/Grey_Black_Light_Experimental_Photography_Portfolio_Website_2_jg5qmu.png" />
       
           </Card>
    </div>
    <div className='form'>
    <Form>
      <h1> PARA COMUNICARTE CON NOSOTROS</h1>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
     
    </Form>
    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="https://res.cloudinary.com/dfpg8ljvf/image/upload/v1665074735/samples/SI_ES_TU_PRIMERA_COMPRA_TE_LLEVAS_UN_20_DE_DESCUENTO_TE_LO_VAS_A_PERDER_sno7s7.png"
      />
      
    </Figure>
    </div>
    </div>
  );

}

export default GroupExample;