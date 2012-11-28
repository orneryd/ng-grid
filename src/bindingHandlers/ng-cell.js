/// <reference path="../../lib/knockout-2.2.0.js" />
ko.bindingHandlers['ngCell'] = (function () {
    return {
        'init': function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            var col = valueAccessor();
            var cell = $(document.createElement(col.cellTemplate));
            ko.applyBindings(viewModel, cell);
            element.append(cell);
        }
    };
}());