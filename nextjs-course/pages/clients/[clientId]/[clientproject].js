import {useRouter} from 'next/router'
function SelectedClientProject(){
    const router = useRouter();
    
    console.log("routee",router.query)
    return <div>
        <h1>SelectedClientProject</h1>
    </div>
}

export default SelectedClientProject;