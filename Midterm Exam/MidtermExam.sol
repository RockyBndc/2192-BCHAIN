//RAQUEL ANN P. BONDOC
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GradeContract {
    enum GradeStatus {Pass, Fail }
    GradeStatus public gradeStatus;

    struct Student{
        string studName;
        uint256 studPrelimGrade;
        uint256 studMidtermGrade;
        uint256 studFinalGrade;
    }

    address public owner; //

    mapping (address => Student) public students;

    //MODIFIERS
    modifier onlyOwner(){
        require(msg.sender == owner, "This function can be only called by OWNER!");
        _;
    }

    modifier validGrade(uint grade) {
        require(grade >= 0 && grade <= 100, "Grade value is INVALID!");
        _;
    }


    //INITIAL
    constructor() {
        owner = msg.sender;
    }

    //EVENTS
    event GradeComputed(string indexed studentName, GradeStatus gradeStatus); 

    //FUNCTIONS
    function setName(string calldata _name) public  {
        students[msg.sender].studName = _name;
    }

    function setPrelimGrade(uint256 _grade) public onlyOwner validGrade(_grade) {
        students[msg.sender].studPrelimGrade = _grade;
    }
    function setMidtermGrade(uint256 _grade) public onlyOwner validGrade(_grade) {
        students[msg.sender].studMidtermGrade = _grade;
    }
    function setFinalGrade(uint256 _grade) public onlyOwner validGrade(_grade) {
        students[msg.sender].studFinalGrade = _grade;
    }

    function calculateGrade() external   {
        Student memory student = students[msg.sender];
        uint256 overallGrade = (student.studPrelimGrade + student.studMidtermGrade +student.studFinalGrade) / 3;

        if (overallGrade >= 74) {
            gradeStatus = GradeStatus.Pass;
        } else {
            gradeStatus = GradeStatus.Fail;
        }

        emit  GradeComputed(student.studName, gradeStatus);
    }


}


