export const horizontalScrollAbout = function () {
  if (window.innerWidth > 1024) {
    const myScrollY = window.scrollY;
    const aboutOffset = document.querySelector('.about-wrapper').offsetTop;
    const aboutHeight = document.querySelector('.about-wrapper').offsetHeight;
    const myScrollWidth = document.querySelector('.about__holder').scrollWidth;
    const viewportWidth = window.innerWidth
    
    if (myScrollY > aboutOffset && myScrollY < aboutOffset + myScrollWidth + 5) {
      const progress = (myScrollY - aboutOffset) / myScrollWidth;
      const maxScroll = myScrollWidth + 5 - viewportWidth;
      document.querySelector('.about__holder').style.transform = `translateX(-${progress * maxScroll}px)`;
    }
    if (myScrollY <= aboutOffset) {
        document.querySelector('.about__holder').style.transform = `translateX(0)`;
    }
  }
}