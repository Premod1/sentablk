import { FaWhatsapp } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WhatsappContact.css";

function WhatsappContact() {
  const handlClick = () => {
    window.open("https://wa.me/94773181567");
  };
  return (
    <div className="whats-app-container">
      <div id="app">
        <FaWhatsapp size={45} color="#25D366" onClick={handlClick} />
      </div>
    </div>
  );
}
export default WhatsappContact;
