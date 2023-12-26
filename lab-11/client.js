const axios = require("axios");

async function start() {
  const res_a = await axios.post("http://localhost:7000/add", {
    name: "Margaret",
    age: 27,
    city: "London"
  });
  const res_a2 = await axios.post("http://localhost:7000/add", {
    name: "Colin",
    age: 43,
    phone_number: "Atlanta"
  });
  const res_d = await axios.post("http://localhost:7000/delete", {
    name: "Colin"
  });
  const res_c = await axios.get("http://localhost:7000/clients");
  console.log(res_c.data)
}
start();
