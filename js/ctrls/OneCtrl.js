app.controller('OneCtrl',['$rootScope','$scope',function($rootScope,$scope){
        $scope.vm={fileread:'',
            FileUrl:''
        }
        $scope.UpdateFile= function (file) {
            $scope.vm.fileread=file;
        }
        $scope.printFile=function(){
            console.log($scope.vm.fileread);
        }
}])