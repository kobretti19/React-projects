import { Nav } from "./components/Nav";
import { ShoeDetail } from "./components/ShoeDetail";
import { NewArrivalSection } from "./components/NewArrivalSection";
import { SHOE_LIST } from "./constant";
import { Sidebar } from "./components/Sidebar";
import { useState } from "react";
import { CardItem } from "./components/CardItem";

export function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className=" animate-fadeIn p-10 xl:px-24 ">
      <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />
      <ShoeDetail />
      <NewArrivalSection items={SHOE_LIST} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClickClose={() => setIsSidebarOpen(false)}
      >
        <h2 className="mb-10 text-2xl font-bold">Cart</h2>
        <CardItem item={SHOE_LIST[0]} />
        <CardItem item={SHOE_LIST[1]} />
        <CardItem item={SHOE_LIST[2]} />
      </Sidebar>
    </div>
  );
}
