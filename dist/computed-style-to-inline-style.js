const _Array$prototype = Array.prototype;
const each = _Array$prototype.forEach;
const filter = _Array$prototype.filter;

function computedStyleToInlineStyle(element) {
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
}
