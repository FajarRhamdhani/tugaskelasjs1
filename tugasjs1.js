

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,40]
//var arr = [10, 8, 15, 20, 1, 5, 7, 9, 1, 2, 25, 30, 8, 11, 35, 8, 40, 33];
var arrnew =[]; 

for (let i = 0; i < arr.length; i++) {   
    //console.log(arr[i])
    var counter = 0;
     for (let j = 0; j < arr.length; j++) {
             if(arr[i] % arr[j] === 0 && arr[i] % 1 === 0){
                 counter+=1
             }
     }
     if(counter <= 2){
        arrnew.push(arr[i]);
     }
     
}
console.log(arrnew);
