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
    const newArray = [this.length]; //initialized new array 
    for (let i = 0; i < this.length; i++) { // loop through every index of array
      if (this[i] === undefined) {
        continue;}
      const result = callbackFn(this[i], i, this); // 3 parameters 
      newArray[i]=result;
    }
    return newArray; //return newArray 
}

// SOME // 
Array.prototype.mySome = function(callbackFn) {
    const bool = new Boolean(false); 
    for (let i = 0; i < this.length; i++) { //loop through every index of array
      if (this[i] === undefined) { //if index is empty, continue to next index
        //if (callbackFn(this[i]) === true) {bool = true;}
        continue;}
      const result = callbackFn(this[i], i, this); //3 parameters
      if (result) {return result;}
      
    }
    return bool;
  };

  // REDUCE // 
  Array.prototype.myReduce = function(callbackFn, initialValue) {
    for (let i = 0; i < this.length; i++) { // loop through every index of array
      if (this[i] === undefined) { //if index is empty, continue to next index
        continue;}
      if(initialValue === undefined){ 
        initialValue = this[i]; //set initialValue as array index
        continue;
      }
      const result = callbackFn(initialValue,this[i], i, this, initialValue );
      initialValue = result;
    }
    return initialValue;
  }

  // INCLUDES //
  Array.prototype.myIncludes = function(searchElement,fromIndex) {
    if(fromIndex > this.length){ //start index cannot be greater than length of array
      return false;
    }
    if(fromIndex< 0){
      fromIndex = this.length + fromIndex;
    }
    if (fromIndex != undefined){
      return (this[fromIndex] === searchElement);
    }
    
    for (let i = 0; i < this.length; i++) { // loop through every index of array
      if(Number.isNaN(searchElement)){
        if(Number.isNaN(this[i])){
        return true;
        }
      }
      else{
        if(this[i] === searchElement){ // if elememet found, return true
        return true;
        }
      }
    }
    return false;
  };
  
 // myIndex//
 Array.prototype.myIndexOf = function(searchElement, fromIndex) {
  if(fromIndex=== undefined){
    fromIndex = 0; //initialze fromIndex if it is not given to 0
  }
  if(fromIndex< 0){
    fromIndex = this.length + fromIndex;
  } 
  for (let i = fromIndex; i < this.length; i++) { //scanning through element from starting element
    if(this[i] === searchElement){ // if element matched 
    return i;// return position of index
    }
  }
  return -1;// not found
};

//myPush//
Array.prototype.myPush = function(...args) {  // Use rest parameter to accept any number of input arguments
  let args_index = 0;  // Index of new element
  let length = this.length;   // Length of "this" array
  // The last element of "this" array is at length - 1
  for (let i = length; i < length + args.length; i++) {
      this[i] = args[args_index];  // Add new element to end of "this" array
      args_index++;
  }
  return this.length;  // Return new length of "this" array
};

//myLastIndexOf//
Array.prototype.myLastIndexOf = function(searchElement, fromIndex) {
if(fromIndex=== undefined){
  fromIndex = this.length; //initialze fromIndex from the lenth of array
}
if(fromIndex< 0){
  fromIndex = this.length + fromIndex;
} 
for (let i = fromIndex; i >= 0; i--) { //scan from the last index to the first index
  if(this[i] === searchElement){// if matched
  return i; // return position of index
  }
}
return -1;// not found
};

//myKeys//
Object.myKeys = function(obj) {
let obj_name = [obj.size]; 
let i = 0; // initialize index to 0
for (var name in obj){ // loop all enumerable property name
  obj_name[i] =name; // input enumerable property name into this index
  i++; // increment index
}
return obj_name; //return enumerable property names
}

//myValues//
Object.myValues = function(obj) {
let obj_value = [obj.size];
let i = 0; // initialize index to 0
for (var name in obj){ // loop all enumerable property name
  obj_value[i] = obj[name]; // input enumerable property value into this index
  i++; // increment index
}
return obj_value;//return enumerable property value
};
