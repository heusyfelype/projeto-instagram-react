import Stories from "./Stories";
import Sidebar from "./Sidebar";
import Posts from "./Posts";

export default function Corpo() {
  return (
    <main className="corpo">
      <div className="esquerda">
        <Stories />
        <Posts />
      </div>
      <Sidebar />
    </main>
  )
}