(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.computedStyleToInlineStyle = mod.exports;
  }
})(this, function (module) {
  "use strict";

  var _Array$prototype = Array.prototype,
      each = _Array$prototype.forEach,
      filter = _Array$prototype.filter;


  function computedStyleToInlineStyle(element) {
    var _context2;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (!element) {
      throw new Error("No element specified.");
    }

    if (options.recursive) {
      var _context;

      (_context = element.children, each).call(_context, function (child) {
        computedStyleToInlineStyle(child, options);
      });
    }

    var computedStyle = getComputedStyle(element);
    (_context2 = (_context2 = options.properties || computedStyle, filter).call(_context2, function (property) {
      return !property.startsWith('-webkit');
    }), each).call(_context2, function (property) {
      element.style[property] = computedStyle.getPropertyValue(property);
    });
  }

  module.exports = computedStyleToInlineStyle;
});