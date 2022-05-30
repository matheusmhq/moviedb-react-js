import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

import Loading from "components/Loading";

const ModalTrailer = ({ show, setShow, trailerId, title }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
  }, [show]);

  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      keyboard={false}
      size={"xl"}
      centered
    >
      <Modal.Header closeButton={() => setShow(false)}>
        <Modal.Title id="contained-modal-title-vcenter">
          Trailer: {title}
        </Modal.Title>
      </Modal.Header>
      {loading && <Loading customStyles={{ height: 100 }} />}
      <iframe
        style={{ border: "none", display: loading ? "none" : "block" }}
        onLoad={() => setLoading(false)}
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${trailerId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </Modal>
  );
};

export default ModalTrailer;
