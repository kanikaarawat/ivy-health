// src/hooks/useRewardAnimation.js
import { useReward } from 'react-rewards';

export function useConfettiReward() {
  const { reward: confettiReward, isAnimating } = useReward('confettiReward', 'confetti', {
    lifetime: 200,
    angle: 90,
    decay: 0.91,
    spread: 100,
    startVelocity: 35,
    elementCount: 80,
    elementSize: 8,
    zIndex: 9999,
  });

  return { confettiReward, isAnimating };
}

export function useEmojiReward(emoji = '❤️') {
  const { reward: emojiReward, isAnimating } = useReward('emojiReward', 'emoji', {
    emoji: [emoji],
    lifetime: 300,
    angle: 90,
    decay: 0.91,
    spread: 100,
    startVelocity: 25,
    elementCount: 20,
    zIndex: 9999,
  });

  return { emojiReward, isAnimating };
}

export function useBalloonReward() {
  const { reward: balloonReward, isAnimating } = useReward('balloonReward', 'balloons', {
    lifetime: 300,
    angle: 90,
    decay: 0.99,
    spread: 60,
    startVelocity: 20,
    elementCount: 10,
    zIndex: 9999,
  });

  return { balloonReward, isAnimating };
}

