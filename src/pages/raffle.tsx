import { useNavigate, useParams } from "react-router-dom";
import { RaffleCard } from "../components/raffle-card";

export default function Raffle() {
  const navigate = useNavigate();

  const { titulo, mensagem, inicio, final, valor } = useParams();

  const valores = {
    titulo,
    mensagem,
    inicio: parseInt(inicio!),
    final: parseInt(final!),
    valor: Number(valor!),
  };

  console.log({
    titulo,
    mensagem,
    inicio,
    final,
    valor,
  });

  return (
    <div className="p-4">
      <div className="print:hidden flex items-center gap-2 mb-4">
        <button
          className="p-2 bg-red-500 text-white font-bold rounded cursor-pointer hover:bg-red-600"
          onClick={() => navigate("/")}
        >
          Refazer
        </button>
        <button
          className="p-2 bg-emerald-500 text-white font-bold rounded cursor-pointer hover:bg-emerald-600"
          onClick={() => window.print()}
        >
          Imprimir
        </button>
      </div>
      {Array.from({ length: parseInt(final!) }).map((_value, index) => (
        <RaffleCard
          key={index}
          titulo={valores.titulo!}
          mensagem={valores.mensagem!}
          final={index!}
          valor={valores.valor}
        />
      ))}
    </div>
  );
}
