// from the sprint `Implement Modular Programming using Functions`

function calculateAreaOfSquare(side) {
   if (typeof side == 'undefined') {
      return "insufficient inputs";
   }
   else if (typeof side !== 'number') {
      return "invalid input type";
   } else if (side <= 0) {
      return "incorrect input";
   }
   else
      return side * side;
}

function calculateAreaOfCircle(radius) {
   if (typeof radius == 'undefined') {
      return "insufficient inputs";
   }
   else if (typeof radius !== 'number') {
      return "invalid input type";
   } else if (radius <= 0) {
      return "incorrect input";
   }
   else
      return (3.14 * radius * radius);
}

function calculateAreaOfRectangle(length, width) {

   if (typeof length == 'undefined' || typeof width == 'undefined') {
      return "insufficient inputs";
   }
   else if (typeof length !== 'number' || typeof width !== 'number') {
      return "invalid input types";
   } else if (length <= 0 || width <= 0) {
      return "incorrect input";
   }
   else
      return length * width;
}




// do not delete the below code, it is written to export the functions to be tested
module.exports = {
   calculateAreaOfCircle,
   calculateAreaOfRectangle,
   calculateAreaOfSquare
}