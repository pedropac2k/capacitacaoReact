import ListItem, {Time} from './ListItemComponent';

const timesList: Time[] = [
    new Time('São Paulo', 3),
    new Time('Corinthians', 2),
    new Time('Santos', 2),
    new Time('Palmeiras', 0),
];

export default function(){
    return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-fit">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        Mundiais
      </h1>
      <ul className="space-y-2">
        {timesList.map((time, index) => (
          <ListItem key={index} nome={time.nome} mundiais={time.mundiais} />
        ))}
      </ul>
    </div>
  );
}