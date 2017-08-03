$(function () {
  listItems();

  // When button is clicked, collect form data.
  $('button').click(function () {
    // Function not working yet.
    let data = $('form').serializeArray();
    console.log(data);
    createUser(data);
  });

});

// Update HTML table with all database items.
function listItems () {
  $.getJSON('', (data) => {
    let users = [];
    $(data).each(function (i) {
      users.push("<tr><td>" + data[i].name + "</td>" +
		 "<td>" + data[i].country + "</td>" +
		 "<td>" + data[i].created_at + "</td></tr>");
    });
    const e = document.getElementById('data-table');
    e.insertAdjacentHTML('beforeEnd', users.join(""));
  });
}

// Create a new database item.
function createUser(data) {
  console.log(data);
}
