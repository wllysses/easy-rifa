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
          <strong>Nome:_______________________________</strong>
          <div className="my-1" />
          <p>______________________________________</p>
        </div>
        <div className="w-full">
          <strong>Endereço:___________________________</strong>
          <div className="my-1" />
          <p>______________________________________</p>
        </div>
        <div className="w-full">
          <strong>Telefone:____________________________</strong>
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
    // <div className="border pb-1 print:break-inside-avoid">
    //   <div className="flex">
    //     <div className="max-w-56 border-r pr-2">
    //       <div className="mb-2">
    //         <div>Nome:__________________________</div>
    //         <div>_________________________________</div>
    //         <div>Endereço:______________________</div>
    //         <div>_________________________________</div>
    //         <div>Telefone:________________________</div>
    //         <div className="flex justify-between items-center mt-2">
    //           <div className="font-bold">
    //             {valor.toLocaleString("pt-BR", {
    //               style: "currency",
    //               currency: "BRL",
    //             })}
    //           </div>
    //           <div className="border border-black px-2 py-1 text-right min-w-[60px]">
    //             {String(final).padStart(3, "0")}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex-1 pl-2">
    //       <div className="text-center font-bold mb-2">{titulo}</div>
    //       <div className="text-sm mb-4">{mensagem}</div>
    //       <div className="flex justify-between items-center mt-8">
    //         <div className="font-bold">R$ {valor}</div>
    //         <div className="border border-black px-2 py-1 text-right min-w-[60px]">
    //           {String(final).padStart(3, "0")}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
