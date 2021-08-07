let TODO_LIST = [];

function createToDo() {
    const titleElement = document.querySelector("#todoTitle");
    const descriptionElement = document.querySelector("#todoDescription");

    const todo = {
        title: titleElement.value,
        description: descriptionElement.value
    };

    TODO_LIST.push(todo);
    updateList()
    console.log(TODO_LIST);
}

function updateList() {
    const tableContent = updatedToDoTable();
    const tableBody = document.querySelector("#todoTable tbody");
    tableBody.innerHTML = tableContent;

}

function updatedToDoTable() {

    let tableContent = ``;

    TODO_LIST.map((todo, index) => {
        tableContent += `<tr>
        <td>${todo.title}</td>
        <td><button> Edit </button></td>
        <td><button onclick = "deleteToDo(${index})"> Delete </button></td>
        <td>${todo.description}</td>
    </tr>`
    });


    return tableContent;
}

function deleteToDo(todoIndex){

    const newToDoList = TODO_LIST.filter((todo,index) => index != todoIndex);
    TODO_LIST = newToDoList;
    updateList()


}

// {/* <td><i class="fa fa-pencil"></i></td>
//         <td><i class="fa fa-trash-o"></i></td> */}