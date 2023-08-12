/* eslint-disable react/prop-types */
import { Button, Modal, Form, FloatingLabel } from 'react-bootstrap';

function ModalLogin({ isShown, handleClose }) {
    return (
        <>
            <Modal centered="true" dialogClassName="w-400px" show={isShown} onHide={handleClose}>
                {/* <Modal.Header>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header> */}
                <Modal.Body className='p-5'>
                    <h1 className="h3 mb-5 fw-normal text-center">Login</h1>
                    <Form>
                        <Form.Group className="mb-3">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mb-3"
                            >
                                <Form.Control type="email" placeholder="Email" />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingPassword"
                                label="Password"
                                className='mb-3'
                            >
                                <Form.Control type="password" placeholder="Password" />
                            </FloatingLabel>
                            <div key="check-remember-login" className="mb-3">
                                <Form.Check
                                    type="checkbox"
                                    id="check-remember-login"
                                    label="Remember me"
                                />
                            </div>
                        </Form.Group>
                        <Button variant='primary' size='lg' className='w-100'>Login</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalLogin