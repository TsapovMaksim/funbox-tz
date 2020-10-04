import React from 'react';
import classNames from 'classnames';

function FeedItem({
  description,
  title,
  taste,
  portionCount,
  present,
  additionalInfo,
  weight,
  onClick,
  className,
  selectedDescription,
  isSelected,
  isDisabled,
}) {
  const [isFirstChoise, setIsFirstChoise] = React.useState(true);

  const onSelectItem = () => {
    onClick();
  };

  const onMouseOut = (isSelected, isFirstChoise) => {
    if (isFirstChoise && isSelected) {
      setIsFirstChoise(false);
    }
  };

  return (
    <li className={classNames('feed__item', className, { disabled: isDisabled })}>
      <div
        className="feed__item-content"
        onClick={() => onSelectItem()}
        onMouseLeave={() => onMouseOut(isSelected, isFirstChoise)}>
        <p className={classNames('feed__item-descr', { first: isFirstChoise })}>{description}</p>
        <h3 className="feed__item-title">{title}</h3>
        <p className="feed__item-taste">{taste}</p>
        <div className="feed__item-info">
          <span className="feed__item-portion">{portionCount} порций</span>
          <span className="feed__item-present">{present} в подарок</span>
          {additionalInfo && <span className="feed__item-additional-info">{additionalInfo}</span>}
        </div>
        <div className="feed__item-weight">
          <span className="feed__item-weight-count">{weight}</span>кг
        </div>
        <div className="feed__item-content-wrapper"></div>
      </div>
      <div className="feed__item-buy">
        {isDisabled && `Печалька, ${taste} закончился`}
        {isSelected && selectedDescription}
        {!isDisabled && !isSelected && (
          <>
            Чего сидишь? Порадуй котэ,{' '}
            <span className="feed__item-buy-btn" onClick={() => onSelectItem()}>
              купи.
            </span>
          </>
        )}
      </div>
    </li>
  );
}

export default FeedItem;
