import './App.css'
import Product from './prroduct.jsx'

function App() {
  return (
    <>
    <h2>Blockbuster Deals | Shop Now!</h2>
    <div className="container">
    <Product idx={0} heading="Logitech MX Master" />
    <Product idx={1} heading="Apple Pencil (2nd Gen)" />
    <Product idx={2} heading="Zebronics Zeb-Transformers"/>
    <Product idx={3} heading="MI Power Bank"/>
    </div>
    </>
  );
}

export default App
