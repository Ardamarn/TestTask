class Group {
  constructor(type, inp, todos, groupName) {
    this.type = type;
    this.arr = [];
    this.doneArr = [];
    this.inp = inp;
    this.todos = todos;
    this.groupName = groupName;
  }

  addTodo() {
    const newTodo = document.getElementById(this.inp);
    if (newTodo.value === null || newTodo.value === "") {
      alert("no todo");
    } else {
      this.arr.push({
        type: this.type,
        value: newTodo.value,
        isDone: false,
        number: this.arr.length,
      });
      newTodo.value = "";
    }
    console.log(this.arr);
  }

  delTodo(n) {
    // const deleteN = arrTodos.splice(n, 1);
    delete this.arr[n];
    console.log(this.arr);
    this.render();
  }

  doneTodo(n) {
    this.doneArr.push(this.arr[n]);
    console.log(this.doneArr);
    delete this.arr[n];
    this.render();
  }

  delDoneTodo(n) {
    delete this.doneArr[n];
    console.log(this.doneArr);
    this.showDone();
  }

  showDone() {
    const doneCont = document.getElementById(this.todos);
    const items = this.doneArr.map((obj) => {
      return `
 <div> 
 <p>${obj.value}</p>
 <button onclick = "${this.groupName}.delDoneTodo(${obj.number})">Удалить</button>
 </div>
  `;
    });

    doneCont.innerHTML = items;
    console.log(this.doneArr);
  }

  cleanArea() {
    const area = document.getElementById(this.todos);
    area.innerHTML = "";
  }

  render() {
    const todosCont = document.getElementById(this.todos);
    todosCont.innerHTML = "";

    const template = (title, n, groupName) => {
      return `   <div>
               <p>Номер ${n}</p>
             <p>${title}</p>
              <button onclick = "${groupName}.doneTodo(${n})">Выполнено</button>
            <button onclick = "${groupName}.delTodo(${n})">Удалить</button>
      </div>`;
    };
    const items = this.arr.map((obj) =>
      template(obj.value, obj.number, this.groupName)
    );
    todosCont.innerHTML = items.join("\n");
  }
}

const myTodos = new Group("My Todos", "inpMy", "todosMy", "myTodos");
const workTodos = new Group("Work Todos", "inpWork", "todosWork", "workTodos");
const wishTodos = new Group("Wish Todos", "inpWish", "todosWish", "wishTodos");

renderTodo = (name, groupName, idInp, idTodos) => {
  const area = document.getElementById("area");
  area.innerHTML = "";
  const template = `
   <div class="col">
            <h1>${name}</h1>
            <div>
                <button onclick="${groupName}.render()">ждут выполнения</button>
                <button onclick="${groupName}.showDone()">выполненные</button>
            </div>
            <label for="name">Введите задачу</label>
            <div>
                <input onfocus="${groupName}.cleanArea()" type="text" id="${idInp}">
            </div>
            <button onclick="${groupName}.addTodo()">готово</button>
            <div id="${idTodos}">
            </div>
        </div>
  `;
  area.innerHTML = template;
};
