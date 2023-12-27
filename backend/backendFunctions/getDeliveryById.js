import Deliveries from "../dummyBackend/deliveriesTable";

export default function getDeliveryById(id) {
  return Deliveries.find((delivery) => delivery.id === id);
}
