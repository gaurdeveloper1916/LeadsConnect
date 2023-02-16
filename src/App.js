import { useEffect, useState } from "react";
import "./App.css";

import Header from "./component/Header";
import Slider from "./component/Slider";
import ShopByCategory from "./component/ShopByCategory";
import DealOfTheDay from "./component/DealOfTheDay";
import OnceUponAFlavour from "./component/OnceUponAFlavour";
import PromiseOfNutrient from "./component/PromiseOfNutrient";
import TheNutritionWay from "./component/TheNutritionWay";
import SliderSehatKaiSuno from "./component/SliderSehatKaiSuno";
import BestSellingProduct from "./component/BestSellingProduct";
import Footer from "./component/Footer";

function App() {
  const [items, setItem] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [addedItems, setAddedItem] = useState([]);
  const [showAddProducts, setShowAddProducts] = useState(false);
  const itmesFilter = items.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  function addItem(item) {
    item.addNumber = 1;
    const itemArr = addedItems;
    setAddedItem([...itemArr, item]);
  }
  function removeItem(item) {
    const newItems = addedItems.filter((addedItem) => addedItem.id !== item.id);
    setAddedItem(newItems);
  }
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/?limit=4")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  return (
    <div style={{ background: "#cbcbcb", paddingTop: "20px" }}>
      <div
        className="container px-0"
        style={{ borderRadius: "50px", backgroundColor: "white" }}
      >
        <Header
          addedItems={addedItems}
          removeItem={removeItem}
          setAddedItem={setAddedItem}
        />
        <Slider />
        <ShopByCategory />
        <DealOfTheDay
          items={items}
          products={itmesFilter}
          addItem={addItem}
          removeItem={removeItem}
          addedItems={addedItems}
        />
        <OnceUponAFlavour />
        <PromiseOfNutrient />
        <TheNutritionWay />
        <SliderSehatKaiSuno />
        <BestSellingProduct />
        <Footer />
      </div>
    </div>
  );
}

export default App;
