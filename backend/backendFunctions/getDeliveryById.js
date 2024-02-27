import { getDeliveriesList } from "../backendLists/deliveriesTable";

export default function getDeliveryById(id) {
  return getDeliveriesList().find((delivery) => delivery.id === id);
}
