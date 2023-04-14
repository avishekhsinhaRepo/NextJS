import { useRouter } from "next/router";
export default function Client() {
 const router = useRouter();
 const clientId = router.query['id'];
 const loadProjectHandler = ()=>{
     router.push({
         pathname:'/clients/[id]/[clientprojectid]',
         query: {
             id: 'c1',
             clientprojectid:'projectA'
            }
     })
 }
    return <div>
        <h1>{clientId}</h1>
        <button onClick={loadProjectHandler}>Navigate to Project A</button>
    </div>;
  }
  