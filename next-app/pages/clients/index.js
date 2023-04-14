import Link from "next/link";

export default function ClientDetails() {
    const clients =[
        { id:'c1', name:'Client1'},
        { id:'c2', name:'Client2'}
    ];
    return <div> <h1>ClientDetails Page</h1>
    <ul>
    {clients.map(client =>(
        <li key={client.id}>
            <Link href={
                {
                    pathname : "/clients/[id]",
                    query: {id:client.id} 
                }}> {client.name}</Link>
        </li>
    ))}
    </ul>
    </div>;
  }
  