import { useEffect, useState } from "react";

export default function LastSales(props) {
  const [sales, setSales] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetch("https://next-js-app-d36f5-default-rtdb.firebaseio.com/sales.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setSales(data);
        setIsLoading(false)
      });
  }, []);
  return <ul></ul>;
}
