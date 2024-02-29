import Donations from "../dummyBackend/donationsTable";

//TODO: Change this to use firebase instead

export default function getAllRequestsByUserId(userId) {
  return Donations.filter((donation) => donation.userId === userId);
}
