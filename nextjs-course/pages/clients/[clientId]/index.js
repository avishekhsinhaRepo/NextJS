import {useRouter} from 'next/router'
function SelectedClient(){
    const router = useRouter();

    console.log("routee",router.query)
    const loadProject = ()=>{
        router.push('/clients/cl1/projectA')
    }
    return <div>
        <h1>SelectedClient</h1>
        <button onClick={loadProject}>Load Project A</button>
    </div>
}

export default SelectedClient;