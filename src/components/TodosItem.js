const TodosItem = (props)=>{
    const {Chore, Date, Description}=props.todos
    console.log(props)
    return(
        <div>
            <h3>{Chore}</h3>
            <h2>{Date}</h2>
            <h1>{Description}</h1>
        </div>
    )
}
export default TodosItem