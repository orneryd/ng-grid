/// <reference path="../../lib/knockout-2.2.0.js" />
/// <reference path="../constants.js" />
﻿/// <reference path="../templates/aggregateTemplate.js" />
/// <reference path="../namespace.js" />
ko.bindingHandlers['ngRow'] = (function () {
    return {
        'init': function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            var row = valueAccessor();
            var grid = viewModel.$parent;
            var html;
            if (row.isAggRow) {
                html = ng.aggregateTemplate();
                if (row.aggLabelFilter) {
                    html = html.replace(CUSTOM_FILTERS, '| ' + row.aggLabelFilter);
                } else {
                    html = html.replace(CUSTOM_FILTERS, "");
                }
            } else {
                html = grid.rowTemplate;
            }
            var rowElem = $(document.createElement(html));
            ko.applyBindings(row, rowElem);
            element.append(rowElem);
        }
    };
}());