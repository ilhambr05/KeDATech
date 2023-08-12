/* eslint-disable react/prop-types */
import { Col, Card, Button } from 'react-bootstrap'

function PricingComponent({ pricing }) {
    return (
        <Col md={4} key={`pricing-item-${pricing.id}`} data-aos="fade-up" data-aos-duration="800" data-aos-delay={pricing.id * 200}>
            <Card border={pricing.borderType} className="mb-3">
                <Card.Header className={`${pricing.headerAdditionalClass} py-3`}>
                    <h4 className="my-0 fw-normal text-center">{pricing.tierName}</h4>
                </Card.Header>
                <Card.Body className="text-center">
                    <h1 className="card-title pricing-card-title">
                        {pricing.price}
                        <small className="text-muted fw-light">/mo</small>
                    </h1>
                    <ul className="list-unstyled mt-3 mb-4">
                        {pricing.features.map(
                            (feature) => {
                                return (
                                    <li
                                        className={feature.included ? "" : "product-feature-disabled text-danger"}
                                        key={`${pricing.id}-${feature.id}`}
                                    >
                                        {feature.name}
                                    </li>
                                );
                            }
                        )}
                    </ul>
                    <Button variant={pricing.orderBtnVariant} size="lg" className="w-100">
                        {pricing.orderBtnText}
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default PricingComponent