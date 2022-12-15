import { Slot } from '@radix-ui/react-slot'
import { InputHTMLAttributes, ReactNode } from 'react'

interface TitleInputProps {
  children: ReactNode
}

function TextInput(props: TitleInputProps) {
  return <strong className="text-sm text-zinc-300">{props.children}</strong>
}

interface InputContainerProps {
  children: ReactNode
  classnames: string
}

function InputContainer(props: InputContainerProps) {
  return (
    <div
      className={`rounded-md flex items-center justify-center gap-3 py-2 px-3 ${props.classnames}`}
    >
      {props.children}
    </div>
  )
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  classnames: string
}

function InputInput(props: InputProps) {
  return (
    <input
      autoComplete="off"
      className={`flex-1 bg-transparent outline-none ${props.classnames}`}
      {...props}
    />
  )
}

interface IconInputProps {
  children: ReactNode
}

function IconInput(props: IconInputProps) {
  return (
    <Slot className="text-zinc-500 w-[22px] h-[22px]">{props.children}</Slot>
  )
}

export const Input = {
  Root: InputContainer,
  Text: TextInput,
  Icon: IconInput,
  Input: InputInput,
}
