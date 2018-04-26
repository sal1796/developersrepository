$(document).ready(function(){
    var contentDiv = document.getElementById('content');
    $('#userControlLink').on('click', function(){
        contentDiv.innerHTML = document.getElementById('userControlDiv').outerHTML;
        $('#content').css({opacity: 0, width: '20%',visibility: "visible"}).animate({opacity: 1,width:'80%'}, 'slow');
    });
    $('#viewEmployeeLogsLink').on('click', function(){
        contentDiv.innerHTML = document.getElementById('employeeLogsDiv').outerHTML;
        $('#content').css({opacity: 0, width: '20%', visibility: "visible"}).animate({opacity: 1,width:'80%'}, 'slow');
    });
    $('#changeDepartmentCodeLink').on('click', function(){
        contentDiv.innerHTML = document.getElementById('changeDepartmentCodeDiv').outerHTML;
        $('#content').css({opacity: 0, width: '20%', visibility: "visible"}).animate({opacity: 1, width:'80%'}, 'slow');
    });         
    $('#logoutLink').on('click', function(){
        alert('You have logged out of the system!');
    });
});