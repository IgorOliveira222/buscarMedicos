import { LinkFaq } from '@/components/faq/linkFaq'
import { bgUsersAll } from '@/functions/pages/users'
import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

export default function Faq() {
  const navigate = useNavigate()
  const locationNow = useLocation().pathname

  useEffect(() => {
    if (locationNow === '/faq') {
      navigate('/faq/contractors')
    }
  })

  const doctors = bgUsersAll(locationNow, '/faq/doctors')
  const contractors = bgUsersAll(locationNow, '/faq/contractors')

  return (
    <div className="p-8 ">
      <h1 className="text-3xl font-semibold">FAQ (Perguntas Frequentes)</h1>
      <div className="pt-8 ">
        <div className="flex gap-4">
          <LinkFaq
            url={'/faq/contractors'}
            title={'Contratantes'}
            bg1={contractors?.bg1 || ''}
            bg2={contractors?.bg2 || ''}
            textColor={contractors?.textColor || ''}
            font={contractors?.font || ''}
          />
          <LinkFaq
            url={'/faq/doctors'}
            title={'Médicos'}
            bg1={doctors?.bg1 || ''}
            bg2={doctors?.bg2 || ''}
            textColor={doctors?.textColor || ''}
            font={doctors?.font || ''}
          />
        </div>
        <div className="bg-white p-6 rounded-b-2xl">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
