interface RaffleCardProps {
  titulo: string;
  mensagem: string;
  final: number;
  valor: number;
}

export function RaffleCard({
  titulo,
  mensagem,
  final,
  valor,
}: RaffleCardProps) {
  return (
    <div
      id="raffleCard"
      className="border flex items-center print:break-inside-avoid print:m-0"
    >
      <div className="max-w-44 w-full px-2 py-1 border-r flex flex-col gap-2 text-[10px]">
        <div className="w-full">
          <strong>Nome:</strong>
          <div className="mb-3 w-full border-b" />
          <div className="w-full border-b" />
        </div>
        <div className="w-full">
          <strong>Endereço:</strong>

          <div className="mb-3 w-full border-b" />
          <div className="w-full border-b" />
        </div>
        <div className="w-full">
          <strong>Telefone: </strong>
          <div className="w-full border-b" />
        </div>
        <div className="flex items-center justify-between">
          <span className="font-bold">
            {valor.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <div className="border px-6 py-1 font-bold">{final + 1}</div>
        </div>
      </div>
      <div className="flex-1 p-2">
        <div className="max-w-[700px] w-full flex items-center justify-center flex-col gap-2 m-auto">
          <h2 className="font-bold text-lg">{titulo}</h2>
          <p className="text-center text-xs">{mensagem}</p>
          <div className="w-full flex items-center justify-between">
            <span className="font-bold">
              {valor.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
            <div className="border px-6 py-1 font-bold">{final + 1}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
