import Greeting from './components/GreetingComponent';
import ListContainer from './components/ListContainerComponent';


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center gap-8 bg-blue-400">
      <div>
        <Greeting age={24} name={'Pedro Paulo'} />
      </div>
      <div className="p-8 rounded-xl shadow-lg bg-white">
        <ListContainer />
      </div>
    </div>
  );
}