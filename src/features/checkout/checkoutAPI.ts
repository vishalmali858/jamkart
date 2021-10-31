export function sendShippingData(dataObjToSend: any) {
  return new Promise(function (resolve, reject) {
    resolve({
      data: {},
      id: "Asasasasasasasaas"
    })
    // let req = new XMLHttpRequest();
    // req.open('POST', "https://test.ejam.com/api/recruitment/frontendtask1/order");
    // req.setRequestHeader("Accept", "application/json");
    // req.onload = function () {
    //   if (req.status === 200) {
    //     resolve(JSON.parse(req.response));
    //   } else {
    //     reject({ errorCode: req.status });
    //   }
    // };
    // req.send(JSON.stringify(dataObjToSend));
  });
}