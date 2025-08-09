export class Time{
  nome: string;
  mundiais: number;

  constructor(nome: string, mundiais: number){
    this.nome = nome;
    this.mundiais = mundiais;
  }
}

export default function ListItem({nome, mundiais}: Time){
    return (
    <li className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
      <span className="font-bold text-gray-600 w-6 h-6 flex items-center justify-center rounded-full bg-gray-200">
        {mundiais}
      </span>
      <span className="text-gray-800">
        {nome}
      </span>
    </li>
  );
}