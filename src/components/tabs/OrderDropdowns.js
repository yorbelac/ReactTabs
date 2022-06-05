import { useState } from "react"

import AddTabItem from "./AddTabItem"
import RemoveTabItem from "./RemoveTabItem"

const OrderDropdowns = ({menu,createTabItem,removeTabItem,customerName,taxRate}) => {

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

  const pickedItem = menu.filter(function(item) {
    for (var key in lookFor) {
      if (item[key] === undefined || item[key] != lookFor[key])
      return false;
    }
    return true;
  })

  return (
    <div className="tabOrderMenu">
<select value={classPick} onChange={resetClass}>
        {classes.map((entry) => (<option>{entry.Class}</option>))}
      </select>
      {items.length != 0 ? 
        <select value={itemPick} onChange={e=>setItemPick(e.target.value)}>
          {items.map((entry) => (<option>{entry.Item}</option>))}
        </select>
      :
        <select></select>
      }
      {variants.length != 0 ? 
        <select value={variantPick} onChange={e=>setVariantPick(e.target.value)}>
          {variants.map((entry) => (<option>{entry.Variant}</option>))}
        </select>
      :
        <select></select>
      }
      {pickedItem.length === 0 ? 
        <div className="tabOrderButtons">
        <div className="tabButton" style={{backgroundColor:'grey'}}>+</div>
        <div className="tabOrderTotal" style={{borderBottom:'3px solid grey',backgroundColor:'lightgrey'}}>...</div>
        <div className="tabButton" style={{backgroundColor:'grey'}}>-</div>
    </div>
        :
        <div className="tabOrderButtons">
        <AddTabItem 
          createTabItem={createTabItem} 
          itemName={pickedItem[0].Sku} 
          itemCost={pickedItem[0].Price} 
          customerName={customerName} 
          taxRate={taxRate}
        />
        <div className="tabOrderTotal">${pickedItem[0].Price.toFixed(2)}</div>
        <RemoveTabItem 
          createTabItem={createTabItem} 
          itemName={pickedItem[0].Sku} 
          itemCost={pickedItem[0].Price} 
          customerName={customerName} 
          taxRate={taxRate}
        />
        </div>
      }
    </div>
  )
}

export default OrderDropdowns
