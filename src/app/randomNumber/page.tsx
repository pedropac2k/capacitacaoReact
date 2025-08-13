import Random from '../components/RandomComponent';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-400 p-4">
        <div>
            <Random/>
        </div>
    </div>
  );
}