import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ProgramModal({ show, handleClose, item }) {

    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    {/* <Modal.Title>{item.title}</Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                    <div class="news-block-one col-lg-12">
                        <div class="inner-box">
                            <div class="image"><img src={item.imageUrl} alt="" /></div>
                            <div class="lower-content">
                                {/* <div class="category">Business</div> */}
                                {/* <ul class="post-meta">
                                        <li><Link to={'/#'}><i class="far fa-calendar-alt"></i>24th March 2020</Link></li>
                                        <li><Link to={'/#'}><i class="far fa-user"></i>By Admin</Link></li>
                                    </ul> */}
                                <h3>{item.title}</h3>
                                <div class="text">{item.description}</div>
                                <a style={{ color: '#fff' }} className='category' href={item.registratioUrl} >Read More</a>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ProgramModal;