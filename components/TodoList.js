import TodoItems from "./TodoItems";
import Button from '@material-ui/core/Button';
import '../style.scss'

class TodoList extends React.Component {
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
        var newTask = {
                userInput: this._inputElement.value,
                timeOfInput: Date.now() 
            }
        }

        this.setState(prevState => {
            return {
                tasksList: prevState.tasksList.concat(newTask)
            }
        })

        this._inputElement.value = "";        
    }

    deleteTask(taskKey) {
        this.setState((prevState) => ({
          ...prevState,
          tasksList: this.state.tasksList.filter(task => task.timeOfInput !== taskKey)
        }))
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
                <TodoItems inputs={this.state.tasksList} deleteTask={this.deleteTask.bind(this)} />
            </div>
        )
    }
}

export default TodoList;