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

// Professional wishlist - rose/red particles
export const triggerHeartExplosion = (x = 0.5, y = 0.5) => {
  // Pink/red elegant burst
  confetti({
    particleCount: 35,
    spread: 90,
    origin: { x, y },
    colors: ['#F43F5E', '#FB7185', '#FDA4AF'],
    startVelocity: 28,
    decay: 0.91,
    gravity: 1.0,
    scalar: 0.9,
  });

  // Secondary softer particles
  confetti({
    particleCount: 20,
    spread: 70,
    origin: { x, y },
    colors: ['#FECDD3', '#FCA5A5'],
    startVelocity: 20,
    decay: 0.88,
    gravity: 0.8,
    scalar: 0.6,
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

// Professional add to cart - elegant particles
export const triggerShoppingBag = (x = 0.5, y = 0.5) => {
  // Emerald green burst
  confetti({
    particleCount: 40,
    spread: 80,
    origin: { x, y },
    colors: ['#10B981', '#14B8A6', '#059669'],
    startVelocity: 25,
    gravity: 0.9,
    scalar: 0.8,
  });

  // Gold accent sparkles
  confetti({
    particleCount: 25,
    spread: 60,
    origin: { x, y },
    colors: ['#FBBF24', '#F59E0B', '#D97706'],
    startVelocity: 30,
    gravity: 0.7,
    scalar: 0.6,
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

// Professional removal animation - localized to button, subtle particles fade down
export const triggerSadRemoval = (x = 0.5, y = 0.5) => {
  // Very localized gray particles - small spread, stays near button
  confetti({
    particleCount: 15,
    spread: 25, // Reduced spread - stays near button
    origin: { x, y },
    colors: ['#CBD5E1', '#94A3B8', '#64748B'],
    startVelocity: 10,
    gravity: 1.5,
    scalar: 0.5, // Smaller particles
    decay: 0.95,
    ticks: 60,
    angle: 270, // Downward direction
  });

  // Tiny secondary particles - very localized
  setTimeout(() => {
    confetti({
      particleCount: 8,
      spread: 15, // Very tight spread
      origin: { x, y },
      colors: ['#E2E8F0', '#CBD5E1'],
      startVelocity: 6,
      gravity: 1.2,
      scalar: 0.3, // Very small particles
      decay: 0.93,
      ticks: 50,
      angle: 270,
    });
  }, 80);
};

