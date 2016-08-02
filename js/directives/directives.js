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