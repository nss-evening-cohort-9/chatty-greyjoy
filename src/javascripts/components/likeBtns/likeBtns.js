// import getMessages from '../getMessages/getMessages';
import $ from '../../../../node_modules/jquery';

const counterArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const likeBtnEvent = () => {
  $('.likes').click((e) => {
    e.preventDefault();
    counterArr.forEach((num) => {
      const theId = `unique${num}`;
      const radioUserSelected = document.querySelectorAll('.userSelector');
      if ($(radioUserSelected).is(':checked')) {
        console.error('is checked');
      }
      if (e.target.id === theId) {
        const likeNum = document.getElementById(theId);
        const oldNum = likeNum.firstChild.innerHTML;
        likeNum.firstChild.innerHTML = parseInt(oldNum, 10) + 1;
      }
    });
    // getMessages.likeIdBuilderArr.forEach((num) => {
    //   const theId = `unique${num}`;
    //   if (e.target.id === theId) {
    //     const likeNum = document.getElementById(theId);
    //     const oldNum = likeNum.firstChild.innerHTML;
    //     likeNum.firstChild.innerHTML = parseInt(oldNum, 10) + 1;
    //   }
    // });
  });
  $('.dislikes').click((e) => {
    e.preventDefault();
    counterArr.forEach((num) => {
      const theId = `uniquer${num}`;
      if (e.target.id === theId) {
        const dislikeNum = document.getElementById(theId);
        const oldNum = dislikeNum.firstChild.innerHTML;
        dislikeNum.firstChild.innerHTML = parseInt(oldNum, 10) + 1;
      }
    });
  });
  //   getMessages.likeIdBuilderArr.forEach((num) => {
  //     const theId = `uniquer${num}`;
  //     if (e.target.id === theId) {
  //       const dislikeNum = document.getElementById(theId);
  //       console.error(dislikeNum.firstChild.innerHTML);
  //       const oldNum = dislikeNum.firstChild.innerHTML;
  //       dislikeNum.firstChild.innerHTML = parseInt(oldNum, 10) + 1;
  //     }
  //   });
  // });
};

export default { likeBtnEvent };
