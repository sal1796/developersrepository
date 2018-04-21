var app = angular.module("app", []);
app.controller("testController", function($scope){
    $scope.actionColumn = true;
    $scope.addRowSpan = true;
    $scope.removeRowSpan = true;
    $scope.fileName = "test";

    $scope.showElements = function(){
      $scope.addRowSpan = true; 
      $scope.removeRowSpan = true;
      $scope.actionColumn = true;
    };

    $scope.hideElements = function(){
        $scope.addRowSpan = false;
        $scope.removeRowSpan = false;
        $scope.actionColumn = false;
    };
    //tableRow can be JSON object retrieved from the server
    $scope.tableRows = [
        {id:"1", firstName:"Harry", middleName:"James", lastName:"Potter",
        age:"21", gender:"Male", city:"London"},
        {id:"2", firstName:"Hermione", middleName:"Jean", lastName:"Granger",
        age:"21", gender:"Female", city:"London"},
        {id:"3", firstName:"Ronald", middleName:"Bilius", lastName:"Weasley",
        age:"21", gender:"Male", city:"Devon"},
        {id:"4", firstName:"Tom", middleName:"Marvolo", lastName:"Riddle",
        age:"61", gender:"Male", city:"Albania"},
        {id:"5", firstName:"Severus", middleName:"Prince", lastName:"Snape",
        age:"52", gender:"Male", city:"London"}
    ];

    $scope.addRow = function(){

      var row = {
        id:"#", firstName:"[First Name]", middleName:"[Middle Name]", lastName:"[Last Name]",
        age:"[Age]", gender:"[Male/Female]", city:"[City]"
      };
      $scope.tableRows.push(row);
    };
    $scope.removeRow = function(index){
            $scope.tableRows.splice(index, 1);
    };
    $scope.exportToExcel = function(type, dl) {
                var fn = $scope.fileName;
                fn = fn+"."+type;
                var elt = document.getElementById('myTable');
                var wb = XLSX.utils.table_to_book(elt, {sheet:"Sheet JS"});
                return dl ?
                        XLSX.write(wb, {bookType:type, bookSST:true, type: 'base64'}) :
                        XLSX.writeFile(wb, fn || ('test.' + (type || 'xlsx')));
            };
});