$(function () {
  listItems();
});

function listItems () {
  $.getJSON('https://yz7z1tqx0e.execute-api.us-east-1.amazonaws.com/dev/api', (data) => {
    let users = [];
    $(data).each(function (i) {
      console.log(data);
      console.log(data[i]);
      console.log(data[i].name);
      users.push("<tr><td>" + data[i].name + "</td>" +
		 "<td>" + data[i].country + "</td>" +
		 "<td>" + data[i].created_at + "</td></tr>");
    });
    const e = document.getElementById('data-table');
    e.insertAdjacentHTML('beforeEnd', users.join(""));
  });
}
