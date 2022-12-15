import { Check, Envelope, IdentificationBadge, Lock } from 'phosphor-react'
import * as Checkbox from '@radix-ui/react-checkbox'
import { Link } from 'react-router-dom'

export function Register() {
  return (
    <div className="grid place-items-center h-screen">
      <div className=" w-[26.5rem] bg-zinc-800 rounded-lg p-3">
        <header className="flex flex-col justify-center items-center ">
          <img className="w-20" src="./src/assets/logo.png" alt="Logo" />
          <h1 className="text-zinc-300 text-xl pt-3 ">Crie sua conta!</h1>
        </header>

        <form className="flex flex-col gap-6 mt-8">
          <label htmlFor="email" className="flex flex-col px-8 gap-2">
            <strong className="text-sm text-zinc-300">Nome</strong>
            <div className=" bg-zinc-700 rounded-md flex items-center justify-center gap-3 py-2 px-3">
              <IdentificationBadge size={22} className="text-zinc-500 " />
              <input
                type="text"
                name="name"
                autoComplete="off"
                className="flex-1 bg-transparent outline-none placeholder:text-zinc-400 text-zinc-300"
                placeholder="Digite seu nome"
              />
            </div>
          </label>

          <label htmlFor="email" className="flex flex-col px-8 gap-2">
            <strong className="text-sm text-zinc-300">Endereço de email</strong>
            <div className=" bg-zinc-700 rounded-md flex items-center justify-center gap-3 py-2 px-3">
              <Envelope size={22} className="text-zinc-500 " />
              <input
                type="text"
                name="email"
                autoComplete="off"
                className="flex-1 bg-transparent outline-none placeholder:text-zinc-400 text-zinc-300"
                placeholder="Digite seu e-mail"
              />
            </div>
          </label>

          <label htmlFor="password" className="flex flex-col px-8 gap-2">
            <strong className="text-sm text-zinc-300">Sua sennha</strong>
            <div className=" bg-zinc-700 rounded-md flex items-center justify-center gap-3 py-2 px-3">
              <Lock size={22} className="text-zinc-500 " />
              <input
                type="password"
                name="email"
                autoComplete="off"
                className="flex-1 bg-transparent outline-none placeholder:text-zinc-400 text-zinc-300"
                placeholder="*************"
              />
            </div>
          </label>

          <label
            htmlFor="remember"
            className="flex items-center justify-start gap-2 px-8 "
          >
            <Checkbox.Root className="w-5 h-5 rounded-md bg-zinc-700 flex items-center justify-center outline-none">
              <Checkbox.Indicator>
                <Check size={16} className="text-zinc-300" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <strong className="text-sm text-zinc-400">
              Aceitar os{' '}
              <strong className="underline">termos de condição</strong>
            </strong>
          </label>

          <button className="bg-cyan-600 mx-8 rounded-md py-3 font-bold text-zinc-300 hover:bg-cyan-500">
            Cadastrar
          </button>
        </form>

        <div className="flex items-center justify-center mt-10 gap-2 text-sm text-zinc-500 pb-4">
          <span>Já tem uma conta?</span>
          <Link to={'/'} className=" underline text-sm font-bold">
            Faça login aqui
          </Link>
        </div>
      </div>
    </div>
  )
}
