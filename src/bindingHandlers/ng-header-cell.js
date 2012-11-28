ko.bindingHandlers['ngHeaderCell'] = (function () {
    return {
        'init': function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            var col = valueAccessor();
            var headerCell = $(document.createElement(col.headerCellTemplate));
            ko.applyBindings(viewModel, headerCell);
            element.append(headerCell);
        }
    };
}());