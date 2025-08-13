import Greeting from './components/GreetingComponent';
import ListContainer from './components/ListContainerComponent';
import Contador from './components/ContdownComponent';


export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-400 p-4 space-x-4">
      <div className= "flex flex-col items-center space-y-4">
        <Greeting age={24} name={'Pedro'} />
        <Contador/>
      </div>
      <div className="p-8 rounded-xl shadow-lg bg-white">
        <ListContainer />
      </div>
    </div>
  );
}