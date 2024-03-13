let head4 = document.querySelector('h4');
let head3 = document.querySelector('h3');
let head2 = document.querySelector('h2');
let para = document.querySelector('p');

// function to delay the execution of the code
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// function to hack the data
async function hackData() {
  await delay(2000);
  head2.textContent = 'initializing Hacking ...';
}

async function hackData1() {
  await delay(4000);
  head2.textContent = 'Reading Data ...';
}

async function hackData2() {
  await delay(6000);
  head2.textContent = 'password found ...';
}

async function hackData3() {
  await delay(8000);
  head2.textContent = 'Hacking Complete ...';
}

hackData();
hackData1();
hackData2();
hackData3();
