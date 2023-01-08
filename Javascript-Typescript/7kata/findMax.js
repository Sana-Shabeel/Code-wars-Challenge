function find_max(nums) {
  let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers

  // console.log(0 > max_num);

  for (let num of nums) {
    // console.log(num);

    if (num > max_num) {
      // (Fill in the missing line here)

      max_num = num;
    }
  }

  console.log(max_num);
  return max_num;
}

console.log(find_max([8, 1, 2, 3, 4]));
