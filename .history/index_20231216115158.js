let ul =document.querySelector('ul')
function getData() {
    fetch('https://acb-api.algoritmika.org/api/transaction')
    .then((result)=>{
    return result.json()
    })
    .then((data)=>{
       showData(data)
    })
    .catch((error)=>{
    console.log(error);
    }) 
}
getData()

function showData(data){
    data.forEach(element => {
        ul.innerHTML=`
        <li>
        <h2>${element.from}</h2>
        <h3>${element.to}</h3>
        <p>${}</p>
    </li>
    <hr>
        
        `
    });
    console.log('melumat', data);
}
// fetchden promise qayidir
// promise - soz vermek 
// promise 3 veziyyeti var

// 1. fetchle melumat cekilir
// 2. then vasitesile promise js objectine donderilib qaytarilir
// 3. diger thenle data goturulur