import { Link } from 'react-router-dom'

interface LinkFaqProps {
  url: string
  title: string
  bg1: string
  bg2: string
  textColor: string
  font: string
}

export function LinkFaq(props: LinkFaqProps) {
  return (
    <Link
      to={props.url}
      className={`p-4 bg-gray-button ${props.bg1} ${props.font} text-xl flex gap-5 items-center rounded-t-2xl`}
    >
      {props.title}
    </Link>
  )
}
