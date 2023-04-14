import { useRouter } from "next/router";
export default function PortfolioProject() {
  const router = useRouter();
  console.log("portfolio query", router.query['portfolio']);
  console.log("hello query string", router.query['hello']);
  return <h1>Portfolio Project Page</h1>;
}
