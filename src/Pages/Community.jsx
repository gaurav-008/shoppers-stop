import React, { useEffect, useState } from "react";
import all_product from "../Components/Assets/all_product";
import "./CSS/Checkout.css";

const peopleNames = ["Ava", "Liam", "Sophia", "Noah", "Emma", "Lucas"];
const makePeople = () => {
  const people = peopleNames.map(name => ({ name, images: [] }));
  all_product.forEach((item, i) => {
    people[i % people.length].images.push(item.image);
  });
  return people;
};
const getWinnerIdx = people => people.reduce((maxIdx, p, i, arr) => p.images.length > arr[maxIdx].images.length ? i : maxIdx, 0);

export const Community = () => {
  const [cards, setCards] = useState(makePeople());
  const [shuffling, setShuffling] = useState(true);
  const [winnerIdx, setWinnerIdx] = useState(null);
  const [modal, setModal] = useState({ open: false, images: [], name: "" });

  useEffect(() => {
    let shuffleCount = 0;
    const maxShuffles = 18;
    setShuffling(true);
    const interval = setInterval(() => {
      setCards(prev => [...prev].sort(() => Math.random() - 0.5));
      shuffleCount++;
      if (shuffleCount >= maxShuffles) {
        clearInterval(interval);
        // After shuffle, sort back to original order and highlight winner
        const people = makePeople();
        setTimeout(() => {
          setCards(people);
          setWinnerIdx(getWinnerIdx(people));
          setShuffling(false);
        }, 400);
      }
    }, 90);
    return () => clearInterval(interval);
  }, []);

  // Modal for viewing all stacked images
  const openModal = (images, name) => setModal({ open: true, images, name });
  const closeModal = () => setModal({ open: false, images: [], name: "" });

  // Split winner and others
  const winner = winnerIdx !== null ? cards[winnerIdx] : null;
  const others = winnerIdx !== null ? cards.filter((_, i) => i !== winnerIdx) : cards;

  return (
    <div className="checkout-root">
      <h1 className="graffiti-title" style={{fontSize: '100px',marginBottom:40}}>Gen-z glam</h1>

      {winner && (
        <>
          <h2 style={{textAlign: 'center', fontSize: '2.6rem', fontWeight: 700, color: '#ff2d55', marginBottom: 18, letterSpacing: '0.04em'}}>Chic of the month</h2>
          <div className="community-winner-big-row">
            <div
              className={`item community-card community-winner-big${shuffling ? ' shuffling' : ''}`}
              key={winner.name}
            >
              <div className="community-card-image-container" onClick={() => openModal(winner.images, winner.name)} style={{ cursor: 'pointer' }}>
                <div className="community-card-stack community-card-stack-full">
                  {winner.images.slice(0, 4).map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={winner.name + ' look'}
                      className="community-stack-img"
                      style={{ top: `${i * 6}px`, left: `${i * 42}px`, zIndex: 10 - i }}
                      loading="lazy"
                    />
                  ))}
                  {winner.images.length > 4 && (
                    <span className="community-stack-count" style={{ left: `110px`, top: `18px` }}>+{winner.images.length - 4}</span>
                  )}
                </div>
                <div className="community-card-overlay">
                  <div className="community-card-title">{winner.name}</div>
                  <div className="community-card-count">{winner.images.length} Looks</div>
                  <div className="community-crown">👑 Winner</div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="community-grid">
        {others.map((person, idx) => (
          <div
            className={`item community-card${shuffling ? ' shuffling' : ''}`}
            key={person.name}
          >
            <div className="community-card-image-container" onClick={() => openModal(person.images, person.name)} style={{ cursor: 'pointer' }}>
              <div className="community-card-stack community-card-stack-full">
                {person.images.slice(0, 4).map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={person.name + ' look'}
                    className="community-stack-img"
                    style={{ top: `${i * 6}px`, left: `${i * 42}px`, zIndex: 10 - i }}
                    loading="lazy"
                  />
                ))}
                {person.images.length > 4 && (
                  <span className="community-stack-count" style={{ left: `110px`, top: `18px` }}>+{person.images.length - 4}</span>
                )}
              </div>
              <div className="community-card-overlay">
                <div className="community-card-title">{person.name}</div>
                <div className="community-card-count">{person.images.length} Looks</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {modal.open && (
        <div className="community-modal-overlay" onClick={closeModal}>
          <div className="community-modal" onClick={e => e.stopPropagation()}>
            <h2 className="community-modal-title">{modal.name}'s Looks</h2>
            <div className="community-modal-images">
              {modal.images.map((img, i) => (
                <img key={i} src={img} alt={modal.name + ' look ' + (i + 1)} className="community-modal-img" loading="lazy" />
              ))}
            </div>
            <button className="community-modal-close" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}; 