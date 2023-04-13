import Link from "next/link";

function ClientsPage(){
    const clients =[
        {id : "cl1",name:'client1'},
        {id : "cl2",name:'client2'}
    ]
    return <div>
        <h1>Client Page</h1>
        <ul>
            {clients.map((client) => (
               <li key={client.id}> <Link href={`/clients/${client.id}`}>{client.name}</Link></li>
            ))}
            {clients.map((client) => (
               <li key={client.id}> <Link href={
                   {
                       pathname:'/clients/[clientId]',
                       query: {clientId: client.id}
                    }
                }>{client.name}</Link></li>
            ))}

        </ul>
    </div>
}

export default ClientsPage;