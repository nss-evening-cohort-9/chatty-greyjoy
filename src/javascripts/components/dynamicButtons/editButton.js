import getMessages from '../getMessages/getMessages';

const editButton = () => {
  const editButtons = document.getElementsByClassName('editBtn');
  for (let i = 0; i < editButtons.length; i += 1) {
    editButtons[i].addEventListener('click', getMessages.editMessage);
  }

  // edit button next to the delete button that,
  // when clicked, will take the message and put it back in the message input at the top.
  // document.addEventListener('click', (e) => {
  //   console.error(e.target);
  //   if (e.target.classList.contains('editBtn')) {
  //     console.error('hi');
  //   }
  // });
};

export default { editButton };
