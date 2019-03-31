import TodoItems from "./TodoItems";
import Button from '@material-ui/core/Button';
import '../style.css'

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            itemsList: []
        }
    }

    addItems($event) {
        if(this._inputElement.value != '') {
            const newTodo = {
                text: this._inputElement.value,
                key: Date.now() 
            }
        }

        const newTodos = this.state.concat(newItem)

        this.setState({items: newTodos})
    }
    render() {
        return (
            <div className="container">
                <div className="header">
                    <form>
                        <input type="text" placeholder="Enter Todo"/>
                        <Button type="submit" variant="contained" color="primary">Add</Button>
                    </form>
                </div>
                <TodoItems />
            </div>
        )
    }
}

export default TodoList;