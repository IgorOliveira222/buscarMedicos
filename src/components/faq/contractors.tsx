import { TableHeadFaq } from '../tableFaq/tableHeadFaq'
import { TableFaq } from '../tableFaq/tableFaq'
import { HeaderFaq } from './headerFaq'
import { ActionButton } from '../actionButton/actionButton'

export function ContractorsFaq() {
  return (
    <div>
      <HeaderFaq />
      <div className="rounded-xl bg-green-4 pt-2">
        <table className="w-full rounded-xl bg-white ">
          <TableHeadFaq />
          <TableFaq title="Pergunta 1" actions={<ActionButton />} />
          <TableFaq title="Pergunta 2" actions={<ActionButton />} />
          <TableFaq title="Pergunta 3" actions={<ActionButton />} />
          <TableFaq title="Pergunta 4" actions={<ActionButton />} />
          <TableFaq title="Pergunta 5" actions={<ActionButton />} />
          <TableFaq title="Pergunta 6" actions={<ActionButton />} />
          <TableFaq title="Pergunta 7" actions={<ActionButton />} />
          <TableFaq title="Pergunta 8" actions={<ActionButton />} />
        </table>
      </div>
    </div>
  )
}
