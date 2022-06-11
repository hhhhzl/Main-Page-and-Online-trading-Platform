import RankingPang from "components/Competition/RankingPang"
import Footer from "components/MainPage/footer"
import { useState } from "react"
import { getPlatformType } from "utils"

export default ({searchData}) => {
    return (
        <>
        <div style={{width:"100%",height:"100%",display:"flex",justifyContent:"space-between", background:"#F5F6F8"}}>
        <div style={{ width: "48px", minHeight: "500px", maxWidth: "18.75%" }}></div>
            <div style={{width:"1200px", marginTop:"48px", height:"max-content"}} >
               <RankingPang/>
            </div>
            <div style={{ width: "48px", minHeight: "500px", maxWidth: "18.75%" }}></div>
        </div>
        <div>
            <Footer/>
        </div>
        </>
    )
}