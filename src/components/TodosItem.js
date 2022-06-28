const TodosItem = (props)=>{
    const {chore, date, description}=props.todos
    return(
        <div>
            <h3>{chore}</h3>
            <h2>{date}</h2>
            <h1>{description}</h1>
        </div>
    )
}
export default TodosItem