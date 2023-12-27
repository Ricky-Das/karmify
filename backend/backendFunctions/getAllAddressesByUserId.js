import Addresses from "../dummyBackend/addressTable";

export default async function getAllAddressesByUserId(userId) {
  return Addresses.filter((address) => address.userId === userId);
}
