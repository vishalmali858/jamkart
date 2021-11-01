export function fetchProducts() {
  return new Promise(function (resolve, reject) {
    let req = new XMLHttpRequest();
    req.open('GET', "https://test.ejam.com/api/recruitment/frontendtask1/products");
    req.onload = function () {
      if (req.status === 200) {
        resolve(JSON.parse(req.response));
      } else {
        reject({ errorCode: req.status });
      }
    };
    req.send();
  });
}