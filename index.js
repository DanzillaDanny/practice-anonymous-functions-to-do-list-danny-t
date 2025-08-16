const toDos = [
  { task: "Wash the dishes", completed: false, priority: 3 },
  { task: "Write a blog post", completed: true,  priority: 1 },
  { task: "Buy groceries",    completed: false, priority: 2 },
  { task: "Study JavaScript", completed: true,  priority: 1 },
  { task: "Walk the dog",     completed: false, priority: 2 },
];

 /* 🔹 Task 1: Filter Incomplete Tasks
  
Step-by-Step:
1. Use the `filter()` method on the todos array.
2. Use an anonymous function as the callback.
3. Return only the tasks that are not completed.
*/

// Assuming you have a toDo array, filter it first

//I created a new constant call incompleteTasks 
// and then used `filter()` on the toDo array
//to create a new array with only incomplete tasks.
//
const incompleteTasks = toDos.filter (function(tasks) { 
    return tasks.completed === false;
});

// Print just the task names, one per line

console.log(`Incomplete Tasks:
${incompleteTasks.map(t => t.task).join("\n")}`);

 /*
🔹 Task 2: Sort Tasks by Priority
  
Step-by-Step:
1. Use the `sort()` method on the todos array.
2. Use an anonymous function as the comparison function.
3. Sort tasks in ascending order of priority (1 = highest).
*/

const prioritizedTasks = toDos.sort(function(a, b) {
    return a.priority - b.priority; // return 1-3 priority ascending
});

console.log(`Prioritized Tasks: ${prioritizedTasks.map(t => t.task).join("\n")}`);

/*
🔹 Task 3: Mark All Tasks as Completed
  
Step-by-Step:
1. Use the `map()` method to return a new array.
2. Use an anonymous function to modify each object.
3. Change the `completed` property to `true` for every task.
*/
  

const completedList = toDos.map(function (todo) {
return { ...todo, completed: true };        // keep only completed
});

console.log(`Completed Tasks:
${completedList.map(function (todo) { return todo.task; }).join("\n")}`);

/*
🔹 Task 4: Combine Filters
  
Step-by-Step:
1. First, filter the todos to get only incomplete tasks.
2. Then, sort the filtered results by priority using `sort()`.
3. Use method chaining to perform both steps together.
*/

const sortedIncomplete = toDos
  .filter(function (todo) { return !todo.completed; })
  .sort(function (a, b) { return a.priority - b.priority; });
console.log(`Sorted Incomplete Tasks:
${sortedIncomplete.map(todo => todo.task).join("\n")}`);

console.log(`Sorted Incomplete Tasks:
${sortedIncomplete.map(todo => todo.task).join("\n")}`);