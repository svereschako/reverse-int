module.exports = function reverse (n) {
  var num_string = n.toString();
  var array = num_string.split("");
  var reverse_arr = array.reverse();
  var res = reverse_arr.join("");
  res = Number.parseInt(res);
  return res;
}




