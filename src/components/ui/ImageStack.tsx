import { useState, useRef } from 'react';
import { motion, PanInfo } from 'framer-motion';

interface Card {
  id: number;
  src: string;
  zIndex: number;
}

interface ImageStackProps {
  images: string[];
}

export default function ImageStack({ images }: ImageStackProps) {
  const [cards, setCards] = useState<Card[]>(
    images.map((src, index) => ({
      id: index,
      src: src,
      zIndex: 50 - index * 10,
    }))
  );
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const dragStartPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const minDragDistance: number = 50;

  const getCardStyles = (index: number) => {
    const baseRotation = 2;
    const rotationIncrement = 3;
    const offsetIncrement = -12;
    const verticalOffset = -8;

    return {
      x: index * offsetIncrement,
      y: index * verticalOffset,
      rotate: index === 0 ? 0 : -(baseRotation + index * rotationIncrement),
      scale: 1,
      transition: { duration: 0.5 },
    };
  };

  const handleDragStart = (_: unknown, info: PanInfo) => {
    dragStartPos.current = { x: info.point.x, y: info.point.y };
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const dragDistance = Math.sqrt(
      Math.pow(info.point.x - dragStartPos.current.x, 2) +
        Math.pow(info.point.y - dragStartPos.current.y, 2)
    );

    if (isAnimating) return;

    if (dragDistance < minDragDistance) {
      return;
    }

    setIsAnimating(true);

    setCards((prevCards) => {
      const newCards = [...prevCards];
      const cardToMove = newCards.shift()!;
      newCards.push(cardToMove);

      return newCards.map((card, index) => ({
        ...card,
        zIndex: 50 - index * 10,
      }));
    });

    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="image-stack-wrapper">
      {cards.map((card: Card, index: number) => {
        const isTopCard = index === 0;
        const cardStyles = getCardStyles(index);
        const canDrag = isTopCard && !isAnimating;

        return (
          <motion.div
            key={card.id}
            className={`image-stack-card ${isTopCard ? 'image-stack-card--top' : ''}`}
            style={{
              zIndex: card.zIndex,
            }}
            animate={cardStyles}
            drag={canDrag}
            dragElastic={0.2}
            dragConstraints={{ left: -150, right: 150, top: -150, bottom: 150 }}
            dragSnapToOrigin={true}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            whileHover={
              isTopCard
                ? {
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }
                : {}
            }
            whileDrag={{
              scale: 1.1,
              rotate: 0,
              zIndex: 100,
              boxShadow: '0 25px 50px -12px rgba(101, 35, 1, 0.35)',
              transition: { duration: 0.1 },
            }}
          >
            <img
              src={card.src}
              alt={`Project screenshot ${card.id + 1}`}
              className="image-stack-img"
              draggable={false}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
