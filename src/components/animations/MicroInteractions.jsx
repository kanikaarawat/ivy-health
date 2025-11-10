// src/components/animations/MicroInteractions.jsx
import React from 'react';
import confetti from 'canvas-confetti';

// Confetti explosion
export const triggerConfetti = (x = 0.5, y = 0.5) => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { x, y },
    colors: ['#10B981', '#14B8A6', '#06B6D4', '#F59E0B', '#EC4899'],
  });
};

// Heart explosion for wishlist
export const triggerHeartExplosion = (x = 0.5, y = 0.5) => {
  const scalar = 2;
  const heart = confetti.shapeFromText({ text: '❤️', scalar });

  confetti({
    shapes: [heart],
    particleCount: 30,
    spread: 100,
    origin: { x, y },
    scalar,
    startVelocity: 30,
    decay: 0.9,
    gravity: 1.2,
  });
};

// Cart bomb effect
export const triggerCartBomb = (x = 0.5, y = 0.5) => {
  // First explosion
  confetti({
    particleCount: 50,
    spread: 360,
    origin: { x, y },
    colors: ['#EF4444', '#F97316', '#FCD34D'],
    startVelocity: 40,
  });

  // Second wave
  setTimeout(() => {
    confetti({
      particleCount: 30,
      angle: 60,
      spread: 55,
      origin: { x, y },
      colors: ['#DC2626', '#EA580C'],
    });
    confetti({
      particleCount: 30,
      angle: 120,
      spread: 55,
      origin: { x, y },
      colors: ['#DC2626', '#EA580C'],
    });
  }, 100);
};

// Success celebration
export const triggerSuccess = (x = 0.5, y = 0.5) => {
  const count = 200;
  const defaults = {
    origin: { x, y },
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
};

// Star burst
export const triggerStarBurst = (x = 0.5, y = 0.5) => {
  const scalar = 2;
  const star = confetti.shapeFromText({ text: '⭐', scalar });

  confetti({
    shapes: [star],
    particleCount: 25,
    spread: 360,
    origin: { x, y },
    scalar,
    startVelocity: 35,
    decay: 0.9,
  });
};

// Shopping bag celebration
export const triggerShoppingBag = (x = 0.5, y = 0.5) => {
  const scalar = 2;
  const emoji = confetti.shapeFromText({ text: '🛒', scalar });

  confetti({
    shapes: [emoji],
    particleCount: 15,
    spread: 100,
    origin: { x, y },
    scalar,
    startVelocity: 30,
    gravity: 0.8,
  });

  // Add some sparkles
  confetti({
    particleCount: 50,
    spread: 70,
    origin: { x, y },
    colors: ['#10B981', '#FBBF24'],
  });
};

// Fireworks
export const triggerFireworks = () => {
  const duration = 3 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    });
  }, 250);
};

// Money rain (for pricing/orders)
export const triggerMoneyRain = () => {
  const scalar = 2;
  const money = confetti.shapeFromText({ text: '💰', scalar });

  confetti({
    shapes: [money],
    particleCount: 30,
    spread: 180,
    origin: { y: 0 },
    scalar,
    startVelocity: 20,
    gravity: 1.5,
    drift: 0.5,
  });
};

// Sad animation for removing items (crying face)
export const triggerSadRemoval = (x = 0.5, y = 0.5) => {
  const scalar = 2;
  const sadFace = confetti.shapeFromText({ text: '😢', scalar });
  const brokenHeart = confetti.shapeFromText({ text: '💔', scalar });

  // Sad face falls down
  confetti({
    shapes: [sadFace, brokenHeart],
    particleCount: 10,
    spread: 40,
    origin: { x, y },
    scalar,
    startVelocity: 15,
    gravity: 1.5,
    colors: ['#94A3B8', '#64748B', '#475569'],
  });

  // Tears falling
  confetti({
    particleCount: 20,
    spread: 30,
    origin: { x, y },
    colors: ['#93C5FD', '#60A5FA', '#3B82F6'],
    startVelocity: 10,
    gravity: 2,
    scalar: 0.5,
  });
};

