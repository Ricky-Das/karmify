import { getDonationList } from "../backendLists/donationsTable";

export default function getDonationById(id) {
  return getDonationList().find((donation) => donation.id === id);
}
