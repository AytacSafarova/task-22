let ul =document.querySelector('ul')
function getData(params) {
    
}
fetch('https://acb-api.algoritmika.org/api/transaction')
.then((result)=>{
return result.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
console.log(error);
})


// fetchden promise qayidir
// promise - soz vermek 
// promise 3 veziyyeti var

// 1. fetchle melumat cekilir
// 2. then vasitesile promise js objectine donderilib qaytarilir
// 3. diger thenle data goturulur