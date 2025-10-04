import Greeting from "./component/greeting.jsx";
import ProductCard from "./component/productcard.jsx"
import Card from "./component/card.jsx";
import Comment from "./component/comment.jsx";

function App() {
  const user = {
    name: "Budi",
    avatarUrl: "https://hips.hearstapps.com/hmg-prod/images/2025-porsche-911-carrera-gts-145-68af3df4bea4b.jpg?crop=0.620xw:0.522xh;0.335xw,0.229xh&resize=2048:*",
  };
  return (    
    <div>
      <h1>Soal 1</h1>
      <Greeting name="Muhammad Al Kahfi Zikri" />
      <h1>Soal 2</h1>
        <ProductCard productName="Laptop" price={7500000} stock={5} isAvailable={true} />
        <ProductCard productName="HP" price={2500000} />
        <h1>Soal 3</h1>
      <Card>
        <h2>Ini teks dalam Card</h2>
        <p>Card bisa membungkus konten apapun</p>
      </Card>
      <Card>
        <img src="https://hips.hearstapps.com/hmg-prod/images/2025-porsche-911-carrera-gts-145-68af3df4bea4b.jpg?crop=0.620xw:0.522xh;0.335xw,0.229xh&resize=2048:*" alt="gambar" />
        <button>Klik Saya</button>
      </Card>
      <h1>soal 4</h1>
       <Comment user={user} text="Ini komentar pertama saya di React!" />
    </div>
 
  );
}

export default App;
