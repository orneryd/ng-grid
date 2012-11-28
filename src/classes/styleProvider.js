ng.StyleProvider = function(grid) {
    grid.topPanelStyle = function() {
        return { "height": $scope.topPanelHeight() + "px" };
    };
    grid.headerCellStyle = function(col) {
        return { "height": col.headerRowHeight + "px" };
    };
    grid.rowStyle = function(row) {
        return { "top": row.offsetTop + "px", "height": $scope.rowHeight + "px" };
    };
    grid.canvasStyle = function() {
        return { "height": grid.maxCanvasHt.toString() + "px" };
    };
    grid.headerScrollerStyle = function() {
        return { "height": grid.config.headerRowHeight + "px" };
    };
    grid.topPanelStyle = function() {
        return { "width": grid.rootDim.outerWidth + "px", "height": $scope.topPanelHeight() + "px" };
    };
    grid.headerStyle = function() {
        return { "width": (grid.rootDim.outerWidth - ng.domUtilityService.ScrollW) + "px", "height": grid.config.headerRowHeight + "px" };
    };
    grid.viewportStyle = function() {
        return { "width": grid.rootDim.outerWidth + "px", "height": $scope.viewportDimHeight() + "px" };
    };
    grid.footerStyle = function() {
        return { "width": grid.rootDim.outerWidth + "px", "height": grid.config.footerRowHeight + "px" };
    };
};