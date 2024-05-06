import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  // RACE AROUND CONSDITION
  // 1.create AbortController
  // 2.send signal in axios
  // 3.req handle in catch
  // 4.cleanup
  // const [products, error, loading] = customQuery("/api/products");
  // const {states from reactQuery} = reactQueryName();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [srch, setSrch] = useState("");
  useEffect(() => {
    const kantroler = new AbortController();
    (async () => {
      try {
        setError(false);
        setLoading(true);
        const response = await axios.get("/api/products?search=" + srch, {
          signal: kantroler.signal,
        });
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request cancelled", error.message);
          return;
        }
        setError(true);
        setLoading(false);
      }
    })();
    // cleanup
    return () => {
      kantroler.abort();
    };
  }, [srch]);
  // if (error) {
  //   return <h2>Error fetching products</h2>;
  // }
  // if (loading) {
  //   return <h2>LODING...</h2>;
  // }

  return (
    <div>
      <h1>Produkt</h1>
      <input
        type="text"
        onChange={(event) => {
          setSrch(event.target.value);
        }}
      />
      {error && <div>Error fetching products</div>}
      {loading && <h2>LODING...</h2>}
      {!loading && <h2>Number of products: {products.length}</h2>}
    </div>
  );
};

export default App;

// const customQuery = (url) => {
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     (async () => {
//       try {
//         setError(false);
//         setLoading(true);
//         const response = await axios.get(url);
//         console.log(response.data);
//         setProducts(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError(true);
//         setLoading(false);
//       }
//     })();
//   }, []); // Empty dependency array ensures this effect runs only once
//   return [products, error, loading];
// };
