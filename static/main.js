
var form = document.getElementById("todo");

form.addEventListener("submit", function(e){
    var item = document.getElementById("item");
    if (item.value === ''){
        alert("Please enter todo");
    }
    else{
        // create an li element using javascript
        var li = document.createElement('li');

        // add class for the li
        li.className = 'collection-item';

        // create a text node and append the li
        li.appendChild(document.createTextNode(item.value));

        // create link for deleting todo
        var deleteLink = document.createElement('a');

        // give the link a class name
        deleteLink.className = 'secondary-content'; 

        // add the icon for delete
        // deleteLink.innerHTML = '<i class="material-icons">delete</i>';
        deleteLink.innerHTML = '<i class="fa fa-trash" style="font-size:24px"></i>';

        // lets append the deletelink to the item
        li.appendChild(deleteLink);

        // add the li to the ul
         var tasklist = document.getElementById('todo_holder');
         tasklist.appendChild(li);

        //  clear input after submission
        item.value = "";
    }

    e.preventDefault();
})

// deleting a todo from todos
var todolist = document.getElementById('todo_holder');

// listen for the click on the delete icon
todolist.addEventListener('click', removetask);

function removetask(e){
    if (e.target.parentElement.classList.contains('secondary-content')){
        e.target.parentElement.parentElement.remove();
        console.log("fine");
    }
}