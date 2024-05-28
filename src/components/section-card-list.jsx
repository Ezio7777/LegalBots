import React from "react";
import Card from "react-bootstrap/Card";
import "../styles/section-card.css";

function Scard(props) {
  const imgURL = props.data.imgURL;
  const name = props.data.name;
  const text = props.data.text;
  const title = props.data.title;
  const logo =
    "https://media.licdn.com/dms/image/C560BAQG1VjshUrOofw/company-logo_200_200/0/1630648778171/legalbotsin_logo?e=2147483647&v=beta&t=rcOI6ROSpxa0pII1hNYewx86bAAToHyvKGqxiavGpjE";

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <Card className="section_cards_single list_card_body">
      <Card.Img variant="top" src={imgURL} />

      <Card.Body>
        <Card.Title className="card_title">
          {truncateText(title, 20)}
        </Card.Title>
        <Card.Text className="card_text ">{truncateText(text, 30)}</Card.Text>
      </Card.Body>
      <Card.Footer className="card_footer">
        <div className="card_profile_img">
          <img src={logo} alt="logo" />
        </div>
        <div className="profile_name ">{name}</div>
      </Card.Footer>
    </Card>
  );
}

export default Scard;
