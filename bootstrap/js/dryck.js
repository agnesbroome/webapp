//https://karlroos-systemet.p.mashape.com/product?alcohol_from=0.4&alcohol_to=0.48&country=1&limit=1&offset=0&order_by=price

//$("#resultSB")

/*
$.ajax({
  url: 'https://karlroos-systemet.p.mashape.com/product?alcohol_from=0.4&alcohol_to=0.48&country=1&limit=30&offset=0&order_by=price',
  beforeSend: function(request){
    request.setRequestHeader("X-Mashape-Key", "tLl48RdhVxmshod4XUrdqoE3VJR5p1znYAkjsnvJ3UHwelmDuc");
    request.setRequestHeader("Accept", "application/json");
    //header('X-Mashape-Key', 'tLl48RdhVxmshod4XUrdqoE3VJR5p1znYAkjsnvJ3UHwelmDuc')
  },
  success: function(data){
    console.log(data);
  }
})*/

var countries = [
  {
    "eng": "France",
    "id": "1",
    "sv": "Frankrike"
  },
  {
    "eng": "Sweden",
    "id": "2",
    "sv": "Sverige"
  },
  {
    "eng": "Poland",
    "id": "3",
    "sv": "Polen"
  },
  {
    "eng": "United States of America",
    "id": "4",
    "sv": "USA"
  },
  {
    "eng": "United Kingdom",
    "id": "5",
    "sv": "Storbritannien"
  },
  {
    "eng": "Belgium",
    "id": "6",
    "sv": "Belgien"
  },
{
    "eng": "The Netherlands",
    "id": "7",
    "sv": "Nederländerna"
  },
  {
    "eng": "Trinidad",
    "id": "8",
    "sv": "Trinidad"
  },
  {
    "eng": "Switzerland",
    "id": "9",
    "sv": "Schweiz"
  },
  {
    "eng": "Italy",
    "id": "11",
    "sv": "Italien"
  },
  {
    "eng": "Mexico",
    "id": "12",
    "sv": "Mexiko"
  },
  {
    "eng": "Denmark",
    "id": "13",
    "sv": "Danmark"
  },
{
    "eng": "Chile",
    "id": "14",
    "sv": "Chile"
  },
  {
    "eng": "Spain",
    "id": "15",
    "sv": "Spanien"
  },
  {
    "eng": "Austria",
    "id": "16",
    "sv": "Österrike"
  },
  {
    "eng": "Barbados",
    "id": "17",
    "sv": "Barbados"
  },
  {
    "eng": "Norway",
    "id": "18",
    "sv": "Norge"
  },
  {
    "eng": "Japan",
    "id": "19",
    "sv": "Japan"
  },

 {
    "eng": "Ireland",
    "id": "21",
    "sv": "Irland"
  },
  {
    "eng": "Peru",
    "id": "22",
    "sv": "Peru"
  },
  {
    "eng": "Finland",
    "id": "23",
    "sv": "Finland"
  },
  {
    "eng": "Germany",
    "id": "24",
    "sv": "Tyskland"
  },
  {
    "eng": "Australia",
    "id": "25",
    "sv": "Australien"
  },
  {
    "eng": "Canada",
    "id": "26",
    "sv": "Kanada"
  },
  {
    "eng": "South Africa",
    "id": "27",
    "sv": "Sydafrika"
  },
{
    "eng": "Czech Republic",
    "id": "28",
    "sv": "Tjeckien"
  },
  {
    "eng": "New Zealand",
    "id": "29",
    "sv": "Nya Zeeland"
  },
  {
    "eng": "Hungary",
    "id": "30",
    "sv": "Ungern"
  },
  {
    "eng": "Israel",
    "id": "31",
    "sv": "Israel"
  },
  {
    "eng": "Portugal",
    "id": "32",
    "sv": "Portugal"
  },
  {
    "eng": "Colombia",
    "id": "33",
    "sv": "Colombia"
  },
  {
    "eng": "Greece",
    "id": "34",
    "sv": "Grekland"
  },
  {
    "eng": "Thailand",
    "id": "35",
    "sv": "Thailand"
  },
  {
    "eng": "Croatia",
    "id": "36",
    "sv": "Kroatien"
  },
  {
    "eng": "Turkey",
    "id": "37",
    "sv": "Turkiet"
  },
  {
    "eng": "Jamaica",
    "id": "38",
    "sv": "Jamaica"
  },
  {
    "eng": "Russia",
    "id": "39",
    "sv": "Ryssland"
  },
  {
    "eng": "Argentina",
    "id": "40",
    "sv": "Argentina"
  },
{
    "eng": "Slovakia",
    "id": "41",
    "sv": "Slovakien"
  },
  {
    "eng": "Cyprus",
    "id": "42",
    "sv": "Cypern"
  },
  {
    "eng": "Bulgaria",
    "id": "44",
    "sv": "Bulgarien"
  },
  {
    "eng": "Romania",
    "id": "45",
    "sv": "Rumänien"
  },
  {
    "eng": "Cuba",
    "id": "46",
    "sv": "Kuba"
  },
  {
    "eng": "Haiti",
    "id": "47",
    "sv": "Haiti"
  },
{
    "eng": "Venezuela",
    "id": "48",
    "sv": "Venezuela"
  },
  {
    "eng": "Dominican Republic",
    "id": "49",
    "sv": "Dominikanska Republiken"
  },
  {
    "eng": "India",
    "id": "50",
    "sv": "Indien"
  },
  {
    "eng": "Guatemala",
    "id": "51",
    "sv": "Guatemala"
  },
  {
    "eng": "Indonesia",
    "id": "52",
    "sv": "Indonesien"
  },
  {
    "eng": "Panama",
    "id": "53",
    "sv": "Panama"
  },
  {
    "eng": "Paraguay",
    "id": "54",
    "sv": "Paraguay"
  },
{
    "eng": "Guyana",
    "id": "55",
    "sv": "Guyana"
  },
  {
    "eng": "Serbia",
    "id": "57",
    "sv": "Serbien"
  },
  {
    "eng": "Brazil",
    "id": "58",
    "sv": "Brasilien"
  },
  {
    "eng": "Georgia",
    "id": "59",
    "sv": "Georgien"
  },
  {
    "eng": "Lebanon",
    "id": "60",
    "sv": "Libanon"
  },
  {
    "eng": "Bahamas",
    "id": "61",
    "sv": "Bahamas"
  },
{
    "eng": "Slovenia",
    "id": "62",
    "sv": "Slovenien"
  },
  {
    "eng": "Namibia",
    "id": "64",
    "sv": "Namibia"
  },
  {
    "eng": "Macedonia (F.Y.R.O.M)",
    "id": "65",
    "sv": "Makedonien (F.Y.R.O.M)"
  },
  {
    "eng": "Tunisia",
    "id": "66",
    "sv": "Tunisien"
  },
  {
    "eng": "Uruguay",
    "id": "67",
    "sv": "Uruguay"
  },
  {
    "eng": "Montenegro",
    "id": "68",
    "sv": "Montenegro"
  },
  {
    "eng": "South Korea",
    "id": "69",
    "sv": "Sydkorea"
  },
  {
    "eng": "Bosnia Herzegovina",
    "id": "70",
    "sv": "Bosnien-Hercegovina"
  },
  {
    "eng": "Luxemburg",
    "id": "71",
    "sv": "Luxemburg"
  },
  {
    "eng": "Malta",
    "id": "72",
    "sv": "Malta"
  },
  {
    "eng": "Armenia",
    "id": "73",
    "sv": "Armenien"
  },
{
    "eng": "Moldavia",
    "id": "74",
    "sv": "Moldavien"
  },
  {
    "eng": "Latvia",
    "id": "75",
    "sv": "Lettland"
  },
  {
    "eng": "Ukraine",
    "id": "77",
    "sv": "Ukraina"
  },
  {
    "eng": "Iceland",
    "id": "78",
    "sv": "Island"
  },
  {
    "eng": "Grenada",
    "id": "79",
    "sv": "Grenada"
  },
  {
    "eng": "Philippines",
    "id": "80",
    "sv": "Filippinerna"
  },
  {
    "eng": "Surinam",
    "id": "81",
    "sv": "Surinam"
  },
  {
    "eng": "Lithuania",
    "id": "82",
    "sv": "Litauen"
  },
  {
    "eng": "Fiji",
    "id": "83",
    "sv": "Fiji"
  },
  {
    "eng": "Nicaragua",
    "id": "84",
    "sv": "Nicaragua"
  },
  {
    "eng": "Estonia",
    "id": "85",
    "sv": "Estland"
  },
  {
    "eng": "Mauritius",
    "id": "86",
    "sv": "Mauritius"
  },
  {
    "eng": "Costa Rica",
    "id": "87",
    "sv": "Costa Rica"
  },
  {
    "eng": "Kosovo",
    "id": "88",
    "sv": "Kosovo"
  },
  {
    "eng": "Singapore",
    "id": "89",
    "sv": "Singapore"
  },
  {
    "eng": "Marocco",
    "id": "90",
    "sv": "Marocko"
  },
  {
    "eng": "Kenya",
    "id": "91",
    "sv": "Kenya"
  },
  {
    "eng": "Uganda",
    "id": "92",
    "sv": "Uganda"
  },
  {
    "eng": "Vietnam",
    "id": "93",
    "sv": "Vietnam"
  },
{
    "id": "94",
    "name": "Nigeria"
  },
  {
    "eng": "China",
    "id": "95",
    "sv": "Folkrepubliken Kina"
  },
  {
    "eng": "Ethiopia",
    "id": "96",
    "sv": "Etiopien"
  },
  {
    "eng": "Sri Lanka",
    "id": "97",
    "sv": "Sri Lanka"
  },
  {
    "eng": "Togolese Republic",
    "id": "98",
    "sv": "Republiken Togo"
  },
  {
    "eng": "Tanzania",
    "id": "99",
    "sv": "Tanzania"
  }
]

