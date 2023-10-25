interface TableFaqProps {
  title: string
  actions: React.ReactNode
}

export function TableFaq(props: TableFaqProps) {
  return (
    <>
      <tr className=" ">
        <td className=" p-7">Pergunta1</td>
        <td className=" ">{props.actions}</td>
      </tr>
    </>
  )
}
