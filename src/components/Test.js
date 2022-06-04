import { useState } from "react"

const Test = ({menu}) => {

  let classes = [...new Map(menu.map((entry) => [entry["Class"], entry])).values()]
  let items = [...new Map(menu.map((entry) => [entry["Item"], entry])).values()]
  let variants = [...new Map(menu.map((entry) => [entry["Variant"], entry])).values()]

  const [classPick, setClassPick] = useState()

  return (
    <div>
      <select value={classPick} onChange={e=>setClassPick(e.target.value)}>
        {classes.map((entry) => (<option>{entry.Class}</option>))}
      </select>
      {classPick}
    </div>
  )
}

export default Test