function randomInt(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function getRandomProduct(country){

  $.ajax({
    url: 'https://karlroos-systemet.p.mashape.com/product?alcohol_from=0&alcohol_to=1&country=' + country + '&limit=100&offset=0&order_by=price',
    global: false,
    beforeSend: function(request){
      request.setRequestHeader("X-Mashape-Key", "tLl48RdhVxmshod4XUrdqoE3VJR5p1znYAkjsnvJ3UHwelmDuc");
      request.setRequestHeader("Accept", "application/json");
      //header('X-Mashape-Key', 'tLl48RdhVxmshod4XUrdqoE3VJR5p1znYAkjsnvJ3UHwelmDuc')
    },
    success: function(data){
      var random = randomInt(0, data.length);
      console.log(data[random]);
        $("#drinkHeading").css("display", "block");
        $("#drinkName").html(data[random]['name'] + ' <small> ' + data[random]['name_2'] + '</small>');
      var countryEng;
      for (x in countries){
        if (countries[x]['sv'] == data[random]['country']['name']){
          countryEng = countries[x]['eng'];
          break;
        }
      }
      if(data[random]['tags'].length != 0){
        $("#drinkCountry").html(data[random]['tags'][0]['name'] + ' <small>from</small> ' + countryEng);
      }
      else{
        $("#drinkCountry").html(countryEng);
      }
      $("#drinkPrice").html(data[random]['price'].toFixed(2) + 'kr');
      $("#systemetLinkUL").css('display', 'block');
      $("#bolagetLink").attr('href', 'https://www.systembolaget.se/' + data[random]['product_number']);
      
    }
  });
}

function convertEngToID(eng){
  for (x in countries){
    if(eng == countries[x]['eng']){
      return countries[x]['id'];
    }
  }
}

/*
for (x in countries){
  if(randomNum == countries[x]['eng']){
    chosenC = countries[x]['id'];
  }
}*/
//getRandomProduct(chosenC);
