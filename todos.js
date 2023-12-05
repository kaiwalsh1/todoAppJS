let input = prompt('What would you like to do?');
const todos = ['Drink coffee', 'Take a walk', 'Call friend'];

while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('***********');
        for (let i = 0; i < todos.length; i++){
            console.log(`${i}: ${todos[i]}`);
        }
    } else if (input === 'new') {
        const newTodo = prompt('Okay, what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);
    } else if (input === 'delete') {
        const index = parseInt(prompt('Enter the index of the todo you want to remove:'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Okay, deleted ${deleted[0]}`);
        } else {
            console.log('Unknown index');
        }
    }
    input = prompt('What would you like to do?');
}
console.log('Okay, quit the app.');