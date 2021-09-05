import gsap from 'gsap';

export const showElement = (target, options = {}) => {
  gsap.from(target, { y: '3rem', opacity: 0, ...options });
};
