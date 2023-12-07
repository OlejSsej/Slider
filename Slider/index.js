const sliderItems = document.querySelectorAll('.hero__slider-list-item');
const sliderImages = document.querySelectorAll('.hero__slider-img');

const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');
const dots = document.querySelectorAll('.dot');

const city = document.getElementById('city');
const area = document.getElementById('area');
const time = document.getElementById('time');
const cost = document.getElementById('cost');

let currentIndex = 1;



  

function getCurrentIndex() {
    sliderItems.forEach((item, index) => {
      if (item.classList.contains('active')) {
        currentIndex = index;
      }
    });
    return currentIndex;
}

function setActiveSlide(index) {
    updateContent(index);
    sliderItems.forEach(item => {
        if (item.classList.contains('active')) {
            item.classList.remove('active');
            item.classList.add('nonActive');
          }
    });
    if (sliderItems[index]) {
        sliderItems[index].classList.remove('nonActive');
        sliderItems[index].classList.add('active');
    }


    sliderImages.forEach(image => {
      if (image.classList.contains('active')) {
        image.classList.remove('active');
      }
    });
    if (sliderImages[index]) {
      sliderImages[index].classList.add('active');
    }


    dots.forEach(dot => {
      if (dot.classList.contains('active')) {
        dot.classList.remove('active');
        dot.classList.add('nonActive');
      }
    });
    
    if (dots[index]) {
        dots[index].classList.remove('nonActive');
        dots[index].classList.add('active');
    }

}

function updateContent(index) {
    switch (index) {
      case 0:
        city.innerHTML = 'Rostov-on-Don <br>LCD admiral';
        area.innerHTML = '81 m<sup>2</sup>';
        time.innerHTML = '3.5 months';
        cost.innerHTML = 'Upon request';
        break;
      case 1:
        city.innerHTML = 'Sochi <br>Thieves';
        area.innerHTML = '105 m<sup>2</sup>';
        time.innerHTML = '4 months';
        cost.innerHTML = 'Upon request';
        break;
      case 2:
        city.innerHTML = 'Rostov-on-Don <br>Patriotic';
        area.innerHTML = '93 m<sup>2</sup>';
        time.innerHTML = '3 months';
        cost.innerHTML = 'Upon request';
        break;
      default:
        city.innerHTML = '';
        area.innerHTML = '';
        time.innerHTML = '';
        cost.innerHTML = '';
    }
  }



sliderItems.forEach((item, index) => {
    item.addEventListener('click', () => { 
        setActiveSlide(index);
    });
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
    setActiveSlide(index);
    });
});



prevButton.addEventListener('click', () => {
    const currentIndex = getCurrentIndex();
    const prevIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
    setActiveSlide(prevIndex);
});
  
nextButton.addEventListener('click', () => {
    const currentIndex = getCurrentIndex();
    const nextIndex = (currentIndex + 1) % sliderItems.length;
    setActiveSlide(nextIndex);
});








