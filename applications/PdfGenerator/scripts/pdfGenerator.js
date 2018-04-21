/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app = angular.module("app", []);
app.controller("testController", function($scope){
    $scope.actionColumn = true;
    $scope.addRowSpan = true;
    $scope.removeRowSpan = true;

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
    $scope.tableRows = [
        {id:"1.", Name:"[Name]", City:"[City]"}
    ];

    $scope.addRow = function(){
      var row = {
        id:"1.", Name:"[Name]", City:"[City]"
      };
      $scope.tableRows.push(row);
    };
    $scope.removeRow = function(index){
            $scope.tableRows.splice(index, 1);
    };
    $scope.export1 = function(){
        var fileName = $scope.fileNameInput1+".pdf";
        kendo.drawing
            .drawDOM("#myCanvas", 
            { 
                paperSize: "A4",
                margin: { top: "2.5cm", bottom: "1.5cm" , left:"0.5cm"},
                scale: 0.8,
                height: 500,
                multiPage: true
            })
                .then(function(group){
                kendo.drawing.pdf.saveAs(group, fileName);
        });
    };
    $scope.export2 = function(){
        var fileName = $scope.fileNameInput2+".pdf";
        kendo.drawing
            .drawDOM("#myCanvas2", 
            { 
                paperSize: "A4",
                margin: { top: "2.5cm", bottom: "1.5cm" , left:"0.5cm"},
                scale: 0.8,
                height: 500,
                multiPage: true
            })
                .then(function(group){
                kendo.drawing.pdf.saveAs(group, fileName);
        });
    };
    $scope.export3 = function(){
        var fileName = $scope.fileNameInput3+".pdf";
        kendo.drawing
            .drawDOM("#myCanvas3", 
            { 
                paperSize: "A4",
                margin: { top: "2.5cm", bottom: "1.5cm" , left:"0.5cm"},
                scale: 0.8,
                height: 500,
                multiPage: true
            })
                .then(function(group){
                kendo.drawing.pdf.saveAs(group, fileName);
        });
    };
});