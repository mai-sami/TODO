const endpoint = "https://jsonplaceholder.typicode.com/posts"
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(xhr.response)
        console.log(data);
        const html = data.slice(0, 4)
            .map(item => {
                return ` <div id="cards" class="card">
         <p id="Title" class="Title"> ${item.title.substr(0, 15)}</p>
        <p id="body" class="subTitles"
          > ${item.body.substr(0, 100)}</p>
      </div>`}).join("")
        console.log(html)
        document.getElementById('cards').insertAdjacentHTML("afterbegin", html)
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
        throw Error('sth went wrong');
    }
};

xhr.open('GET', endpoint);
xhr.send();


// show data use fetch
//  function DataCards() {
//     fetch(endpoint)
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data, "sfgf bdf")
//             const html = data.slice(0, 3)
//                 .map(item => {
//                     return ` <div id="cards" class="card">
//      <p id="Title" class="Title"> ${item.title.substr(0, 15)}</p>
//     <p id="body" class="subTitles"
//       > ${item.body.substr(0, 100)}</p>
//   </div>`}).join("")
//             console.log(html)
//             document.getElementById('cards').insertAdjacentHTML("afterbegin", html)

//         })
// }
const showForm = () => {
    Forms.style.display = 'flex'
    Icons.style.display = 'flex'
    ADDIcons.style.display = 'none'
    card.style.display = 'none'
}

const card = document.getElementById('cards')
const Forms = document.getElementById('form')
const Icons = document.getElementById('icons__actions')
const ADDIcons = document.getElementById('add__cards')
Forms.style.display = 'none'
Icons.style.display = 'none'


function addForm() {
    console.log('nddfgf')
    const addTitles = document.getElementById('titles')
    const addSubTitles = document.getElementById('sub__titles')
    let addTitlesInput = addTitles?.value || ''
    let addSubTitlesInput = addSubTitles?.value || ''
    if (addSubTitlesInput.length == 0 && addTitlesInput.length == 0) {
        alert("please add some text")
    }
    else {
        fetch(endpoint, {
            method: "POST",
            body: JSON.stringify(
                {
                    id: "3",
                    title: addTitlesInput,
                    body: addSubTitlesInput
                }
            ),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(res => res.json())
            .then(json => console.log(json))
        alert(`Your title is:${addTitlesInput},Your title is:${addSubTitlesInput} Look in console..................!!!!!!!!!`)
        Forms.reset()
        Forms.style.display = 'none'
        Icons.style.display = 'none'
        ADDIcons.style.display = 'flex'
        card.style.display = 'block'

    }
}
const cancelForm = () => {
    Forms.reset()
    Forms.style.display = 'none'
    card.style.display = 'block'
    Icons.style.display = 'none'
    ADDIcons.style.display = 'flex'

}
DataCards()