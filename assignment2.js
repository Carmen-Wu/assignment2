// FOR EACH //
Array.prototype.myEach = function (callbackFn) {
    for (let i = 0; i < this.length; i++) {   // "this" keyword refers to the array being called.
        if (this[i] === undefined) continue;
        // callbackFn can take up to 3 input parameters:
        // element
        // element, index
        // element, index, array
        callbackFn(this[i], i, this);   // callbackFn is "console.log(x,i,myArray)" 
    }
};

// MAP //
Array.prototype.myMap = function (callbackFn) {
    const newArray = [this.length];
    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined) {
        continue;}
      const result = callbackFn(this[i], i, this);
      newArray[i]=result;
    }
    return newArray;
}