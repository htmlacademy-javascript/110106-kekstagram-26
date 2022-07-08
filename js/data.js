import {getRandomArrayElement, getRandomInt} from './util.js';

const NAMES = [
  'Иван',
  'Мария',
  'Наталья',
  'Александр',
  'Артем',
  'Светлана',
  'Кристина',
  'Софья',
  'Михаил',
  'Борис',
];

const MESSAGES = [
  'В целом всё неплохо. Но не всё.',
  'Всё отлично!',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTIONS = [
  'Солнечный луч.',
  'Красивый, летний денёк.',
  'Секретное место моего города.',
  'Как я провёл лето.',
  'Котики.',
];

const MAX_COMMENTS = 15;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const PHOTO_COUNT = 25;

const createNewComments = (id) => ({
  id: id,
  avatar: `img/avatar-${id}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const createNewPhoto = (id) => {
  const comments = [];
  const commentsCount = getRandomInt(0, MAX_COMMENTS);
  for (let i = 1; i <= commentsCount; i++) {
    const newObjectComments = createNewComments(i);
    comments.push(newObjectComments);
  }
  return {
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInt(MIN_LIKES, MAX_LIKES),
    id: id,
    url: `photos/${id}.jpg`,
    comments: comments,
  };
};

export function generatePhotos() {
  const PHOTOS = [];
  for (let i = 1; i <= PHOTO_COUNT; i++) {
    const newObject = createNewPhoto(i);
    PHOTOS.push(newObject);
  }
  return PHOTOS;
}
//  const PHOTOS = [
//   {
//     id: 135,
//     url: 'photos/1.jpg',
//     description: '',
//     likes: 15,
//     comments: [
//       {
//         id: 135,
//         avatar: 'img/avatar-6.svg',
//         message: 'В целом всё неплохо. Но не всё.',
//         name: 'Артём',
//       },
//       {
//         id: 135,
//         avatar: 'img/avatar-6.svg',
//         message: 'В целом всё неплохо. Но не всё.',
//         name: 'Артём',
//       },
//       {
//         id: 135,
//         avatar: 'img/avatar-6.svg',
//         message: 'В целом всё неплохо. Но не всё.',
//         name: 'Артём',
//       },
//     ],
//   }
//  ];
