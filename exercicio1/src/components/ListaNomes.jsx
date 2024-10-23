function Pessoa(props){
    return <li>Eu sou {props.pessoa}</li>
}
function Lista(){
    const pessoas = ['Ana','Caio','João','Maria'];
    return (
        <>
        <h1>Lista de pessoas</h1>
        <ul>
            {pessoas.map((pessoa) => <Pessoa pessoa={pessoa}/>)}
        </ul>
        </>

    )
}export default Lista