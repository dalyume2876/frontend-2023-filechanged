// todo 구현 실습

type TodoPractice = {
    id:number
    text:string
    done:boolean
}

// todo 실행
let todos: TodoPractice[] = []

// 할 일 리스트 가져오기

async function fetchTodos(): Promise<TodoPractice[]> {
    return new Promise(resolve => {
        setTimeout(() => resolve(todos), 1000) //1초 후 todos 배열을 반환
    })
}

// 할 일 추가
async function addTodo(todoText: string): Promise<void>{
    return new Promise(resolve => {
        setTimeout(() => {
            const newTodo: TodoPractice = {
                id: Date.now(),
                text: todoText,
                done: false
            }
            // 생성한 객체를 todos배열에 추가
            todos.push(newTodo);
            resolve();
        }, 1000)
    })
}

// 할 일 삭제
async function deleteTodo(id: number): Promise<void> {
    return new Promise(resolve => {
        setTimeout(() => {
            todos = todos.filter(todo => todo.id !== id);
            resolve();
        }, 1000);
    })
}

// html 요소를 가져와 이벤트 리스너 등록
const formE1 = document.getElementById('todo-form') as HTMLFormElement
const inputE1 = document.getElementById('todo-input') as HTMLInputElement
const listE1 = document.getElementById('todo-list') as HTMLUListElement

// 할 일 추가
formE1.addEventListener(`submit`, async (event) => {
    event.preventDefault();

    const newTodoText = inputE1.value.trim();
    if(newTodoText){
        await addTodo(newTodoText)
        inputE1.value = '';
        renderTodos();
    }
})

// 할 일 목록 렌더링
async function renderTodos() {
    // 최신 할 일 목록 조회
    const todos = await fetchTodos();
    // 현재 할 일 목록을 초기화 (모든 할 일을 지움)
    listE1.innerHTML = '';

    todos.forEach(todo => {
        // 새로운 'li' HTML 요소 생성
        const listItemE1 = document.createElement('li')

        // 새로 생성한 li요소에 'todo-item' class 명 추가
        listItemE1.classList.add('todo-item')

        // li 요소에 텍스트를 현재 할 일의 텍스트로 변경 
        listItemE1.textContent = todo.text;

        // 새로운 'Button' HTML 요소 생성
        const deleteButton = document.createElement('button')

        // 생성한 버튼의 텍스트를 'Delete'로 설정
        deleteButton.textContent = 'Delete'

        // Delete 버튼에 이벤트 추가
        deleteButton.addEventListener('click', async () => {
            await deleteTodo(todo.id);
            // 삭제 후 전체 할 일을 렌더링
            renderTodos();
        })

        // li 요소에 생성한 delete 버튼 추가
        listItemE1.appendChild(deleteButton);

        // 전체 할 일 목록에 현재 li 요소 추가
        listE1.appendChild(listItemE1)
    })
}

renderTodos