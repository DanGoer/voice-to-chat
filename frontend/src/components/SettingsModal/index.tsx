import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { useSetup } from "../../context/SetupProvider";
import { allThemes } from "../../data/data";

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
        <Modal.Title id="contained-modal-title-vcenter">Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            {allThemes.map((theme) => (
              <div>{theme}</div>
            ))}
            <Col xs={12} md={8}></Col>
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
      <Modal.Footer>Close or click outside to save</Modal.Footer>
    </Modal>
  );
}

export default SettingsModal;
