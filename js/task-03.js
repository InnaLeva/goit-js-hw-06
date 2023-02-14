const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listImages = document.querySelector('.gallery');

const makeImagesItems = ({ url, alt }) => `<li><img src="${url}" width="400" alt="${alt}"></img></li>`;

const imagesEl = images.map(makeImagesItems).join('');

listImages.insertAdjacentHTML('afterbegin', imagesEl);

listImages.style.listStyle = 'none';
listImages.style.display = 'flex';
listImages.style.flexWrap = 'column-reverse';
listImages.style.gap = '30px';
listImages.style.justifyContent = 'center';