import {format, getDate} from 'date-fns'

const now = new Date(Date()).getTime()
const recordedDate = "Wed Jun 01 2022 17:34:33 GMT-0500 (Central Daylight Time)"
const displayDate = format(now, 'MM/dd/yyyy')
const convertedDate = displayDate

const Test = () => {
  return (
    <div style={{padding: '200px', backgroundColor:'lightblue'}}>
      <h1>recordedDate:<p></p>{recordedDate}</h1><br></br>
      <h1>displayDate:<p></p>{displayDate}</h1><br></br>
      <h1>convertedDate:<p></p>{convertedDate}</h1><br></br>
      <h1>convertedDate:<p></p>{now}</h1><br></br>
    </div>
  )
}

export default Test
