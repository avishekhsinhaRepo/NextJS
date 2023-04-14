import { useRouter } from "next/router";
export default function Blog() {
  const router = useRouter();
  console.log(router.query);
  return <h1>Blog Page</h1>;
}
