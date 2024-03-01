import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { useSetup } from "../../context/SetupProvider";
import { allDetails, allGenders, allMoods, allThemes } from "../../data/data";
import { useState } from "react";

function SettingsModal({ darkMode }) {
  const { settings, setSettings, settingsModalShow, toggleSettings } =
    useSetup();
  const [theme, setTheme] = useState(settings.theme);
  const [mood, setMood] = useState(settings.mood);
  const [detail, setDetail] = useState(settings.detail);
  const [gender, setGender] = useState(settings.gender);
  console.log("theme" + theme);
  console.log("settingstheme" + settings.theme);

  const onClose = () => {
    setSettings({
      theme: theme,
      mood: mood,
      detail: detail,
      gender: gender,
      limitation: { min: 50, max: 200 },
    });
    toggleSettings();
  };

  return (
    <Modal
      data-bs-theme={darkMode ? "dark" : "light"}
      show={settingsModalShow}
      onHide={onClose}
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            {allThemes.map((item) => (
              <Col
                className={`${item == theme && "bg-primary-subtle"}`}
                onClick={() => setTheme(item)}
                key={item}
                xs={12}
                md={8}
              >
                {item}
              </Col>
            ))}
            {allMoods.map((item) => (
              <Col
                className={`${item == mood && "bg-primary-subtle"}`}
                onClick={() => setMood(item)}
                key={item}
                xs={12}
                md={8}
              >
                {item}
              </Col>
            ))}
          </Row>
          <Row>
            {allDetails.map((item) => (
              <Col
                className={`${item == detail && "bg-primary-subtle"}`}
                onClick={() => setDetail(item)}
                key={item}
                xs={12}
                md={8}
              >
                {item}
              </Col>
            ))}
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            {allGenders.map((item) => (
              <Col
                className={`${item == gender && "bg-primary-subtle"}`}
                onClick={() => setGender(item)}
                key={item}
                xs={12}
                md={8}
              >
                {item}
              </Col>
            ))}
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
