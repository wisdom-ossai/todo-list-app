
import FlipMove from "react-flip-move"
class TodoItems extends React.Component {
    constructor(props) {
        super(props);
        this.createTasks = this.createTasks.bind(this);
    }
    createTasks(task) {
        return <li key={task.timeOfInput}>{task.userInput}<span className="delete-button" onClick={() => this.props.deleteTask(task.timeOfInput)}>x</span></li> 
    }
    render() {
        const tasksInputList = this.props.inputs;
        const tasksList = tasksInputList.map(this.createTasks);
        return (
            <div className="todoItemContainer">
                <ul>
                    <FlipMove easing="ease-out" duration={300}>
                     {tasksList}
                    </FlipMove>
                </ul>
            </div>
        )
    }
}

export default TodoItems;