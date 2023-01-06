function changeIcon(icon) {
  icon.classList.toggle('fa-times');
}

const navLinks = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('collapsibleNavbar');
// eslint-disable-next-line no-undef
const bsCollapse = new bootstrap.Collapse(menuToggle);
navLinks.forEach((n) => {
  n.addEventListener('click', () => { bsCollapse.toggle(); });
});

const featuredSpeakers = [{
  id: 1,
  img: 'farhan.svg',
  name: 'M. Farhan',
  intro: 'A motivational speaker for young developers',
  desc: 'He has developed some beautiful websites for children',
},
{
  id: 2,
  img: 'speaker.svg',
  name: 'Geoff Roman',
  intro: '',
  desc: 'A multi-award-winning marketing speaker, Geoff Ramm has worked with the likes of Bauer Media Group, Honda and British Airways on hammering down their customer service strategies.',
},
{
  id: 3,
  img: 'ellis.jpg',
  name: 'Ellis Scot',
  intro: 'Proffessor of Entrepreneurial Legal Studies at Harvard Law School.',
  desc: 'Ellis studies commons-based peer production, and published his seminal book The Wealth of Netvmds 2006.',
},
{
  id: 4,
  img: 'liam.jpg',
  name: 'Liam Berry',
  intro: 'Liam helped bring the Internet to Asia and is an',
  desc: 'outspoken advocate for the open web and digtal commons. In 2012, he was inducted into the inaugural class of the Internet Society\'s (ISOC) Internet Hall of Fame.',
},
{
  id: 5,
  img: 'ruby.jpg',
  name: 'Ruby Dean',
  intro: 'Director of Art Centre Nabi and a board member of CC Korea.',
  desc: 'As the main venue for new meda art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
},
{
  id: 6,
  img: 'finlay.jpg',
  name: 'Finlay Smith',
  intro: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
  desc: 'Finlay had been leading open-source projects at the Mozilla Foundation such as the open source movement.',
},
];

const conferenceSpeakers = document.getElementById('speakers');
featuredSpeakers.forEach((speaker) => {
  const speakers = document.createElement('guests');
  speakers.innerHTML = `
<div class="col-md-6 my-5">
  <div class="row">
      <img src="/images/${speaker.img}" class="col-md-6 rounded-circle" alt="${speaker.name} as a speaker." height="200px">
      <div class="card bg-light col-md-6">
          <div class="card-body">
              <h5 class="card-title text-dark fw-bold">${speaker.name}</h5>
              <div class="row fw-bold fst-italic text-danger">${speaker.intro}</div>
              <hr width="30px" size="2" class="mt-2">
              <div class="row">${speaker.desc}</div>
          </div>
      </div>
  </div>
</div>
`;
  conferenceSpeakers.appendChild(speakers);
});
