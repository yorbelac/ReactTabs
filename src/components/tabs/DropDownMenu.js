const DropDownMenu = ({menu}) => {

  return (
    <select name="menuItems">
        {menu.map((entry) => (
          <option>{entry.item}</option>
        ))}
    </select>
  )

}

export default DropDownMenu
