function getRandomInt(min, max) {
  if (max < min || min < 0 || max < 0) {
    return;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
}

// Результат: true, если строка проходит по длине, и false — если не проходит
function countLengthLine(line, maxLength) {
  return line.length <= maxLength;
}
getRandomInt(-10, -5);
countLengthLine('Привет', 140);

//  const photos = [
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

const MESSAGE = [
  'В целом всё неплохо. Но не всё.',
  'Всё отлично!',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTION = [
  'Солнечный луч.',
  'Красивый, летний денёк.',
  'Секретное место моего города.',
  'Как я провёл лето.',
  'Котики.',
];

const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

const createNewComments = (id) => ({
  id: id,
  avatar: `img/avatar-${id}.svg`,
  message: getRandomArrayElement(MESSAGE),
  name: getRandomArrayElement(NAMES),
});

const createNewPhoto = (id) => {
  const comments = [];
  const commentsCount = getRandomInt(0, 15);
  for (let i = 1; i <= commentsCount; i++) {
    const newObjectComments = createNewComments(i);
    comments.push(newObjectComments);
  }
  return {
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomInt(15, 200),
    id: id,
    url: `photos/${id}.jpg`,
    comments: comments,
  };
};

const photos = [];
for (let i = 1; i <= 25; i++) {
  const newObject = createNewPhoto(i);
  photos.push(newObject);
}
