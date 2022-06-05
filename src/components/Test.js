import { useState } from "react"

const Test = ({menu}) => {

  const [classPick, setClassPick] = useState('')
  const [itemPick, setItemPick] = useState('')
  const [variantPick, setVariantPick] = useState('')

  const resetClass = e => {
    setClassPick(e.target.value)
    setItemPick('')
    setVariantPick('')
  } 

  const classes = [...new Map(menu.map((entry) => [entry["Class"], entry])).values()]
  const activeClass = menu.filter((entry) => entry.Class === classPick)

  const items = [...new Map(activeClass.map((entry) => [entry["Item"], entry])).values()]
  const activeItem = menu.filter((entry) => entry.Item === itemPick)

  const variants = [...new Map(activeItem.map((entry) => [entry["Variant"], entry])).values()]

  const lookFor = {
    Class: classPick,
    Item: itemPick,
    Variant: variantPick
  }

  const pickedPrice = menu.filter(function(item) {
    for (var key in lookFor) {
      if (item[key] === undefined || item[key] != lookFor[key])
      return false;
    }
    return true;
  })

  return (
    <div>
      <select value={classPick} onChange={resetClass}>
        {classes.map((entry) => (<option>{entry.Class}</option>))}
      </select>
      {items.length != 0 ? 
        <select value={itemPick} onChange={e=>setItemPick(e.target.value)}>
          {items.map((entry) => (<option>{entry.Item}</option>))}
        </select>
      :
        ''
      }
      {variants.length != 0 ? 
        <select value={variantPick} onChange={e=>setVariantPick(e.target.value)}>
          {variants.map((entry) => (<option>{entry.Variant}</option>))}
        </select>
      :
        ''
      }
      {pickedPrice.length === 0 ? 
        <p style={{padding:'20px'}}>...</p>
        :
        <p style={{padding:'20px'}}>{pickedPrice[0].Price.toFixed(2)}</p>
      }
    </div>
  )
}

export default Test