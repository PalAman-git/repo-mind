export default async function Blob({
    params,
}:{
    params:Promise<{
        blob:string;
    }>
}) {
    const {blob} = await params;

    <div className="p-10">
        {blob}
    </div>
}