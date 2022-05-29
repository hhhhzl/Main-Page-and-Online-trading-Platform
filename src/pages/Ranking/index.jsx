import RankingPang from "components/Competition/RankingPang";
import PageHeader from "components/screen/PageHeader";

export default ({searchData}) => {
    return (
        <>
            <PageHeader searchData = {searchData} />
            <div style={{width:"100%",height:"100%",display:"flex",justifyContent:"center", background:"#F5F6F8"}}>
                <div style={{width:"1200px"}} >
                   <RankingPang />
                </div>
            </div>
            
        </>
    )
}