import fs from "fs/promises";
import path from "path";
export default function ProductDetailPage(props){
    const {loadedProduct} = props;
    // if(!loadedProduct){
    //     return(<div>Loading..</div>)
    // }
    return(
        <div>
            <h1>{loadedProduct.title}</h1>
            <p>{loadedProduct.description}</p>
        </div>
      
    )
}

async function getData(){
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
    const fileData = await fs.readFile(filePath);
    const data = JSON.parse(fileData);
    return data;
}

export async function getStaticProps(context) {
    const {params} = context
    const productId = params.pid;
    const data = await getData();
    const product = data.products.find(p => p.id == productId);
    if(!product){
        return {notFound:true}
    }
    return {
      props: {
        loadedProduct: product,
      },
    };
  }

  export async function getStaticPaths() {
    const data = await getData();
    const ids = data.products.map(d=> d.id);
    const pathParams =  ids.map(id=>({params:{pid:id}}));
    
    return {
      paths: pathParams,
      fallback:'blocking'
    };
  }
  