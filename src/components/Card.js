import React from 'react'
import { Card, CardBody, CardTitle, Col } from 'reactstrap'

const SpaceCard = (props) => {
    return (
        <Col>
            <Card>
                <CardBody>
                    <CardTitle>{props.name} is aboard the {props.craft}!</CardTitle>
                </CardBody>
            </Card>
        </Col>
    )
}

export default SpaceCard