import { useState } from "react"
import { GroupContext } from "./GroupContext"


export const GroupContextProvider = ({children})=>{
    const [joinGroup , setJoinGroup] = useState(false)

    return <GroupContext.Provider value={{joinGroup,setJoinGroup}}>
        {children}
    </GroupContext.Provider>
}