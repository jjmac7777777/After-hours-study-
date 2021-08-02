"use strict"
$(document).ready(function (){

    const mainTable = $("#main-table");
    const mainTableHeaderRow = $("#main-table-header-row");
    const mainTableBody = $("#main-table-body");

    // TODO: Question 3 - Create a click event for the StripedModeButton
    //  that when clicked will toggle the
    //  bootstrap class '.table-striped' on the mainTable.
    //  Bootstrap class can be found here ---> https://getbootstrap.com/docs/4.6/content/tables/#striped-rows
    const stripedModeButton = $("#striped-table-button");
    stripedModeButton.click(function (e) {
        alert('stripedModeButton clicked');
        mainTable.toggleClass("table-striped");
    });
    // stripedModeButton.addEventListener('click', function(e) {
    //     alert('My element was clicked!');
    //     mainTable.toggleClass("table-striped");
    // });
    // TODO: Question 4 -
    //  Option 1 ---> First create a class that adds a border to
    //  the element that it is called on. Then Create a click event for
    //  the cellBorderButton that when clicked will use the .toggleClass()
    //  method to toggle the class you created above.
    //  Option 2 ---> Create a click event for the cellBorderButton
    //  that when clicked will toggle the
    //  bootstrap class '.table-bordered' on the mainTable.
    //  Bootstrap class can be found here ---> https://getbootstrap.com/docs/4.6/content/tables/#bordered-table
    const cellBorderButton = $("#cell-border-button");
    cellBorderButton.click(function (e) {
        alert('cellBorderButton clicked');
        mainTable.toggleClass("table-bordered");
    });

    // TODO: Question 7 -
    //  Option 2 ---> Create a click event for the darkModeButton
    //  that when clicked will toggle the
    //  bootstrap classes '.table-dark' on the mainTable and '.bg-dark,
    //  .navbar-dark' on the nav element.
    //  Bootstrap class can be found here ---> https://getbootstrap.com/docs/4.0/components/navbar/#color-schemes
    const darkModeButton = $("#dark-mode-button");
    darkModeButton.click(function (e) {
        alert('darkModeButton clicked');
        mainTable.toggleClass("table-dark");
        $("nav").toggleClass("bg-dark");
        $("nav").toggleClass("navbar-dark");
    });

    // TODO: Question 8 - You will need to add an event to the employeeTypeDropdown
    //  so that when there is a change in its value it will call the getUsersFromDB function.
    const employeeTypeDropdown = $("#employee-type-dropdown");
    employeeTypeDropdown.onchange = getUsersFromDB();



    function getUsersFromDB(){
        const dbUrl = "data/users.json";
        // Here we are making a request to retrieve the users
        $.get(dbUrl).done(function(users) {

            // This will hold all of our rows that we
            // add for each user.
            var tableBodyHTML = "";

            var filteredUsers = filterUsers(users);

            filteredUsers.forEach(function (singleUser) {

                // We add to tableBodyHTML with the generateTableRowFromUser function.
                // This adds a row of info to the table for each user
                tableBodyHTML += generateTableRowFromUser(singleUser);


            })

            // Here we give our mainTable its html
            mainTableBody.html(tableBodyHTML);

            // Here we add the event listeners to the dom
            // after the users have been added to the dom.
            addingEventListeners();
        });


    }


    // This function should filter users based on what is
    // selected in the drop down.
    function filterUsers(usersToFilter) {

        var selectedValue = employeeTypeDropdown.val();
        var filteredUsers = []

        usersToFilter.forEach(function (user) {

            // TODO: Question 8 - You will need to use the value retrieved from the
            //  the dropdown and compare its value to determine if it matches the
            //  the user's job.

            // Here we only push users that meet our criteria
            if (selectedValue === "All"){
                filteredUsers.push(user)
            }else if (selectedValue === "Interns"){
                filteredUsers.push(user)

            }

        })

        return filteredUsers;
    }


    // This function when called will return a table header row
    // based on the generateTableHeader functions called in it.
    function generateTableHeaderRow(){
        var headerRowHTML = "";

        // TODO: Question 2 - Add additional table headers here to
        //  give a header for each table data element.

        headerRowHTML += '<tr>';
        headerRowHTML += generateTableHeader("ID#");
        headerRowHTML += generateTableHeader("First");
        headerRowHTML += generateTableHeader("Last");
        headerRowHTML += generateTableHeader("Email");
        headerRowHTML += generateTableHeader("Home Address");
        headerRowHTML += generateTableHeader("Job");
        headerRowHTML += '</tr>';

        return headerRowHTML;
    }

    // This function when called will return a single table header element
    function generateTableHeader(data){
        return '<th scope="row">'+ data +'</th>';
    }


    // This function when called will return a single table
    // row based off of the user object that is passed.
    function generateTableRowFromUser(user){
        var rowHTML = "";

        // TODO: Question 2 - Add additional generateTableData functions
        //  to display the remaining information on the user. You can find
        //  all the properties on the users in the users.json file in the
        //  data directory.

        // Down below we call the generateTable functions
        // to add user info to each row.
        rowHTML += '<tr>';
        rowHTML += generateTableHeader(user.id);
        rowHTML += generateTableData(user.first_name);
        rowHTML += generateTableData(user.last_name);
        rowHTML += generateTableData(user.email);
        rowHTML += generateTableData(user.home_address);
        rowHTML += generateTableData(user.job);
        rowHTML += '</tr>';

        return rowHTML;
    }

    // This function when called should return a single table
    // data element. The data property is just a placeholder for
    // whatever data you want to pass into it.
    // TODO: Question 1 - Fix this function
    //  Consider looking at the function
    //  generateTableHeader() as a reference.
    function generateTableData(rowData){
        return '<th scope="row">'+ rowData +'</th>';

    }

    // This function is responsible for adding
    // event listeners to your document
    // IT IS VERY IMPORTANT TO PUT EVENT
    // LISTENERS IN THIS FUNCTION.
    function addingEventListeners(){
        //  Event listeners go in here...

        // TODO: Question 5 - create a hover event for table row
        //  elements using JQuery. The event should
        //  target whatever current element you are hovering over
        //  and should change the background-color of
        //  the element to 'goldenrod'. When are are no longer hovering over
        //  the element the background color should be removed.



        // TODO: Question 6 - create a click event for table row
        //  elements using JQuery. The event should target whatever
        //  current element you are hovering over and should change
        //  the font-size of the of the element to '32px'.
        //  When you click another table row
        //  element that row's fontsize will be set to '32px' and the
        //  previous element clicked will return to the default
        //  font-size (1em).

    }


    mainTableHeaderRow.html(generateTableHeaderRow());

    getUsersFromDB();

})