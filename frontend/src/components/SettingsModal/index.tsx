import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { useSetup } from "../../context/SetupProvider";

function SettingsModal({ darkMode }) {
  const { setSettings, settingsModalShow, toggleSettings } = useSetup();

  return (
    <Modal
      data-bs-theme={darkMode ? "dark" : "light"}
      show={settingsModalShow}
      onHide={toggleSettings}
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Using Grid in Modal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
          <Row>
            <Col xs={12} md={8}>
              .col-xs-12 .col-md-8
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={toggleSettings}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SettingsModal;
