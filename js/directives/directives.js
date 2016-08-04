app.directive("runoobDirective", function() {
    return {
        template : "<h1>自定义指令!</h1>"
    };
});

app.directive("showList",[function(){
    return {
        restrict:'EA',
        templateUrl:'templates/list.html'
    }
}]);

app.directive("fileRead", [function () {
    return {
        scope: {
            fileread: "=",
            fileurl:"="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                scope.$apply(function () {
                    scope.fileread = changeEvent.target.files[0];
                    // or all selected files:
                    // scope.fileread = changeEvent.target.files;
                });

                var objUrl;
                if(navigator.userAgent.indexOf("MSIE")>0){
                    objUrl = scope.fileread;
                }else {
                    objUrl = InputFileOp.GetObjectUrl(scope.fileread);
                }

                scope.$apply(function () {
                    scope.fileurl=objUrl;
                })
                console.log("objUrl = "+objUrl) ;


            });
        }
    }
}]);