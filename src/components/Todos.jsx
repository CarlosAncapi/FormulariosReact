import Todo from "./Todo";

const Todos = ({todos, deleteTodo}) => {
    return (
        <div className="mt-5">
            <h2 className="text-center mb-5">Todos</h2>
            <ul className="list-group">
                {todos.map((todo) => (
                        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
                    ))}
                    {
                        todos.length === 0 && (
                        <li className="list-group-item text-center">Sin Todos</li>
                        )
                    }
            </ul>
        </div>
    )
};

export default Todos;