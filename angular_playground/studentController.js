mainApp.controller("studentController", function($scope) {
  $scope.student = {
    firstName : "Oumar",
    lastName : "Diarra",
    fees: 154,
    subjects: [
      {name:'Physics',marks:70},
      {name:'Chemistry',marks:80},
      {name:'Math',marks:65},
      {name:'English',marks:75},
      {name:'Hindi',marks:67}
    ],

    fullName: () => {
      var studentObject = $scope.student;
      return studentObject.firstName + " " + studentObject.lastName + " is the students fullName";
    },

    studentFees: () => {
      var studentObject = $scope.student;
      return studentObject.fees;
    }
  };
});
