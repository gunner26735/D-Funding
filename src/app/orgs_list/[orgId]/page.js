import InfoPage from "@/components/InfoPage";

export default function ListOrg({params}){
    return(<div>
        <h1>{params.orgId}</h1>
        <InfoPage />
    </div>);
}