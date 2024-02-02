import { Component } from "react";
import Header from "./Header";
import ProductsPage from "./ProductsPage";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <ProductsPage />
      </>
    );
  }
}

export default App;
