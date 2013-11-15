var delegate = require('delegate');
var ObjectDocument = require('object-document');

delegate.bind(document, '[data-click-toggle-class]', 'click', onClickToggleClass);
delegate.bind(document, '[data-click-add-class]', 'click', onClickAddClass);

function onClickToggleClass(click) {
  var target = ObjectDocument.wrapElement(click.delegateTarget);
  var className = target.getAttribute('data-click-toggle-class');

  var solitary = (function () {
    if (target.hasAttribute('data-behaviour')) {
      if (target.getAttribute('data-behaviour') === 'solitary') {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  })();

  target.toggleClass(className);

  if (solitary) {
    target.siblings.forEach(function (sibling) {
      sibling.removeClass(className);
    });
  }
}

function onClickAddClass(click) {
  var target = ObjectDocument.wrapElement(click.delegateTarget);
  var className = target.getAttribute('data-click-add-class');

  var solitary = (function () {
    if (target.hasAttribute('data-behaviour')) {
      if (target.getAttribute('data-behaviour') === 'solitary') {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  })();

  target.addClass(className);

  if (solitary) {
    target.siblings.forEach(function (sibling) {
      sibling.removeClass(className);
    });
  }
}
