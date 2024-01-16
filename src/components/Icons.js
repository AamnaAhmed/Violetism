import {useState} from 'react'
export default function Icons ({names}) {
    const [buttonValue,setButtonValue] = useState(false);
    const change = () => {
        if (buttonValue == false) {
            setButtonValue(true)
        }else {
            setButtonValue(false)
        }
        
}
    return (
        <span onClick={change} className={buttonValue ? 'p-3 rounded-3xl bg-mainColor cursor-pointer relative z-10 butt':'p-3 rounded-3xl bg-mainColor cursor-pointer relative z-10'}>{names}</span>
    )
}