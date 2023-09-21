import UserOne from './assets/user_1_thumbnail.svg';
import UserTwo from './assets/user_2_thumbnail.svg';

export const mockFeed = [
  {
    userName: 'Theresa Webb',
    postedAt: Date.now() - 10 * 1000,
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    comments: ['world', 'hello'],
    editedAt: 0,
    emoji: `👋`,
    image: UserOne,
  },
  {
    userName: 'Marvin McKinney',
    postedAt: Date.now() - 20 * 1000,
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    comments: ['world'],
    editedAt: 83478487378,
    emoji: `😞`,
    image: UserTwo,
  },
];
