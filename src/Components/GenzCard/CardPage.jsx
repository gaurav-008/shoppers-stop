import React, { useState } from "react";
import Card from "./Card";
import "./CardPage.css";

const CARD_GRADIENTS = {
  Silver: "genz-silver-gradient",
  Golden: "genz-golden-gradient",
  Platinum: "genz-platinum-gradient",
};

const CARD_DETAILS = {
  Silver: {
    price: "₹199/month ",
    features: [
      "5% off on all purchases",
      "Standard shipping",
      "Early access to sales",
      "Basic customer support",
      "",
      "",
    ],
    buttonColor: "linear-gradient(90deg, #8e9eab 0%, #eef2f3 100%)",
  },
  Golden: {
    price: "₹399/month ",
    features: [
      "10% off on all purchases",
      "Free standard shipping",
      "Priority access to sales",
      "Exclusive gold member deals",
      "Priority customer support",
      "",
    ],
    buttonColor: "linear-gradient(90deg, #f7971e 0%, #ffd200 100%)",
  },
  Platinum: {
    price: "₹599/month ",
    features: [
      "15% off on all purchases",
      "Free express shipping",
      "VIP access to new launches",
      "Exclusive platinum member deals",
      "24/7 dedicated support",
      "Birthday & anniversary gifts",
    ],
    buttonColor: "linear-gradient(90deg, #e96443 0%, #904e95 100%)",
  },
};

const cards = [
  {
    type: "Silver",
    cardHolder: "Saurabh Kumar",
    cardNumber: "1234 5678 9012 3456",
    emoji: "🦄",
  },
  {
    type: "Golden",
    cardHolder: "Saurabh Kumar",
    cardNumber: "2345 6789 0123 4567",
    emoji: "🦁",
  },
  {
    type: "Platinum",
    cardHolder: "Saurabh Kumar",
    cardNumber: "3456 7890 1234 5678",
    emoji: "🦅",
  },
];

const CardPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handlePurchase = (card) => {
    setSelectedCard({ ...card, gradientClass: CARD_GRADIENTS[card.type] });
    setModalOpen(true);
  };
  const handleClose = () => {
    setModalOpen(false);
    setSelectedCard(null);
  };
  const handleConfirm = () => {
    alert(`Purchase confirmed for ${selectedCard.type} card!`);
    handleClose();
  };

  return (
    <div className="card-page-outer">
      {/* Floating SVG shapes for Gen Z energy */}
      <div className="card-page-bg-shapes">
        <svg
          width="120"
          height="120"
          style={{ position: "absolute", top: 40, left: 60, opacity: 0.18 }}
        >
          <circle cx="60" cy="60" r="50" fill="#fff" />
        </svg>
        <svg
          width="80"
          height="80"
          style={{ position: "absolute", top: 180, right: 80, opacity: 0.13 }}
        >
          <rect x="10" y="10" width="60" height="60" rx="18" fill="#43e97b" />
        </svg>
        <svg
          width="60"
          height="60"
          style={{ position: "absolute", bottom: 60, left: 120, opacity: 0.15 }}
        >
          <polygon points="30,5 55,55 5,55" fill="#ff6fd8" />
        </svg>
        <svg
          width="100"
          height="40"
          style={{
            position: "absolute",
            bottom: 120,
            right: 60,
            opacity: 0.12,
          }}
        >
          <ellipse cx="50" cy="20" rx="45" ry="18" fill="#ffe259" />
        </svg>
      </div>
      <header className="card-page-header">
        
       <h2> GenZ ChicChaps Discount Cards</h2>
      </header>
      <div className="card-page-description">
        <p>Style Smart. Save Big. Slay Every Look.</p>
        <br></br>
        <h3> What is the ChicChaps Discount Card?</h3>
        <br></br>
        The ChicChaps Discount Card is your personal key to
        exclusive fashion perks, special offers, and VIP access to GenZ clothing
        brands. Choose your level – <b>Vibe Starter, Trend Setter, or Icon Mode</b> – and enjoy
        discounts, early drops, free shipping, and more.
      </div>
      <div
        className="card-page-container"
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
        }}
      >
        {/* <img
          src={process.env.PUBLIC_URL + "/images/grafittinew.png"}
          alt="Graffiti left"
          style={{
            width: "340px",
            maxWidth: "340px",
            height: "690px",
            marginRight: "2rem",
            objectFit: "cover",
            filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.18))",
            zIndex: 2,
            alignSelf: "stretch",
          }}
        /> */}
        <div className="card-columns-flex">
          {cards.map((card, idx) => {
            const details = CARD_DETAILS[card.type];
            return (
              <div
                className="card-column"
                key={card.type}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "stretch",
                }}
              >
                <Card {...card} />
                <div
                  className="card-content"
                  style={{ textAlign: "center", marginTop: "1.5rem" }}
                >
                  {/* Plan Name */}
                  <div
                    className="card-plan-name"
                    style={{
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      letterSpacing: "0.5px",
                      color: "#7c3aed",
                      marginBottom: "0.3rem",
                      textTransform: "uppercase",
                    }}
                  >
                    {card.type === "Silver"
                      ? "Vibe Starter "
                      : card.type === "Golden"
                      ? "Trend Setter"
                      : card.type === "Platinum"
                      ? "Icon Mode"
                      : "IconMode"}
                  </div>
                  <div
                    className="card-price"
                    style={{
                      fontWeight: "bold",
                      fontSize: "1.5rem",
                      marginBottom: "1rem",
                      color: 'black'
                    }}
                  >
                    {details.price}
                  </div>
                  <ul
                    className="card-features"
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      marginBottom: "1.5rem",
                    }}
                  >
                    {details.features.map((feature, i) => (
                      <li
                        key={i}
                        className="card-feature-item"
                        style={{
                          marginBottom: "0.7rem",
                          fontSize: "1.1rem",
                          color: feature ? "#444" : "transparent",
                          textAlign: "left",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5em",
                        }}
                      >
                        <span
                          style={{
                            color: feature ? "#7c3aed" : "transparent",
                            fontWeight: "bold",
                            fontSize: "1.2em",
                          }}
                        >
                          ✔
                        </span>{" "}
                        {feature || "."}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="card-purchase-btn"
                    style={{
                      background: details.buttonColor,
                      color: "#fff",
                      border: "none",
                      borderRadius: "2rem",
                      padding: "0.8rem 2.5rem",
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                      marginTop: "0.5rem",
                      cursor: "pointer",
                      boxShadow: "0 2px 12px #0002",
                    }}
                    onClick={() => handlePurchase(card)}
                  >
                    Coming Soon
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {/* <img
          src={process.env.PUBLIC_URL + "/images/Genz.png"}
          alt="Genz right"
          style={{
            width: "340px",
            maxWidth: "340px",
            height: "auto",
            marginLeft: "2rem",
            objectFit: "cover",
            filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.18))",
            zIndex: 2,
            alignSelf: "stretch",
          }}
        /> */}
      </div>
    
    </div>
  );
};

export default CardPage;
