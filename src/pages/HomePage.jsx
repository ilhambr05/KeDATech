import { Container, Row, Col } from "react-bootstrap";

import HeroBg from '../assets/hero-bg.png'
import HeroImage from '../assets/hero.svg'
import AboutUsImage from '../assets/about-us.svg'

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
                        <Row>
                            <Col md={{ span: 6, offset: 4 }} className="hero-caption text-center">
                                Lorem ipsum dolor Sit amet. consectetur adjprscing elJt. sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className="fs-4"><i>&quot;Excepteur sint occaecat cupidatat non proident&quot;</i></p>
                            </Col>
                        </Row>
                    </Container>
                    <img className="hero-image" src={HeroImage} alt="Hero Image" />
                </Container>
            </header>
            <div id="about" className="min-vh-100 bg-dark text-white d-flex align-items-center px-5">
                <Container className="container-md">
                    <Row className="flex-md-row-reverse align-items-center g-5 py-5">
                        <Col md={6}>
                            <img className="w-100" src={AboutUsImage} alt="Hero Image" />
                        </Col>
                        <Col md={6}>
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
            <div id="pricing" className="min-vh-100">
            </div>
            <div id="contact" className="min-vh-100 bg-dark">
            </div>
        </>
    )
}

export default HomePage