import { Check, Envelope, Lock } from 'phosphor-react'
import * as Checkbox from '@radix-ui/react-checkbox'
import { Link } from 'react-router-dom'

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

          <label
            htmlFor="remember"
            className="flex items-center justify-start gap-2 px-8 "
          >
            <Checkbox.Root className="w-5 h-5 rounded-md bg-zinc-800 flex items-center justify-center outline-none">
              <Checkbox.Indicator>
                <Check size={16} className="text-zinc-300" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <strong className="text-sm text-zinc-500">
              Lembrar de mim por 30 dias
            </strong>
          </label>

          <button className="bg-cyan-600 mx-8 rounded-md py-3 mt-3 font-bold text-zinc-300 hover:bg-cyan-500">
            Entrar na plataforma
          </button>
        </form>

        <div className="flex items-center justify-center mt-10 gap-1 flex-col">
          <a href="" className="text-zinc-600 underline text-sm">
            Esqueceu sua senha?
          </a>
          <span className="text-zinc-600 text-sm">
            Não possui conta?{' '}
            <Link to={'/register'} className=" underline ">
              Crie uma agora!
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}
