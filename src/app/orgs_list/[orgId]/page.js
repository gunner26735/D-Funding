import InfoPage from "@/components/InfoPage";

export default function ListOrg({params}){
    return(<div>
        <InfoPage orgAddress={params.orgId} />
    </div>);
}