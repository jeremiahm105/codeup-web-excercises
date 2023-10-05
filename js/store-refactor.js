
//CREATED USING FETCH.THEN


// function updateStore() {
//     fetch('data/inventory.json')
//         .then(response => {
//
//             return response.json();
//         })
//         .then(data => {
//             console.log(data);
//             $("#insertProducts").html('');     
//             data.forEach(function (products) {              
//                 $("#insertProducts").append(                
//                     `<tr>
//             <td>${products.title}</td>
//             <td>${products.quantity}</td>
//             <td>${products.price}</td>
//             <td>${products.categories}</td>
//             </tr>`);
//             });
//         });
//
// }


// CREATED USING ASYNC AND AWAIT

const updateStore = async () =>  {
    const url = `data/inventory.json`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      return data;

    } catch (error) {
      console.log(error);

    }
}
function buildTable (data) {
    $("#insertProducts").html('');        
    data.forEach(function (products) {                                                                 
        $("#insertProducts").append(               
            `<tr>
             <td>${products.title}</td>
             <td>${products.quantity}</td>
             <td>${products.price}</td>
             <td>${products.categories}</td>
             </tr>`);
    });

}

 (async () => { 
     const inventory = await updateStore()
     buildTable(inventory)
     
 })();