import { useRouter } from 'next/router';
function PortfolioDetails() {
  const router = useRouter();
  console.log(router);
   return (
    <div>
      <h1>PortfolioDetails</h1>
    </div>
  );
}
export default PortfolioDetails;
