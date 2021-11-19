import React from 'react';
import Button from "./components/Button";
import './App.css';
import bag1 from "./assets/bag_1.png"
import bag2 from "./assets/bag_2.png"
import bag3 from "./assets/bag_3.png"
import bag4 from "./assets/bag_4.png"
import brandPic from "./assets/brand.png"
import storyPic from "./assets/our_story.png"

import Product from "./components/Product";
import Tile from "./components/Tile";

function App() {

  return (
      <>
<nav>
<Button typeOfButton="button" klikEvent={() => console.log("To the collection")}>
    to the collection
</Button>
    <Button klikEvent={() => console.log("Shop all bags!")} >
        Shop all bags
    </Button>
    <Button disabledButton={true}>
        Pre-orders
    </Button>
</nav>
      <h1>Handbags & Purses</h1>
          <main>
              <article>
                  <span>Best Seller</span>
                  <img src={bag1} alt="image-bag-1"/>
                  <p>The handy bag</p>
                  <h4>&euro; 400,-</h4>
              </article>
              <Product trending="Best seller" img={bag2} alt="bag2" name="The handy bag"price={250}/>
              <Product trending="New collection" img={bag3} alt="bag3"name="The stylisch bag" price={300}/>
              <Product trending="New collection" img={bag4} alt="bag4" name="The trendy bag "price={150}/>
          </main>
          <footer>
              <Tile title="The Brand">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa ducimus earum et expedita illum in magnam odio suscipit voluptatum!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, cupiditate.</p>
              </Tile>
              <Tile image={brandPic}/>
                <Tile image={storyPic}/>
              <Tile title="The Brand" ptekst="lorem50 adnalsdnlasndla latijns blkalbalaalorem50 adnalsdnlasndla latijns  blkalbalaalorem50 adnalsdnlasndla latijns blkalbalaalorem50 adnalsdnlasndla latijns blkalbalaalorem50 adnalsdnlasndla latijns blkalbalaalorem50 adnalsdnlasndla latijns blkalbalaa"
              ptekst2="nog een verhaal erbij"/>

          </footer>
      </>
  );
}

export default App;



