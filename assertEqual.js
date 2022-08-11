const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`😓 Assertion Failed: ${actual} !== ${expected}`);
  }

};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);
assertEqual("this_works","this_works");
assertEqual("jevaughn","williams");
assertEqual(200,12);
assertEqual(42,42);
assertEqual("Jevaughn",'jevaughn');