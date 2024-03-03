import Donations from "../backendLists/donationsTable";
import { getDonationList } from "../backendLists/donationsTable";

//TODO: Change this to use firebase instead

export default function getAllRequestsByUserId(userId) {
  const donations = getDonationList();
  console.log("Donations:", donations);
  return donations.filter((donation) => donation.userId === userId);
}
