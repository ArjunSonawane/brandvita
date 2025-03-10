(function (domready) {
  'use strict';

  var vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  var options = {
    rootMargin: '-' + (vh * .2) + 'px 0px -' + (vh * .2) + 'px 0px',
    threshold: [0]
  };
  var observer = new IntersectionObserver(onIntersect, options);

  domready(function () {
    var paragraphs = document.querySelectorAll('.lane');
    if (!paragraphs.length) {
      return;
    }
    paragraphs.forEach(function (paragraph) {
      observer.observe(paragraph);
    });
  });

  function onIntersect(entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('lane--in-view');
    });
  }

})(window.domready);