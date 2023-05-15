let word = "Hello Lavanya";

let rstring = (str) => {
  let converToArray = str.split(" ");
  console.log(converToArray);

  let getname = converToArray.map((rev) => {
    return rev.split("").reverse().join("");
  });
  console.log(getname);
  return getname;
};

rstring(word);
