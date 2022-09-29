import { useEffect } from 'react';
import './Task.css';
function Task() {
  //const [count, setCount] = useState(0);

  useEffect(() => {
    const tasks = async () => {
      const url = "http://localhost:8080/v1/task/tasks";
      try {
        const response = await fetch(url, {method: 'GET', headers: {'Content-Type': 'application/json'}});
        let data = await response.json();
        console.log(data);
        console.log(data);
        const main = document.querySelector("main");
        for ( let i of data) {
          const task = document.createElement("div");
          task.classList.add("task");
          const name = document.createElement("h1");
          name.classList.add("name");
          name.textContent = i.name;
          const description = document.createElement("h2");
          description.classList.add("description");
          description.textContent = i.description;
          const status = document.createElement("h2");
          status.classList.add("status");
          status.textContent = i.status;
          const assign = document.createElement("h2");
          assign.classList.add("assign");
          assign.textContent = i.assignedTo;
          const date = document.createElement("h2");
          date.classList.add("date");
          date.textContent = i.dueDate;
          task.append(name, description, status, assign, date);
          main.append(task);
        }
        return data;
        //let res1 = data.result;
       }catch (e) {
        console.log(e);
      }
    }
    tasks();
  })

  return (
      <main>
        </main>
    )
}
   
export default Task