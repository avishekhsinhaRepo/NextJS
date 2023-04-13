import {useRouter} from 'next/router'
function BlogPostPage(){
    const router = useRouter();
    
    console.log("routee",router.query)
    return <div>
        <h1>Blog</h1>
    </div>
}

export default BlogPostPage;