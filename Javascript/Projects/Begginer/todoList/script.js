document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.querySelector('#list');
    const addButton = document.querySelector('#add');
    const ul = document.querySelector("#list-items-parent");

    addButton.addEventListener("click", () => {
        addList(inputField);
    });

    inputField.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            addList(inputField);
        }
    });

    function addList(userInput) {
  
        const taskName = userInput.value.trim();

        if (taskName === "") {
            alert("Please enter a value");
            return;
        }

        // Check if the task already exists
        const listItems = ul.querySelectorAll('.list-items');
        let alreadyExists = false;

        listItems.forEach(item => {
            const listItemText = item.querySelector('span').textContent.trim();
            if (listItemText.toUpperCase() === taskName.toUpperCase()) {
                alreadyExists = true;
                return;
            }
        });

        if (alreadyExists) {
            alert("Task already exists in the list");
            userInput.value = '';
            return;
        }

        // Create new list item
        const li = document.createElement('li');
        li.classList.add('list-items');

        const span = document.createElement('span');
        span.textContent = taskName;

        span.addEventListener("click", function() {
            // Toggle the 'completed' class to manage styles
            this.classList.toggle('completed');
        });
        

        const button = document.createElement('button');
        button.textContent = "Delete";
        button.classList.add('delete');
        button.addEventListener("click", function() {
            this.parentElement.remove();
        });

        li.appendChild(span);
        li.appendChild(button);
        ul.appendChild(li);

    
        // Clear input field after adding task
        userInput.value = '';
    }
});
