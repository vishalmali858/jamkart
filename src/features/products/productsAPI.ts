const productArray = [
  { "name": "1 Box of CleanWash", "description": "10% OFF: 1 Box of CleanWash (15 sheets)", "currency": "USD", "price": 14.97, "shippingPrice": 5.99, "imageUrl": "https://d3hlrrbqydii6y.cloudfront.net/img/ed2e384de02b75a91069c7a8232f0f12.jpeg", "id": "1121" },
  { "name": "2 Box of CleanWash", "description": "15% OFF: 1 Box of CleanWash (30 sheets)", "currency": "USD", "price": 40, "shippingPrice": 5.99, "imageUrl": "https://d3hlrrbqydii6y.cloudfront.net/img/ed2e384de02b75a91069c7a8232f0f12.jpeg", "id": "1122" },
  { "name": "3 Box of CleanWash", "description": "25% OFF: 1 Box of CleanWash (60 sheets)", "currency": "USD", "price": 80, "shippingPrice": 5.99, "imageUrl": "https://d3hlrrbqydii6y.cloudfront.net/img/ed2e384de02b75a91069c7a8232f0f12.jpeg", "id": "1123" },
  { "name": "4 Box of CleanWash", "description": "40% OFF: 1 Box of CleanWash (90 sheets)", "currency": "USD", "price": 120, "shippingPrice": 0, "imageUrl": "https://d3hlrrbqydii6y.cloudfront.net/img/ed2e384de02b75a91069c7a8232f0f12.jpeg", "id": "1124" },
  { "name": "5 Box of CleanWash", "description": "60% OFF: 1 Box of CleanWash (120 sheets)", "currency": "USD", "price": 160, "shippingPrice": 0, "imageUrl": "https://d3hlrrbqydii6y.cloudfront.net/img/ed2e384de02b75a91069c7a8232f0f12.jpeg", "id": "1125" }]
export function fetchProducts() {
  return new Promise(function (resolve, reject) {
    resolve(productArray);
    // let req = new XMLHttpRequest();
    // req.open('GET', "https://test.ejam.com/api/recruitment/frontendtask1/products");
    // req.onload = function () {
    //   debugger
    //   if (req.status === 200) {
    //     resolve(JSON.parse(req.response));
    //   } else {
    //     reject({ errorCode: req.status });
    //   }
    // };
    // req.send();
  });
}