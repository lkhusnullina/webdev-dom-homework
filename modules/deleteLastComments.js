// import { getComments } from './store.js';

import { deleteComment } from './api.js';
import { renderComments } from './comments.js';
import { getComments } from './store.js';

// export const init = () => {
//   const removeFormButton = document.querySelector('.remove-form-button');
//   const listComments = document.querySelector('.comments');
//   removeFormButton.addEventListener('click', () => {
//     const lastChild = listComments.lastChild;
//     lastChild.remove();
//     getComments().pop();
//   });
// };

export const init = () => {
  const d = document.querySelectorAll('.delete-button');
  for (const db of d) {
    db.addEventListener('click', delCom);
  }
};

function delCom(event) {
  const commentBlock = event.target.closest('.comment');
  const commentId = commentBlock.dataset.id;
  if (commentId) {
    deleteComment(commentId);
  }
  getComments();
  renderComments();
}
