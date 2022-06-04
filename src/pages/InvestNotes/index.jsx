import InvestNotes from "components/Competition/InvestNotes/InvestNotes"
import { useState } from "react"
import { getPlatformType } from "utils"

export default ({searchData}) => {
    const [platformType, setPlatformType] =  useState(getPlatformType())
    return (
        <InvestNotes searchData = {searchData} platformType ={platformType}/>
    )
}