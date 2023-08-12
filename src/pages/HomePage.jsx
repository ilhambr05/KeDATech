import { Container, Row, Col, Form } from "react-bootstrap";

import HeroBg from '../assets/hero-bg.png'
import HeroImage from '../assets/hero.svg'
import AboutUsImage from '../assets/about-us.svg'

import { listPricing } from "../data/config";
import PricingComponent from "../components/PricingComponent";

function HomePage() {
    const heroBgStyle = {
        backgroundImage: `url(${HeroBg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <>
            <header id="home" className="min-vh-100" style={heroBgStyle}>
                <Container className="hero-content pt-5 d-flex align-items-center">
                    <Container className="mt-5">
                        <Row className="animate__animated animate__fadeInUp">
                            <Col md={{ span: 6, offset: 4 }} className="hero-caption text-center">
                                Lorem ipsum dolor Sit amet. consectetur adjprscing elJt. sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Col>
                        </Row>
                        <Row className="animate__animated animate__fadeInUp">
                            <Col>
                                <p className="fs-4"><i>&quot;Excepteur sint occaecat cupidatat non proident&quot;</i></p>
                            </Col>
                        </Row>
                    </Container>
                    <img className="hero-image animate__animated animate__fadeInUp" src={HeroImage} alt="Hero Image" />
                </Container>
            </header>
            <div id="about" className="min-vh-100 bg-dark text-white d-flex align-items-center px-5">
                <Container className="container-md">
                    <Row className="flex-md-row-reverse align-items-center g-5 py-5">
                        <Col md={6} data-aos="fade-up" data-aos-duration="800">
                            <img className="w-100" src={AboutUsImage} alt="Hero Image" />
                        </Col>
                        <Col md={6} data-aos="fade-up" data-aos-duration="800">
                            <h1 className="fw-bold">ABOUT US</h1>
                            <p>
                                Officia pariatur non magna incididunt ex ut.
                                Laborum ad ipsum fugiat sint duis nostrud fugiat.
                                Enim est qui exercitation reprehenderit amet qui ea.
                                Minim eu duis esse laborum quis dolor labore.
                                Mollit nisi esse duis nisi fugiat.
                                Magna consectetur commodo excepteur reprehenderit sit non sint non sint.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div id="pricing" className="min-vh-100 d-flex align-items-center px-5">
                <Container className="container-md">
                    <Row className="g-5 py-5">
                        <Col>
                            <div className="text-center pb-md-4" data-aos="fade-up" data-aos-duration="800">
                                <h1 className="fw-bold">PRICING</h1>
                                <p className="fs-5 text-muted">Sunt id aliqua do aliqua consectetur labore ipsum.</p>
                            </div>
                            <Row className="flex-md-row-reverse">
                                {listPricing.map(
                                    (pricing) => {
                                        return (
                                            <PricingComponent key={pricing.id} pricing={pricing} />
                                        );
                                    }
                                )}
                            </Row>
                            <br />
                        </Col>
                    </Row>
                </Container>
            </div >
            <div id="contact" className="min-vh-100  d-flex align-items-center px-5 bg-dark text-white">
                <Container className="container-md">
                    <Row className="g-5 py-5">
                        <Col>
                            <div className="text-center pb-md-4">
                                <h1 className="fw-bold">Contact Us</h1>
                                <p className="fs-5">Aliqua eu deserunt aute velit esse veniam velit.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="contactForm.name">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" placeholder="Your name" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="contactForm.email">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Your email" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="contactForm.message">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" rows={4} />
                                    </Form.Group>
                                </Col>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default HomePage