(function() {
function AddComment($modal, mtcLogService) {     
     var LOG = mtcLogService.buildFor("addCommentService", undefined, "AddComment");
    function show(title, comment, confirmCallback, cancelCallback) {
        // Show window          
        LOG.info("add comment modal show method is getting called", show);
            var modalInstance = $modal.open({
                templateUrl: "BudgetLineUiGrid/AddComment/AddComment.html",
                controller: "CommentModalController",
                controllerAs: "addComment",
                backdrop: "static",
                resolve: {
                    title: function() {
                        return title;
                    },
                    comment: function() {
                        return comment;
                    }
                }
            });
            // Register confirm and cancel callbacks
            modalInstance.result.then(
            // if any, execute confirm callback
                function(newcomment) {
                    if (confirmCallback !== undefined) {
                        confirmCallback(newcomment);
                    }
                },
            // if any, execute cancel callback
                function() {
                    if (cancelCallback !== undefined) {
                        cancelCallback();
                    }
                });
        }

    return {        
        show: show 
    };
}
angular.module("BudgetWiseApp")
        .factory("addCommentService", AddComment);
AddComment.$inject = ["$modal", "mtcLogService"];
})(); 
