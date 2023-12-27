import Deliveries from "../dummyBackend/deliveriesTable";

const getAllDeliveriesByUserId = (userId) => {
  return Deliveries.filter((delivery) => delivery.userId === userId);
};

export default getAllDeliveriesByUserId;
