// const Deliveries = [
//   {
//     userId: "1",
//     id: "1",
//     donationTitle: "Clothing",
//     donationId: "1",
//     quantity: 10,
//     location: "Fort Worth",
//     condition: "Used",
//     description:
//       "A diverse assortment of fashionable clothing items, ranging from elegant dresses and tailored suits to cozy sweaters, trendy jeans, vibrant t-shirts, and accessories such as scarves, hats, and belts. This collection offers an extensive array of styles, colors, and fabrics to cater to every individual's unique fashion preferences and needs, making it easy to find the perfect ensemble for any occasion or season.",
//     dateAdded: "01-01-2024",
//     imageURI:
//       "https://www.highsnobiety.com/static-assets/dato/1682635705-how-to-care-for-clothes-02.jpg",
//     status: "In Transit",
//     driverName: "John Doe",
//     driverPhone: "1234567890",
//     driverEmail: "johndoe@gmail.com",
//     driverId: "1",
//     driverImageUri:
//       "https://cdn.discordapp.com/attachments/747489327260631099/1189359652656386080/driverImage.png?ex=659de07e&is=658b6b7e&hm=c32a3b308ae117cc89bbeae7c34d5143ff5de96bfaafd6852c184ac68ce50f7e&",
//   },
//   {
//     userId: "1",
//     id: "2",
//     donationTitle: "Food",
//     donationId: "1",
//     quantity: 20,
//     location: "Dallas",
//     condition: "New",
//     description:
//       "A diverse assortment of fashionable clothing items, ranging from elegant dresses and tailored suits to cozy sweaters, trendy jeans, vibrant t-shirts, and accessories such as scarves, hats, and belts. This collection offers an extensive array of styles, colors, and fabrics to cater to every individual's unique fashion preferences and needs, making it easy to find the perfect ensemble for any occasion or season.",
//     dateAdded: "01-02-2024",
//     imageURI:
//       "https://www.highsnobiety.com/static-assets/dato/1682635705-how-to-care-for-clothes-02.jpg",
//     status: "Pending",
//     driverName: "John Doe",
//     driverPhone: "1234567890",
//     driverEmail: "johndoe@gmail.com",
//     driverId: "1",
//     driverImageUri:
//       "https://cdn.discordapp.com/attachments/747489327260631099/1189359652656386080/driverImage.png?ex=659de07e&is=658b6b7e&hm=c32a3b308ae117cc89bbeae7c34d5143ff5de96bfaafd6852c184ac68ce50f7e&",
//   },
// ];

// export default Deliveries;

var deliveriesList = []

export const getDeliveriesList = () => {
  return deliveriesList
}

export const setDeliveriesList = (newList) => {
  deliveriesList  = newList
}

