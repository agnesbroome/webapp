$.ajax({
  url: 'https://karlroos-systemet.p.mashape.com/country',
  beforeSend: function(request){
    request.setRequestHeader("X-Mashape-Key", "tLl48RdhVxmshod4XUrdqoE3VJR5p1znYAkjsnvJ3UHwelmDuc");
    request.setRequestHeader("Accept", "application/json");
    //header('X-Mashape-Key', 'tLl48RdhVxmshod4XUrdqoE3VJR5p1znYAkjsnvJ3UHwelmDuc')
  },
  success: function(data){
    for (x in data){
      console.log(data[x]['name']);
    }
  }
})

//https://karlroos-systemet.p.mashape.com/product?alcohol_from=0.4&alcohol_to=0.48&country=1&limit=1&offset=0&order_by=price

$.ajax({
  url: 'https://karlroos-systemet.p.mashape.com/product?alcohol_from=0.4&alcohol_to=0.48&country=1&limit=1&offset=0&order_by=price',
  beforeSend: function(request){
    request.setRequestHeader("X-Mashape-Key", "tLl48RdhVxmshod4XUrdqoE3VJR5p1znYAkjsnvJ3UHwelmDuc");
    request.setRequestHeader("Accept", "application/json");
    //header('X-Mashape-Key', 'tLl48RdhVxmshod4XUrdqoE3VJR5p1znYAkjsnvJ3UHwelmDuc')
  },
  success: function(data){
    console.log(data);
    $('#test').html(data[0]['name']);
    $("#test").append('<p>' + data[0]['country']['name'] + '</p>');
  }
})
