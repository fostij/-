const table = document.getElementById('list')
const getUrl = 'https://developer.wtgspain.com/interview-task/list?page=1';
// const createUrl = 'https://developer.wtgspain.com/interview-task/create';
// console.log(createUrl);
// const deleteUrl = 'https://developer.wtgspain.com/interview-task/delete';
// console.log(deleteUrl);
// const updateUrl = 'https://developer.wtgspain.com/interview-task/update';
// console.log(updateUrl);

const delay = (ms) => {
    return new Promise(r => setTimeout(()=> r(), ms))
}

// function fetchTodos() {
//     console.log('Fetch data started ...');
//     return delay(2000)
//     .then(() => fetch(getUrl))
//     .then(response => response.json())
// }

// fetchTodos()
//     .then(data => {
//         console.log(data)
// })
// .catch((e) => {
//     console.error(e);
// })

const tableArray = [];
console.log(tableArray)

async function fetchAsyncData() {
    console.log('Fetch data started ...');
    try {
        await delay(2000)
        const response = await fetch(getUrl);
        const data = await response.json();
        tableArray.push(data);
        console.log(data);
    } catch(e) {
        console.error(e);
    }   
}

function addTable() {
    
}

fetchAsyncData();



// function createUrl() {

// }

// function reguestDelete() {
    
// }

// function reguestUpdate() {
    
// }