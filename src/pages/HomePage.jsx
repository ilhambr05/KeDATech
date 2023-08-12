import { Container, Row, Col } from "react-bootstrap";

import HeroBg from '../assets/hero-bg.png'
import HeroImage from '../assets/hero.svg'

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
            <div id="about" className="min-vh-100 bg-dark">
            </div>
            <div id="pricing" className="min-vh-100">
            </div>
            <div id="contact" className="min-vh-100 bg-dark">
            </div>
        </>
    )
}

export default HomePage