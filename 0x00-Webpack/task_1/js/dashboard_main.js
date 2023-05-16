import $ from 'jquery';
import debounce from 'lodash/debounce';

const countElement = $('#count');
let count = 0;

const updateCounter = debounce(() => {
  count++;
  countElement.text(`${count} clicks on the button`);
}, 500);

const button = $('<button>').text('Click here to get started').click(updateCounter);

$('body').append(
  $('<p>').text('Holberton Dashboard'),
  $('<p>').text('Dashboard data for the students'),
  button,
  countElement,
  $('<p>').text('Copyright - Holberton School')
);
