import { MdOutlineEast } from 'react-icons/md'
import { BoxUser } from '../boxData/boxUser'
import { BoxTitle } from '../boxData/boxTitle'
import { Link } from 'react-router-dom'

export const data = [
  {
    name: 'Mariana LouiseFernando',
    email: 'mariana@gmail.com',
    contact: '31 99568-8581',
    typeUser: 'medico'
  },
  {
    name: 'Giulia Viera',
    email: 'giulia@hotmail.com',
    contact: '31 99568-8581',
    typeUser: 'medico'
  },
  {
    name: 'Carlos Santos',
    email: 'carlos@gmail.com',
    contact: '31 99568-8581',
    typeUser: 'medico'
  },
  {
    name: 'Hebert Richards',
    email: 'hebertrs@gmail.com',
    contact: '31 99568-8581',
    typeUser: 'Contratante'
  }
]

export default function Section() {
  return (
    <div className="flex-1  items-center w-full h-fit bg-white rounded-2xl m-10 p-4 ">
      <div className="flex justify-between text-xl rounded-2xl p-6 ">
        <strong>Ultimos usuários cadastrados</strong>
        <button className="text-base flex gap-2 text-blue-500">
          <Link to={'/users'}>Ver tudo</Link>
          <MdOutlineEast size={20} />
        </button>
      </div>

      <div className="rounded-xl bg-green-4 pt-2">
        <table className="w-full rounded-xl bg-white ">
          <BoxTitle />
          <tbody className="p-2">
            {data.map(user => {
              return (
                <BoxUser
                  user={user.name}
                  email={user.email}
                  contact={user.contact}
                  typeUser={user.typeUser}
                />
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
