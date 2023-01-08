console.log("Battle of the characters ");
const mealsColumns = new Set(["idmeals", "title", "number_of_guests"]);
function isValidData(data) {
  let validData = {};
  console.log(validData);
  // looping through the data object
  for (const key in data) {
    console.log(key);
    // checking if the mealsColumn has the key
    if (mealsColumns.has(key)) {
      console.log("vd before", validData);
      validData[key] = data[key];
      console.log("vd after", validData);
    } else {
      console.log("ignore");
    }
  }
  console.log(validData);
  return validData;
}

console.log(
  isValidData({
    title: "Pita",
    number_of_guests: 1,
  })
);
