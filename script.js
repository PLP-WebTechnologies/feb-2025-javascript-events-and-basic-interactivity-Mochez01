
/* script.js */
// Event Handling
const clickBtn = document.querySelector('#clickBtn');
clickBtn.addEventListener('click', () => {
  alert('Button was clicked!');
});

const hoverBox = document.querySelector('#hoverBox');
hoverBox.addEventListener('mouseenter', () => {
  hoverBox.style.backgroundColor = 'lightblue';
});
hoverBox.addEventListener('mouseleave', () => {
  hoverBox.style.backgroundColor = '';
});

document.addEventListener('keydown', (e) => {
  console.log(`You pressed: ${e.key}`);
});

document.querySelector('#secretBtn').addEventListener('dblclick', () => {
  alert('You double clicked!');
});

// // Interactive Elements
const toggleBtn = document.querySelector('#toggleBtn');
toggleBtn.addEventListener('click', () => {
  toggleBtn.textContent = toggleBtn.textContent === 'Clicked!' ? 'Toggle' : 'Clicked!';
  toggleBtn.style.backgroundColor = toggleBtn.style.backgroundColor === 'green' ? '' : 'green';
});

const slides = [
  'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];
let currentSlide = 0;

const slide = document.querySelector('#slide');
document.querySelector('#prev').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slide.src = slides[currentSlide];
});
document.querySelector('#next').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  slide.src = slides[currentSlide];
});

const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
    const target = document.querySelector(`#${tab.dataset.target}`);
    target.classList.add('active');
  });
});

// // Form Validation
const form = document.querySelector('#myForm');
const feedback = document.querySelector('#feedback');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  let messages = [];

  if (!email.includes('@')) messages.push('Invalid email format.');
  if (password.length < 8) messages.push('Password must be at least 8 characters.');

  feedback.textContent = messages.length > 0 ? messages.join(' ') : 'Form is valid!';
});

document.querySelector('#password').addEventListener('input', (e) => {
  const msg = e.target.value.length >= 8 ? 'Strong password' : 'Too short';
  feedback.textContent = msg;
});
