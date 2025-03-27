import { TrophyIcon } from "lucide-react";
import { FormEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const titleRef = useRef<null | HTMLInputElement>(null);
  const messageRef = useRef<null | HTMLTextAreaElement>(null);
  const lastRef = useRef<null | HTMLInputElement>(null);
  const priceRef = useRef<null | HTMLInputElement>(null);

  function handleSubmitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    navigate(
      `/rifa/${titleRef.current?.value}/${messageRef.current?.value}/${lastRef.current?.value}/${priceRef.current?.value}`
    );
  }

  return (
    <>
      <header className="w-full p-4 flex items-center justify-between border-b border-zinc-300">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 font-bold">
            <div className="size-8 bg-emerald-500 flex items-center justify-center rounded">
              <TrophyIcon size={18} className="text-white" />
            </div>
            <h2 className="text-lg">
              Easy<span className="text-emerald-500">Rifa</span>
            </h2>
          </div>
        </div>
      </header>

      <main className="mt-8 container mx-auto">
        <h2 className="text-xl font-bold">Informações da rifa</h2>
        <form
          className="w-full flex flex-col gap-4 mt-4 rounded border p-4 border-zinc-200"
          onSubmit={handleSubmitForm}
        >
          <div className="flex flex-col">
            <label htmlFor="title" className="font-semibold">
              Título
            </label>
            <input
              type="text"
              id="title"
              className="border rounded p-2"
              placeholder="Insira o título da rifa"
              ref={titleRef}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="font-semibold">
              Mensagem
            </label>
            <textarea
              id="message"
              className="border rounded p-2 resize-none"
              rows={5}
              placeholder="Insira uma mensagem para a rifa"
              ref={messageRef}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="last" className="font-semibold">
                Quantidade
              </label>
              <input
                type="number"
                id="last"
                className="border rounded p-2"
                placeholder="Insira a quantidade de rifas"
                ref={lastRef}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="title" className="font-semibold">
                Valor
              </label>
              <input
                type="text"
                id="title"
                className="border rounded p-2"
                placeholder="Insira o valor da rifa"
                ref={priceRef}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="p-3 bg-emerald-500 rounded text-white font-bold cursor-pointer hover:bg-emerald-600"
          >
            Gerar rifa
          </button>
        </form>
      </main>
    </>
  );
}
