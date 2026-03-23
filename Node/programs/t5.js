// given an array of n elements, create a function fs which creates an object that has first element as key and 
// last element of array as its value

const ari = ["abc","xyz","pqr","mno"]

function fs(arr){
    let n = 4
    let obj = {}
    for (x in arr){
        obj[arr[x]]=arr[n-1]
        n=n-1
    }
    return obj
}

console.log(fs(ari))
