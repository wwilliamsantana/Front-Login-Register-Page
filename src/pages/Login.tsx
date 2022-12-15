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
      </div>
    </div>
  )
}
