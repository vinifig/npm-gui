'use strict';
angular.module('app')
  .controller('baseController', ['$scope', BaseController]);

function BaseController($scope) {
  $scope.projects = [{
    title: 'proj1',
    author: 'auth1',
    email: 'email1',
    path: 'path1',
    description: 'description1'
  },{
    title: 'proj2',
    author: 'auth2',
    email: 'email2',
    path: 'path2',
    description: 'description2'
  },{
    title: 'proj3',
    author: 'auth3',
    email: 'email3',
    path: 'path3',
    description: 'description3'
  }];

  $scope.project = {};
  $scope.project.i = 0;
  $scope.project.title = '';
  $scope.project.author = '';
  $scope.project.email = '';
  $scope.project.path = 'No folder selected';
  $scope.project.description = '';

  $scope.changeProject = function(i){
    $scope.project.index = i;
    $scope.project.title = $scope.projects[i].title;
    $scope.project.author = $scope.projects[i].author;
    $scope.project.email = $scope.projects[i].email;
    $scope.project.path = $scope.projects[i].path;
    $scope.project.description = $scope.projects[i].description;
  }

  $scope.save = function(){
    let i = $scope.project.index;
    $scope.projects[i].title = $scope.project.title;
    $scope.projects[i].author = $scope.project.author;
    $scope.projects[i].email = $scope.project.email;
    $scope.projects[i].path = $scope.project.path;
    $scope.projects[i].description = $scope.project.description;
  }

  $scope.pickFolder = function(){
    return $scope.project.path = "c:/fake/path"
  }
}
