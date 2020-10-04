import React from 'react';
import classNames from 'classnames';

import { FeedItem } from './components';

import 'normalize.css/normalize.css';
import './scss/all.scss';
const data = [
  {
    description: 'Сказочное заморское яство',
    title: 'Нямушка',
    taste: 'с фуа-гра',
    portionCount: 10,
    present: 'мышь',
    weight: '1,5',
    selectedDescrition: 'Печень утки разварная с артишоками.',
    isDisabled: false,
  },
  {
    description: 'Сказочное заморское яство',
    title: 'Нямушка',
    taste: 'с рыбой',
    portionCount: 10,
    present: '2 мыши',
    weight: '2,5',
    selectedDescrition: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    isDisabled: false,
  },
  {
    description: 'Сказочное заморское яство',
    title: 'Нямушка',
    taste: 'с курой',
    portionCount: 10,
    present: '5 мышей',
    weight: '3,5',
    additionalInfo: 'Заказчик будет доволен',
    selectedDescrition: 'Филе из цыплят с трюфелями в бульоне.',
    isDisabled: true,
  },
];

function App() {
  const [selectedItems, setSelectedItems] = React.useState([]);

  const onFeedItemClick = (index) => {
    if (!selectedItems.includes(index)) {
      setSelectedItems([...selectedItems, index]);
    } else {
      setSelectedItems(selectedItems.filter((el) => el !== index));
    }
  };

  return (
    <div className="App">
      <main>
        <section className="feed">
          <div className="container">
            <h2 className="feed__title">Ты сегодня покормил кота?</h2>
            <ul className="feed__list">
              {data.map(
                (
                  {
                    description,
                    portionCount,
                    present,
                    taste,
                    title,
                    weight,
                    additionalInfo,
                    selectedDescrition,
                    isDisabled,
                  },
                  index,
                ) => (
                  <FeedItem
                    key={index}
                    className={classNames({ active: selectedItems.includes(index) })}
                    description={description}
                    portionCount={portionCount}
                    present={present}
                    taste={taste}
                    title={title}
                    weight={weight}
                    additionalInfo={additionalInfo}
                    selectedDescription={selectedDescrition}
                    onClick={() => onFeedItemClick(index)}
                    isSelected={selectedItems.includes(index)}
                    isDisabled={isDisabled}
                  />
                ),
              )}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
