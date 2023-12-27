import Requests from "../dummyBackend/requestsTable";

export default async function getRequestById(RequestId) {
  const request = await Requests.find((request) => request.id === RequestId);
  console.log(request);
  return request;
}
