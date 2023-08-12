/* eslint-disable react/prop-types */
import { Button, Modal, Form, FloatingLabel } from 'react-bootstrap';

function ModalLogin({ isShown, handleClose }) {
    return (
        <>
            <Modal centered="true" dialogClassName="w-400px" show={isShown} onHide={handleClose}>
                <Modal.Body className='p-5'>
                    <h1 className="h3 mb-5 fw-normal text-center">
                        Login
                    </h1>
                    <Form.Group className="mb-3">
                        <FloatingLabel
                            controlId="floatingEmailLogin"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control type="email" placeholder="Email" />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingPasswordLogin"
                            label="Password"
                            className='mb-3'
                        >
                            <Form.Control type="password" placeholder="Password" />
                        </FloatingLabel>

                        <div key="check-remember-login" className="mb-4">
                            <Form.Check
                                type="checkbox"
                                id="check-remember-login"
                                label="Remember me"
                            />
                        </div>
                    </Form.Group>
                    <Button variant='outline-info' size='lg' className='w-100'>Login</Button>
                    <Button variant='link' className='w-100' onClick={handleClose}>Close</Button>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalLogin