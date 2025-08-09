/*
1) Crie um componente funcional chamado "Greeting" que renderiza uma mensagem de saudação. Adicione uma
 estilização básica do componente, com style.
    a) Utilizando uma function
    b) Utilizando uma arrow function 
*/
type GreetingProps = {
    age: number;
    name: string;
} 

const Greeting = ({name, age}: GreetingProps) =>
        <div className= "bg-white p-6 rounded-xl shadow-lg">
            <h1 className="text-2xl font-semibold text-gray-800">Hello There, {name}!!</h1>
            <h2 className="text-lg text-gray-600 mt-2">You're {age} years old.</h2>
        </div>
    
export default Greeting;