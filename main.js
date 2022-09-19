// Create a request variable and assign a new XMLHttpRequest object to it.
console.log("started");
//https://api.github.com/orgs/softwareag/repos"
//search : /search/repositories  https://api.github.com/search/repositories?q=


	var app = angular.module('cetApp', []);
	app.controller('cetCtrl', function($scope,$http,$window, $location, $anchorScroll, $timeout,$filter) {


   

            // DEV
            var reposinfo2 = {
              method: 'GET',
             url: "./output/det.json",
              headers: {"Content-Type": "application/json"}
           }
          $http(reposinfo2).then(function(response2){
            $scope.allrows_cconns2 =response2.data;
        
          $scope.totalCount_cc2=$scope.allrows_cconns2.length;
           }, function(){alert("failed in loading file for AWS_US");});
    
      

        

  

     // STAGE
            var reposinfo1 = {
              method: 'GET',
            url: "./output/det.json",
              headers: {"Content-Type": "application/json"}
          }
          $http(reposinfo1).then(function(response){
            $scope.allrows_cconns =response.data;

          $scope.totalCount_cc=$scope.allrows_cconns.length;
          }, function(){alert("failed in loading file for AWS_EU");});






    // INT
                  var reposinfo2 = {
                    method: 'GET',
                  url: "./output/det.json",
                    headers: {"Content-Type": "application/json"}
                }
                $http(aws_au_1012).then(function(response){
                  $scope.allrows_cconns3 =response.data;

                $scope.totalCount_cc3=$scope.allrows_cconns3.length;
                }, function(){alert("failed in loading file for AWS_AU");});

    

              
  

       //substring
  $scope.getData1 = $scope.allrows_cconns2;
  
 //substring
         $scope.getData2 = $scope.allrows_cconns;
//substring
  $scope.getData3 = $scope.allrows_cconns3;

// END of rading files----------------------------------
  //function (updatedDate) {
    //      return updatedDate.substr(0, 10);;

    //  }

      //pagination starts
      $scope.currentPage1 = 0; 
      $scope.pageSize1 = 30;
      $scope.data1 = [];
      $scope.q1 = '';


      $scope.getData1 = function () {
        // needed for the pagination calc
        // https://docs.angularjs.org/api/ng/filter/filter
        return $filter('filter')($scope.data1, $scope.q1)
  
      }


      $scope.numberOfPages1=function(){
        return Math.ceil($scope.getData1().length/$scope.pageSize1);                
    }
    
    for (var i=0; i< 1500; i++) {
        $scope.data1.push("Item "+i);
    }
      //pagination ends

    //part 2 ends


    //substring
  $scope.getData = function (updatedDate) {
          return updatedDate.substr(0, 10);;

      };


        //count Increase
  $scope.count = 0;

  $scope.myFunc = function() {
    $scope.count++;
  };

  $scope.callWorkflow = function( rname) {
    var reposinfo = {
      method: 'GET',
       url: "https://sandeepl.int-aws-us.webmethods.io/runflow/run/sync/1EMxYNkCWg?region="+rname,
       crossDomain : true,

      headers: {
          "Content-Type": "application/json",
      //    "Access-Control-Allow-Origin": "https://pages.github.softwareag.com",
      //    'Access-Control-Request-Methods':'GET,HEAD,OPTIONS',
    //    'Access-Control-Allow-Credentials':'true',
          "Access-Control-Allow-Headers": "webhook_key",
     //     "Origin":"https://pages.github.softwareag.com",
    //      "Accept":"application/json, text/plain, */*",
          "webhook_key":"398f9f1288740231667320931658378988341"
    }
     }
    $http(reposinfo).then(function(response){

     // console.log(response);

      if (rname == 'AWS_US') {
        $scope.alllogs =response.data;
        $scope.totalCount=$scope.allrows.length;
      } else if (rname == 'AWS_EU'){
        $scope.alllogs1 =response.data;
      }else if (rname == 'AWS_AU'){
        $scope.alllogs2 =response.data;
      }else if (rname == 'Azure_US'){
        $scope.alllogs3 =response.data;
      }else if (rname == 'Azure_EU'){
        $scope.alllogs4 =response.data;
      }else if (rname == 'Azure_AU'){
        $scope.alllogs4 =response.data;
      }
      else if (rname == 'All'){
    //    $scope.alllogs0_All = response.data;
        $scope.alllogs = $scope.allrows_All.filter(d => d.environment["@displayValue"] === "AWS_US");
   //     $scope.alllogs1 = $scope.allrows_All.filter(d => d.environment["@displayValue"] === "AWS_EU");
     //   $scope.alllogs2 = $scope.allrows_All.filter(d => d.environment["@displayValue"] === "AWS_AU");
   //     $scope.alllogs3 = $scope.allrows_All.filter(d => d.environment["@displayValue"] === "Azure_US");
    //    $scope.alllogs4 = $scope.allrows_All.filter(d => d.environment["@displayValue"] === "Azure_EU");
     //   $scope.alllogs4 = $scope.allrows_All.filter(d => d.environment["@displayValue"] === "Azure_AU");
      }


          //sort 'orderfilter' orderBy in controller
        //  $scope.propertyName ="last_execution_status['*body']"
         // $scope.reverse=true;
         // $scope.allrows = orderBy($scope.allrows, $scope.propertyName, $scope.reverse);

         // console.log($scope.allrows);
         // console.log($scope.totalCount);

     }, function(){
      console.log("failed in call1");}
      );

     
  };

 

  $scope.callAll = function(demoName) {
   // console.log("--------------"+demoName);
    $scope.currentDateString();
   
   /* $scope.callWorkflow ("OnPrem");
    $scope.callWorkflow ("WMIO Dev");
    $scope.callWorkflow ("WMIO Stag");
    $scope.callWorkflow ("WMIO Preprod");
    $scope.callWorkflow ("WMIO INT");*/

   $scope.callWorkflow ("AWS_US");

  };

   //&reporting_date=03/08/2021

   $scope.currentDateString = function() {
    //date
    let current_datetime = new Date()
    $scope.formatted_date =  (current_datetime.getMonth() + 1) + "/" + current_datetime.getDate() + "/" +current_datetime.getFullYear()
 //  console.log("--------------"+formatted_date)
  };

  // default first call
   $scope.callAll ("My First Call");


          $scope.formatVersion = function (actualVersion){

            var fVersion= actualVersion.substring(1, 5) + "." + actualVersion.substring(5,8)+ "." + actualVersion.substring(8,actualVersion.length);
            return fVersion
        }//function closed  

        $scope.formatDate = function (actualDate){

          var fDate= actualDate.substring(0, 10) + " " + actualDate.substring(11,19) ;
          return fDate
      }//function closed  

  
	});


          //pagination : Part 2
          //We already have a limitTo filter built-in to angular,
          //let's make a startFrom filter
          app.filter('startFrom', function() {
            return function(input, start) {
                if (!input || !input.length) { return; }
                start = +start; //parse to int
                return input.slice(start);
            }
        });


    //tabs
          function connectorTabs(tabName) {
            var i;
            var x = document.getElementsByClassName("wmiotabtype");
            for (i = 0; i < x.length; i++) {
              x[i].style.display = "none";
            }
            document.getElementById(tabName).style.display = "block";

            if(tabName === "Schedules"){
              document.getElementById('defaultOpen2').click();
            }
          }
          //// Get the element with id="defaultOpen" and click on it
          //  document.getElementById("defaultOpen").Click();

          
          //tabs schedules
          function connectorTabs2(tabName) {
            var i;
            var x = document.getElementsByClassName("wmiotabtype2");
            for (i = 0; i < x.length; i++) {
              x[i].style.display = "none";
            }
            document.getElementById(tabName).style.display = "block";
           
          }
