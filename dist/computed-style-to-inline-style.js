var computedStyleToInlineStyle;
let each, filter;
(function () {
  var _$0 = this;
  var _$1 = _$0.Array;
  var _$2 = _$1.prototype;
  var _$3 = _$2.forEach;
  var _$4 = _$2.filter;
  var _1 = function (element) {
    let _context2;
    const options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!element) {
      throw new Error('No element specified.');
    }
    if (options.recursive) {
      let _context;
      (_context = element.children, each).call(_context, function (child) {
        computedStyleToInlineStyle(child, options);
      });
    }
    const computedStyle = getComputedStyle(element);
    (_context2 = (_context2 = options.properties || computedStyle, filter).call(_context2, function (property) {
      return !property.startsWith('-webkit');
    }), each).call(_context2, function (property) {
      element.style[property] = computedStyle.getPropertyValue(property);
    });
  };
  _$0.computedStyleToInlineStyle = _1;
  each = _$3;
  filter = _$4;
}.call(this));
