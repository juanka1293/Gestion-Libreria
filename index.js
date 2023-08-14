document.addEventListener("DOMContentLoaded", function () {
    const userForm = document.getElementById("user-form");
    const userList = document.getElementById("user-list");
    const cancelButton = document.getElementById("cancel-button"); 

    let users = [];
    let editingUserId = null;

    userForm.addEventListener("submit", function (e) { 
        e.preventDefault();

        const username = document.getElementById("username").value;
        const status = document.getElementById("status").value;
        const name = document.getElementById("name").value;


        if (editingUserId) {
            updateUser(editingUserId, username, status, name);
        } else {
            addUser(username, status, name);
        }

        userForm.reset();
        editingUserId = null;
        cancelButton.style.display = "none";
    });
    cancelButton.addEventListener("click", function () { 
        userForm.reset();
        editingUserId = null;
        cancelButton.style.display = "none";
    });
    function addUser(username, status, name) {
        const user = {
            id: new Date().getTime(),
            name: name,
            username: username,
            status: status
        };

        users.push(user);
        renderUsers();
    }
    function updateUser(id, username, status, name) {
        const userIndex = users.findIndex(user => user.id === id);

        if (userIndex !== -1) {
            users[userIndex].username = username;
            users[userIndex].status = status;
            users[userIndex].name = name;
            renderUsers();
        }
    }
});