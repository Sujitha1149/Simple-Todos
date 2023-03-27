import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  onDeleteTodo = () => {
    const {todoList, onDelTodo} = this.props
    const {id} = todoList
    onDelTodo(id)
  }

  render() {
    const {todoList} = this.props
    const {title} = todoList
    return (
      <li className="todo-Item-cont">
        <div className="para-cont">
          <p className="para">{title}</p>
        </div>
        <div className="para-cont">
          <button type="button" className="button" onClick={this.onDeleteTodo}>
            Delete
          </button>
        </div>
      </li>
    )
  }
}
export default TodoItem
