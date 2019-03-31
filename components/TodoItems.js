

class TodoItems extends React.Component {
    constructor(props) {
        super(props);
        this.createTasks = this.createTasks.bind(this);
    }
    createTasks(task) {
        return <li key={task.timeOfInput}>{task.userInput}<span className="delete-button" onClick={() => this.props.deleteTask(task.timeOfInput)}>X</span></li> 
    }
    render() {
        const tasksInputList = this.props.inputs;
        const tasksList = tasksInputList.map(this.createTasks);
        return (
            <div className="todoItemContainer">
                <ul>
                    {tasksList}
                </ul>
            </div>
        )
    }
}

export default TodoItems;