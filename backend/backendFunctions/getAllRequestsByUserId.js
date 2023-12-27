import Requests from "../dummyBackend/requestsTable";

export default async function getAllRequestsByUserId(userId) {
  return Requests.filter((request) => request.userId === userId);
}
