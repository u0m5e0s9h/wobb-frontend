import React from "react";
import "./CampaignCard.css";

const CampaignCard = ({ brand, payout, hired, slots, image, description }) => (
  <div className="campaign-card">
    <img src={image} alt={`${brand} campaign`} className="campaign-image" />
    <div className="campaign-details">
      <h3 className="brand-name">{brand}</h3>
      <p className="description">{description}</p>
      <p className="payout">Payout: {payout}</p>
      <div className="progress">
        <div className="progress-bar" style={{ width: `${(hired / slots) * 100}%` }}></div>
      </div>
      <p className="hiring">Hired: {hired}/{slots}</p>
    </div>
  </div>
);

export default CampaignCard;
