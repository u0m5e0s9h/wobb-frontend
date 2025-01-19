import React from "react";
import CampaignCard from "./CampaignCard";
import "./CampaignList.css";

const campaigns = [
  {
    id: 1,
    brand: "Brand A",
    payout: "Barter",
    hired: 3,
    slots: 10,
    image: "https://via.placeholder.com/150",
    description: "Promote our latest product line."
  },
  {
    id: 2,
    brand: "Brand B",
    payout: "Fixed Pay",
    hired: 5,
    slots: 5,
    image: "https://via.placeholder.com/150",
    description: "Share your experience using our app."
  },
];

const CampaignList = () => (
  <div className="campaign-list">
    {campaigns.map(campaign => (
      <CampaignCard key={campaign.id} {...campaign} />
    ))}
  </div>
);

export default CampaignList;