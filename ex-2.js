//Exercise #2
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};

// Start coding here
function runGetJohnProfile (data) {
  return console.log(data)
};

function errorGetJohnProfile (error) {
  return console.log(error);
}

getJohnProfile().then(runGetJohnProfile).catch(errorGetJohnProfile);
