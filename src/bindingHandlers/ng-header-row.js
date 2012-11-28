ko.bindingHandlers['ngHeaderRow'] = (function () {
    return {
        'init': function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            var grid = valueAccessor();
            var headerRow = $(document.createElement(grid.headerRowTemplate));
            ko.applyBindings(viewModel, headerRow);
            element.append(headerRow);
        }
    };
}());