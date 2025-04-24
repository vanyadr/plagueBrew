export const horizontalScrollAbout = function () {
    const myScrollY = window.scrollY;
    const aboutOffset = document.querySelector('.about-wrapper').offsetTop;
    const aboutHeight = document.querySelector('.about-wrapper').offsetHeight;
    const myScrollWidth = document.querySelector('.about__holder').scrollWidth;
    const viewportWidth = window.innerWidth
    const myPadding = 80;
    
    if (myScrollY > aboutOffset && myScrollY < aboutOffset + myScrollWidth) {
      const progress = (myScrollY - aboutOffset) / myScrollWidth;
      const maxScroll = myScrollWidth - viewportWidth;
      document.querySelector('.about__holder').style.transform = `translateX(-${progress * maxScroll}px)`;
    }
    if (myScrollY <= aboutOffset) {
        document.querySelector('.about__holder').style.transform = `translateX(0)`;
    }
}