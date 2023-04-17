import fs from "fs/promises";
import path from "path";
import Link from "next/link";

export default function Home(props) {
  const { products } = props;
  return (
    <div>
    <h1>Product List</h1>
    <ul>
      {products.map((product) => (
        <li key={product.id}><Link href={product.id}>{product.title}</Link></li>
      ))}
    </ul>
    </div>
  );
}

export async function getStaticProps() {
  console.log("(Re) - Generating")
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const fileData = await fs.readFile(filePath);
  const data = JSON.parse(fileData);
  return {
    props: {
      products: data.products,
    },
  };
}
