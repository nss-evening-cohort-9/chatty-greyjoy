import getMessages from '../getMessages/getMessages';
import $ from '../../../../node_modules/jquery';

const likeBtnEvent = () => {
  $('.likes').click((e) => {
    e.preventDefault();
    getMessages.likeIdBuilderArr.forEach((num) => {
      const theId = `unique${num}`;
      if (e.target.id === theId) {
        const likeNum = document.getElementById(theId);
        const oldNum = likeNum.firstChild.innerHTML;
        likeNum.firstChild.innerHTML = parseInt(oldNum, 10) + 1;
      }
    });
  });
  $('.dislikes').click((e) => {
    e.preventDefault();
    getMessages.likeIdBuilderArr.forEach((num) => {
      const theId = `uniquer${num}`;
      if (e.target.id === theId) {
        const dislikeNum = document.getElementById(theId);
        const oldNum = dislikeNum.firstChild.innerHTML;
        dislikeNum.firstChild.innerHTML = parseInt(oldNum, 10) + 1;
      }
    });
  });
};

export default { likeBtnEvent };
