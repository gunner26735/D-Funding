import DonatePage from "@/components/DonatePage";

export default function DonateToOrg({params}){
    return(
        <DonatePage orgAddress={params.orgAdd} />
    );
}