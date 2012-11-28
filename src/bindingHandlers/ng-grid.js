ko.bindingHandlers['ngGrid'] = (function () {
    return {
        'init': function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            var options = valueAccessor();
            options.gridDim = new ng.Dimension({ outerHeight: element.height(), outerWidth: $element.width() });
            var grid = new ng.Grid(options);
            var gridElem = $(ng.defaultGridTemplate());
            ng.gridService.StoreGrid(element, grid);
            grid.footerController = new ng.Footer(grid);
            // if it is a string we can watch for data changes. otherwise you won't be able to update the grid data
            options.data.subscribe(function (a) {
                if (!a) return;
                grid.sortedData = $.extend(true, [], a);
                grid.searchProvider.evalFilter();
                grid.configureColumnWidths();
                grid.refreshDomSizes();
            }, options.watchDataItems);
            //set the right styling on the container
            element.addClass("ngGrid")
                   .addClass("ui-widget")
                   .addClass(grid.gridId.toString());
            //call update on the grid, which will refresh the dome measurements asynchronously
            element.append(gridElem);// make sure that if any of these change, we re-fire the calc logic
            var footer = gridElem.find(".ngFooterPanel");
            ko.applyBindings(grid, gridElem);
            ko.applyBindings(grid.footerController, footer);
            //walk the element's graph and the correct properties on the grid
            domUtilityService.AssignGridContainers(element, grid);
            grid.configureColumnWidths();
            //now use the manager to assign the event handlers
            gridService.AssignGridEventHandlers(grid);
            grid.aggregateProvider = new ng.AggregateProvider(grid);
            //initialize plugins.
            angular.forEach(options.plugins, function (p) {
                p.init(grid);
            });
        }
    };
}());