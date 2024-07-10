import React from 'react';
import CardList from './Card';

const cardsData = [
  { title: 'Card 1', content: 'Content for Card 1' },
  { title: 'Card 2', content: 'Content for Card 2' },
  { title: 'Card 3', content: 'Content for Card 3' },
];

function App() {
  return (
    <div className="App">
      <h1>Card List Example</h1>
      <CardList cards={cardsData} />
    </div>
  );
}

export default App;
