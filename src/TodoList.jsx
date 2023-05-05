import { TodoItem } from './TodoItem'

export function TodoList({ todos, toggleTodo, deleteTodo }) {
	return (
		<ul className='list'>
			{todos.length === 0 && 'No todos'}
			{/* shortCirtcuit javascript concept, basicamente se "todos.lenght" for igual a 0 ele mostra a mensagem "No todos" */}
			{todos.map((todo) => {
				return (
					<TodoItem
						{...todo}
						key={todo.id}
						toggleTodo={toggleTodo}
						deleteTodo={deleteTodo}
					/>
				)
			})}
		</ul>
	)
}
