import express from "express";
const app = express();
app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Iphone 12",
      price: 1000,
      image:
        "https://images.unsplash.com/photo-1573920011462-eb3003086611?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvbmVzfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      name: "Samsung Galaxy S22 Ultra",
      price: 1500,
      image:
        "https://images.unsplash.com/photo-1644500427331-f7f49b2c7c49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNhbW myśli%20telefon%20kom%C3%B3rkowy|s1644500427331-f7f49b2c7c49.jpg?auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      name: "Sony WH-1000XM4 Wireless Headphones",
      price: 300,
      image:
        "https://images.unsplash.com/photo-1623461700450-f282dfe9929b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdpcmVzdCBmZW9uZXMuYnJpZGf8gfDB8fDB8fHww",
    },
    {
      id: 4,
      name: "MacBook Pro M1",
      price: 2000,
      image:
        "https://images.unsplash.com/photo-1619368207729-899a1e8f48c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hYyBiZWtvb2sgcHJv|s1619368207729-899a1e8f48c7.jpg?auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 5,
      name: "Instant Pot Duo Crisp",
      price: 150,
      image:
        "https://images.unsplash.com/photo-1561850587-08812c3e749e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGluc3RhbnQgcG90fGVufDB8fDB8fHww",
    },
  ];
  // http://localhost:3000/api/products?search=iphone--> here '?' is query parameter
  // console.log(req.query.search);
  if (req.query.search) {
    const filterProd = products.filter((prod) =>
      prod.name.includes(req.query.search)
    );
    res.send(filterProd);
    return;
  }
  setTimeout(() => {
    res.send(products);
  }, 3000);
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running at port number : ${port}`);
});
