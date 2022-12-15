import { Envelope, Lock } from 'phosphor-react'

export function Login() {
  return (
    <div className="grid place-items-center h-screen">
      <div className=" w-[26.5rem]">
        <header className="flex flex-col justify-center items-center">
          <img className="w-36" src="./src/assets/logo.png" alt="Logo" />
          <h1 className="text-zinc-300 text-2xl pt-3">Seja bem vindo!</h1>
          <strong className="text-zinc-600 text-sm">
            Faça o login e comece a usar!
          </strong>
        </header>

        <form className="flex flex-col gap-6 mt-8">
          <label htmlFor="email" className="flex flex-col px-8 gap-2">
            <strong className="text-sm text-zinc-300">Endereço de email</strong>
            <div className=" bg-zinc-800 rounded-md flex items-center justify-center gap-3 py-2 px-3">
              <Envelope size={22} className="text-zinc-500 " />
              <input
                type="text"
                name="email"
                autoComplete="off"
                className="flex-1 bg-transparent outline-none placeholder:text-zinc-600 text-zinc-300"
                placeholder="Digite seu e-mail"
              />
            </div>
          </label>
          <label htmlFor="password" className="flex flex-col px-8 gap-2">
            <strong className="text-sm text-zinc-300">Sua sennha</strong>
            <div className=" bg-zinc-800 rounded-md flex items-center justify-center gap-3 py-2 px-3">
              <Lock size={22} className="text-zinc-500 " />
              <input
                type="password"
                name="email"
                autoComplete="off"
                className="flex-1 bg-transparent outline-none placeholder:text-zinc-600 text-zinc-300"
                placeholder="*************"
              />
            </div>
          </label>
        </form>
      </div>
    </div>
  )
}
