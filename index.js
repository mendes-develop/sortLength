// Write a function that given a list of strings, returns the list sorted based on the length of each string.

let array = ["zebra", "lea", "ali", "alex", "palindrome", "sky"]

function bubbleSort(arr){
   var len = arr.length;
   for (var i = len-1; i>=0; i--){
     for(var j = 1; j<=i; j++){
       if(arr[j-1].length > arr[j].length){
           let temp = arr[j-1];
           arr[j-1] = arr[j];
           arr[j] = temp;
        }
     }
   }
   return arr;
}

let newArray = bubbleSort(array)
console.log(newArray)
