
const TodoData = (props) => {
    const { name, age, data } = props  // Lấy ra 3 giá trị của props
    console.log("Check props: ", props)
    return (
        <div className="todo-data">
            <div>My name is {name}</div>
            <div>Learning React</div>
            <div>Watching Youtube</div>
        </div>
    )
}

export default TodoData;