import TodoItems from "./TodoItems";

class TodoList extends React.Component {
    render() {
        return (
            <div>
                <div className="header">
                    <form>
                        <label>Enter Todo:</label>
                        <input type="text" />
                    </form>
                </div>
                <TodoItems />
            </div>
        )
    }
}

export default TodoList;