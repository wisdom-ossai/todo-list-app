import TodoItems from "./TodoItems";
import Button from '@material-ui/core/Button';
import '../style.css'

class TodoList extends React.Component {
    newTask;
    constructor(props) {
        super(props);
        this.state = {
            tasksList: []
        }

        this.addTasks = this.addTasks.bind(this);
    }

    addTasks(event) {
        event.preventDefault();
        if(this._inputElement.value !== '') {
            this.newTask = {
                userInput: this._inputElement.value,
                timeOfInput: Date.now() 
            }
        }

        this.setState(prevState => {
            return {
                tasksList: prevState.tasksList.concat(this.newTask)
            }
        })

        this._inputElement.value = "";
        console.log(this.state.tasksList); 
        
    }
    render() {
        return (
            <div className="container">
                <div className="header">
                    <form onSubmit={this.addTasks}>
                        <input type="text" placeholder="Enter Todo" ref={val => this._inputElement = val}/>
                        <Button type="Submit" variant="contained" color="primary">Add</Button>
                    </form>
                </div>
                <TodoItems />
            </div>
        )
    }
}

export default TodoList;