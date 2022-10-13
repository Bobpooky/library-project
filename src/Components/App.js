import React from 'react';
import '../Style/App.css';
import BatmanComic from './BatmanComic';

function App() {
  const [showInfiniteColl, setShowInfiniteColl] = React.useState(false);
  const [infiniteVolumes, setInfiniteVolumes] = React.useState([
    {
      titre: "State of terror part",
      volume: "1",
      source: "https://bdi.dlpdomain.com/album/9791026821731/couv/M400x500/batman-infinite-tome-1.jpg",
      alt: "couverture volume 1",
    },

    {
      titre: "State of terror part2",
      volume: "2",
      source: "https://bdi.dlpdomain.com/album/9791026822110/couv/M400x500/batman-infinite-tome-2.jpg",
      alt: "couverture volume 2",
    },
    {
      titre: "State of terror part3",
      volume: "3",
      source: "https://bdi.dlpdomain.com/album/9791026827214/couv/M400x500/batman-infinite-tome-3.jpg",
      alt: "couverture volume 3",
    }
  ]);

  const [showEarthOneColl, setShowEarthOneColl] = React.useState(false);
  const [earthOneVolumes, setEarthOneVolume] = React.useState([
    {
      titre: "Earth one - 1",
      volume: "1",
      source: "https://bdi.dlpdomain.com/album/9782365772488/couv/M400x500/batman-terre-un-tome-1.jpg",
      alt: "couverture volume 1",
    },

    {
      titre: "Earth one - 2",
      volume: "2",
      source: "https://pictures.abebooks.com/isbn/9782365778497-fr.jpg",
      alt: "couverture volume 2",
    },
    {
      titre: "Earth one - 3",
      volume: "3",
      source: "https://www.bdfugue.com/media/catalog/product/cache/1/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9791026817765_1_75.jpg",
      alt: "couverture volume 3",
    }
  ]);

  function buttonShowInfinite() {
    setShowInfiniteColl(!showInfiniteColl)
  };
  function buttonShowEarthOne() {
    setShowEarthOneColl(!showEarthOneColl)
  };
  function buttonAllCollections() {
    if (!showInfiniteColl || !showEarthOneColl) {
      return setShowInfiniteColl(!showInfiniteColl) + setShowEarthOneColl(!showEarthOneColl)
    }
  };


  return (
    <div className="App">
      <div id='batComicHeader'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo4K9PReTiRVJeAiC4_zddoGg8VmkFR0pfDw&usqp=CAU" alt="batman logo"></img>
        <h1>My Batman comics collection</h1>
      </div>
      <button onClick={buttonShowInfinite}>Show Infinite Collection{showInfiniteColl ? '🔴' : '🟢'}</button>
      <button onClick={buttonShowEarthOne}>Show Earth-One Collection{showEarthOneColl ? '🔴' : '🟢'}</button>
      <button onClick={buttonAllCollections}>Show all Collections{(showEarthOneColl || showInfiniteColl) ? '🔴' : '🟢'}</button>

      <div className='volume'>
        {infiniteVolumes
          .filter((volume) => !showInfiniteColl)
          .map((volume) => <BatmanComic{...volume} />)}
        {earthOneVolumes
          .filter((volume) => !showEarthOneColl)
          .map((volume) => <BatmanComic{...volume} />)}
      </div>
    </div>
  );
}

export default App;
