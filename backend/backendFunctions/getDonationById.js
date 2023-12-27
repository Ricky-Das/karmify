import Donations from "../dummyBackend/donationsTable";

export default function getDonationById(id) {
  return Donations.find((donation) => donation.id === id);
}
