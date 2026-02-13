import "./TodoList.css";
import { useEffect, useState } from "react";

const todoList = [
  // { id: 1, task: "첫번째할일", isDone: false },
  // { id: 2, task: "두번째할일", isDone: true },
  // { id: 3, task: "세번째할일", isDone: false },
];

function TodoItem({ todo, isDoneToggle, deleteTodo }) {
  return (
    <li className={todo.isDone ? "completed" : ""}>
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={() => {
          isDoneToggle(todo.id);
        }}
      />
      <span>{todo.task}</span>
      <button
        onClick={() => {
          deleteTodo(todo.id);
        }}
      >
        ✖️
      </button>
    </li>
  );
}
// 할 일 추가 함수

function TodoList() {
  //로컬스토리지 데이터로 초기화
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  // useState
  const [todoValue, setTodoValue] = useState("");
  function addTodo() {
    // 1.할일을 추가해서 새로운 할일 배열 만들기

    if (!todoValue.trim()) return;
    const newTodos = [
      ...todos,
      { id: Date.now(), task: todoValue.trim(), isDone: false },
    ];
    // 2. 기존할일을 새로운 할일로 바꾸기
    setTodos(newTodos);
    setTodoValue("");
  }
  // 토글 함수
  function isDoneToggle(id) {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
    );
    setTodos(newTodos);
  }
  // 할 일 삭제 함수
  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  // 전체 삭제 함수
  function alldelete(id) {
    setTodos([]);
  }
  //완료목록삭제
  function deleteCompleted() {
    const newTodos = todos.filter((todo) => !todo.isDone);
    setTodos(newTodos);
  }
  const completedCount = todos.filter((todo) => todo.isDone).length;
  const totalCount = todos.length;

  return (
    <div className="container">
      <h1>📝 Todo List</h1>
      <div className="input-box">
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          value={todoValue}
          onChange={(e) => {
            setTodoValue(e.target.value);
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              addTodo();
            }
          }}
        />

        <button className="btn" onClick={addTodo}>
          할일 추가
        </button>
        <button className="alldeletebtn" onClick={alldelete}>
          전체 삭제
        </button>
        <button className="deleteComplete" onClick={deleteCompleted}>
          완료 정리
        </button>
      </div>
      <div className="todo-footer">
        <p>
          완료 {completedCount} / 전체 {totalCount}
        </p>
      </div>

      <ul className="todo-list">
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            todo={item}
            isDoneToggle={isDoneToggle}
            deleteTodo={deleteTodo}
            alldelete={alldelete}
          />
        ))}
        {/* <li>
          <input type="checkbox" />
          <span>두번째 할일</span>
          <button>✖️</button>
        </li>
        <li className="completed">
          <input type="checkbox" defaultChecked="true" />
          <span>첫번째 할일</span>
          <button>✖️</button>
        </li>
        <li>
          <input type="checkbox" />
          <span>세번째 할일</span>
          <button>✖️</button>
        </li> */}
      </ul>
    </div>
  );
}

export default TodoList;
