import { getRequestsList } from "../backendLists/requestsTable";

export default async function getRequestById(RequestId) {
  const request = await getRequestsList().find((request) => request.id === RequestId);
  return request;
}
