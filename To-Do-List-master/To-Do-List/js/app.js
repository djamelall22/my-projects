// sellect the elements
const clear = document.querySelector('.clear');
const dateElement = document.querySelector('#date');
const list = document.querySelector('#list');
const input = document.querySelector('#input');

//classes names
const CHECK = 'fa-check-circle';
const UNCHECK = 'fa-circle-thin';
const LINE_THROUGH = 'lineThrough';

// variables
const LIST = [];
let id = 0;

//Show today date
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString('fr-FR', options);

//add to do function
const addToDo = (toDo, id, done, trash) => {
  if (trash) {
    return;
  }
  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH : '';

  const item = `<li class="item">
  <i class="fa ${DONE} co" job="complete" id=${id}></i>
  <p class="text ${LINE}">${toDo}</p>
  <i class="fa fa-trash-o de" job="delete" id=${id}></i>
</li>`;

  const position = 'beforeend';
  list.insertAdjacentHTML(position, item);
};

// add item to the list when the user use Enter key
document.addEventListener('keyup', (event) => {
  const toDo = input.value;
  if (event.keyCode === 13) {
    //   if the input is not empty
    if (toDo) {
      addToDo(toDo, id, false, false);
      LIST.push({
        name: toDo,
        id: id,
        done: false,
        trash: false,
      });

      id++;
    }
    input.value = '';
  }
});

//complete to do
const completeToDo = (element) => {
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector('.text').classList.toggle(LINE_THROUGH);
};
