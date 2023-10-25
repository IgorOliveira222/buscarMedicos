import { useEffect, useState } from 'react'
import { TableHeadPlans } from '../table/tableHeadPlans'
import { TablePlans } from '../table/tablePlans'
import { HeaderPlans } from './headerPlans'
import { getPlans } from '@/api/getPlans'
import { plansOptions } from './doctors'
import { ActionButton } from '../actionButton/actionButton'
import { FormControlLabel, Switch } from '@mui/material'

export function ContractorsPlans() {
  const [contractorsPlans, setContractorsPlans] = useState<plansOptions>()

  useEffect(() => {
    getPlans(setContractorsPlans, 'contratante')
  }, [])

  return (
    <div>
      <HeaderPlans />

      <div className="rounded-xl bg-green-4 pt-2">
        <table className="w-full rounded-xl bg-white ">
          <TableHeadPlans />

          {contractorsPlans?.map((plan: plansOptions) => (
            <TablePlans
              key={plan.id}
              type={plan.period}
              value={plan.values}
              promotion={'Não informado'}
              situation={
                <FormControlLabel
                  control={<Switch defaultChecked color="success" />}
                  label="Ativo"
                />
              }
              actions={<ActionButton />}
            />
          ))}
        </table>
      </div>
    </div>
  )
}
