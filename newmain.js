var image, attach;
attach +=1
image = './img/logo.png';

document.querySelector('img').src = image;
document.querySelector('.tit').textContent = 'Pase Covid 19 Tracker Application';

document.getElementById('first').innerHTML = '<p>Total Cases</p>' ;
document.getElementById('second').innerHTML = '<p>Total Deaths</p>';
document.getElementById('third').innerHTML = '<p>Total Recovery</p>';
document.getElementById('forth').innerHTML = '<p>Total Active</p>';


// getData()
// console.log(data);
// async function getData(){
//   url = 'https://atos-tracker.herokuapp.com/'
//   const response = await fetch(url)
//   const data = await response.json()
  
// table.forEach(detail => {

//   const columns = detail
  
//     document.querySelector('.big-col').innerHTML = data
  
    //https://github.com/bibleapi/biblepearls.net.git
    //https://secret-cove-38447.herokuapp.com/api/v1
    //https://atos-covid.herokuapp.com/
    
//   // });
//   console.log(data)
// }


const getInfo = () => {
  const response = fetch('https://secret-cove-38447.herokuapp.com/api/v1')
  .then(response => response.json())
    
  // Total calculation of west africa cases
  .then( data => {
    let totalConfirm = 0
    let totalDeaths = 0
    let totalActive = 0
    let totalRecoveries = 0
    data.forEach((last,index) =>{
      totalDeaths+=Number(last.Deaths)
      totalConfirm += Number(last.Confirmed)
      totalRecoveries += Number(last.Recoveries)
      totalActive += Number(last.Active)
      if (index +1===data.length) {
      console.log(totalRecoveries)
      document.getElementById('deaths').innerHTML=`<span><strong>${totalDeaths}</strong></span>`
      document.getElementById('confirmed').innerHTML= `<div><span><strong>${totalConfirm}</strong></span></div>`
      document.getElementById('recover').innerHTML = `<span><strong>${totalRecoveries}</strong></span>`
      document.getElementById('active').innerHTML = `<span><strong>${totalActive}</strong></span>`
      }
        //creation of tables
       document.querySelector('.good').insertAdjacentHTML("afterbegin", 
            
        '<tr>'+ 
        '<td>' + last.Country + '</td>' +
        '<td>' + last.Confirmed + '</td>'  + 
        '<td>'+ last.Active + '</td>' +
        '<td>'+  last.Recoveries + '</td>' +
        '<td>'+  last.Deaths + '</td>' + 
        '</tr>'
           )

           
    
      // Another one
    // data['Covid 19 Cases'].forEach((last) => {
    //   console.log(last)
    //   document.querySelector('.good').append(
    //     last.Country, 
    //     last.Confirmed,
    //     last.Active,
    //     last.Recoveries,
    //     last.Deaths,
    //       '<br>'
    //     )
  
    });

           data['Covid 19 Cases'].forEach((item,index)=>{
             console.log(item.Deaths)
             
             

    
    })
    //  data.forEach((item,index) => {
    //      totalConfirm = item.Active + totalConfirm
    //  })
    
      
    
      
    //})

    //edited work
    // 
    // console.log("totalConfirm",totalConfirm)
    // for(i=0; i < data_constraint; i++){
    //   let seperator = document.createElement('div');
    // seperator.innerHTML = '&nbsp<br>';
    //   document.getElementById('dataCall').append(data[i].Active, seperator);

     

     

    // for (row in data){
    //   if (row <= 10){
    // //     let seperator = document.createElement('div');
    // // seperator.innerHTML = '&nbsp<br>';
    //   document.getElementById('dataCall').append(data[i].Active, seperator);
    //   }

    // }
    
   })
 
.catch(error => console.log(error))
}
getInfo()