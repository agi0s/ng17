'use strict';

describe('dataService', function() {
  var carsData = [{
        "name": "AC Cobra",
        "country": "United States",
        "top_speed": "160",
        "zero_to_sixty": "4.2",
        "power": "485",
        "engine": "6997",
        "weight": "1148",
        "description": "The AC Cobra, sold as the Ford/Shelby AC Cobra in the USA and often known colloquially as the Shelby Cobra in that country, is an American-engined British sports car produced intermittently since 1962.",
        "image": "assets/img/005.png",
        "id": 0
      }, {
        "name": "Aston Martin DB9",
        "country": "United Kingdom",
        "top_speed": "186",
        "zero_to_sixty": "4.9",
        "power": "450",
        "engine": "5935",
        "weight": "1750",
        "description": "The Aston Martin DB9 is a GT sports car launched by Aston Martin in 2004. The DB9 is the first model to be built at Aston Martin\"s Gaydon facility in Warwickshire, England. The moniker \"DB\" stems from the initials of David Brown, the owner of Aston Martin for a significant part of its history. The DB9, which was designed by Ian Callum and finished by his successor, Henrik Fisker.",
        "image": "assets/img/010.png",
        "id": 1
      }, {
        "name": "Bentley Continental GT",
        "country": "United Kingdom",
        "top_speed": "196",
        "zero_to_sixty": "4.8",
        "power": "552",
        "engine": "5998",
        "weight": "2385",
        "description": "The Bentley Continental GT is a two-door 'two plus two' grand touring coupé released in 2003, replacing the previous Rolls-Royce-based Continental R and T.",
        "image": "assets/img/015.png",
        "id": 2
      }, {
        "name": "BMW M3 CSL",
        "country": "Germany",
        "top_speed": "155",
        "zero_to_sixty": "4.6",
        "power": "360",
        "engine": "3246",
        "weight": "1460",
        "description": "The BMW M3 is a high-performance version of the BMW 3-Series, developed by BMW's in-house motorsport division, BMW M. M3 models have been derived from the E30, E36, E46 and E90/E92/E93 3-series, and sold with coupé, saloon and convertible body styles. Upgrades over the \"standard\" 3-Series automobiles include more powerful and responsive engines, improved handling/suspension/braking systems, aerodynamic body enhancements, and interior/exterior accents with the tri-colour \"M\" (Motorsport) emblem.",
        "image": "assets/img/020.png",
        "id": 3
      }, {
        "name": "Bugatti Veyron",
        "country": "Italy",
        "top_speed": "252",
        "zero_to_sixty": "2.8",
        "power": "987",
        "engine": "7993",
        "weight": "1600",
        "description": "The Bugatti Veyron EB 16.4 is a mid-engined grand touring car, designed and developed by the Volkswagen Group and manufactured in Molsheim, France by Bugatti Automobiles S.A.S.",
        "image": "assets/img/025.png",
        "id": 4
      }, {
        "name": "Caterham 7",
        "country": "United Kingdom",
        "top_speed": "150",
        "zero_to_sixty": "2.88",
        "power": "230",
        "engine": "1796",
        "weight": "440",
        "description": "The Superlight R500 series is the latest of Caterham Motorsport's Superlight series of RSA Racing cars.",
        "image": "assets/img/030.png",
        "id": 5
      }, {
        "name": "Chevrolet Corvette Z06",
        "country": "United States",
        "top_speed": "172",
        "zero_to_sixty": "4.3",
        "power": "405",
        "engine": "5665",
        "weight": "1413",
        "description": "The Z06 arrived as a 2006 model in the third quarter of 2005. It is also the lightest of all Corvette models (though not as fast as a Corvette ZR1). It had a new 7.0 L (430 cu in) version of the Small-Block engine codenamed LS7, which produced 505 hp (376 kW). In addition to the larger engine, the Corvette Z06 has a dry sump oiling system, and connecting rods made out of titanium alloy.",
        "image": "assets/img/035.png",
        "id": 6
      }, {
        "name": "Dodge Viper SRT-10",
        "country": "United States",
        "top_speed": "189",
        "zero_to_sixty": "4.0",
        "power": "500",
        "engine": "8285",
        "weight": "1542",
        "description": "",
        "image": "assets/img/040.png",
        "id": 7
      }, {
        "name": "Ferrari 360 Stradale",
        "country": "Italy",
        "top_speed": "188",
        "zero_to_sixty": "4.0",
        "power": "425",
        "engine": "3586",
        "weight": "1280",
        "description": "The Challenge Stradale is a limited production track day focused car based on the 360 Modena. It was inspired by the 360 Modena Challenge racing car so the focus was primarily on improving its track lapping performance by concentrating on handling, braking and weight reduction characteristics, which are essential in pure racing cars. Ferrari engineers designed the car from the outset with a goal of 20% track day use in mind and 80% road use.",
        "image": "assets/img/045.png",
        "id": 8
      }, {
        "name": "Ferrari F40",
        "country": "Italy",
        "top_speed": "201",
        "zero_to_sixty": "3.9",
        "power": "478",
        "engine": "2936",
        "weight": "1100",
        "description": "",
        "image": "assets/img/055.png",
        "id": 9
      }, {
        "name": "Ford GT",
        "country": "United States",
        "top_speed": "200",
        "zero_to_sixty": "3.8",
        "power": "500",
        "engine": "5409",
        "weight": "1519",
        "description": "",
        "image": "assets/img/060.png",
        "id": 10
      }, {
        "name": "Honda NSX Type R",
        "country": "Japan",
        "top_speed": "168",
        "zero_to_sixty": "4.6",
        "power": "276",
        "engine": "3179",
        "weight": "1270",
        "description": "",
        "image": "assets/img/065.png",
        "id": 11
      }, {
        "name": "Jaguar XJ220",
        "country": "United Kingdom",
        "top_speed": "217",
        "zero_to_sixty": "3.6",
        "power": "542",
        "engine": "3500",
        "weight": "1456",
        "description": "",
        "image": "assets/img/070.png",
        "id": 12
      }, {
        "name": "Koenigsegg CC8S",
        "country": "Sweden",
        "top_speed": "235",
        "zero_to_sixty": "4.2",
        "power": "655",
        "engine": "4700",
        "weight": "1275",
        "description": "",
        "image": "assets/img/075.png",
        "id": 13
      }, {
        "name": "Lamborghini Countach",
        "country": "Italy",
        "top_speed": "185",
        "zero_to_sixty": "4.8",
        "power": "455",
        "engine": "5167",
        "weight": "1447",
        "description": "",
        "image": "assets/img/080.png",
        "id": 14
      }, {
        "name": "Lamborghini Gallardo",
        "country": "Italy",
        "top_speed": "192",
        "zero_to_sixty": "4.1",
        "power": "493",
        "engine": "4961",
        "weight": "1520",
        "description": "",
        "image": "assets/img/085.png",
        "id": 15
      }, {
        "name": "Lotus Exige S",
        "country": "United Kingdom",
        "top_speed": "148",
        "zero_to_sixty": "4.1",
        "power": "220",
        "engine": "1796",
        "weight": "933",
        "description": "",
        "image": "assets/img/090.png",
        "id": 16
      }, {
        "name": "Maserati MC12",
        "country": "Italy",
        "top_speed": "205",
        "zero_to_sixty": "3.7",
        "power": "622",
        "engine": "5998",
        "weight": "1335",
        "description": "",
        "image": "assets/img/095.png",
        "id": 17
      }, {
        "name": "McLaren F1",
        "country": "United Kingdom",
        "top_speed": "240",
        "zero_to_sixty": "3.2",
        "power": "627",
        "engine": "6064",
        "weight": "1137",
        "description": "",
        "image": "assets/img/100.png",
        "id": 18
      }, {
        "name": "Mercedes SL55 AMG",
        "country": "Germany",
        "top_speed": "155",
        "zero_to_sixty": "4.6",
        "power": "493",
        "engine": "5439",
        "weight": "1880",
        "description": "",
        "image": "assets/img/105.png",
        "id": 19
      }, {
        "name": "Mercedes SLR McLaren",
        "country": "Germany",
        "top_speed": "207",
        "zero_to_sixty": "3.7",
        "power": "617",
        "engine": "5439",
        "weight": "1693",
        "description": "",
        "image": "assets/img/110.png",
        "id": 20
      }, {
        "name": "Mitsubishi Evo VIII",
        "country": "Japan",
        "top_speed": "148",
        "zero_to_sixty": "4.9",
        "power": "276",
        "engine": "1997",
        "weight": "1410",
        "description": "",
        "image": "assets/img/115.png",
        "id": 21
      }, {
        "name": "Noble M12 GTO3R",
        "country": "United Kingdom",
        "top_speed": "170",
        "zero_to_sixty": "3.9",
        "power": "352",
        "engine": "2968",
        "weight": "1080",
        "description": "",
        "image": "assets/img/120.png",
        "id": 22
      }, {
        "name": "Pagani Zonda C12S",
        "country": "Italy",
        "top_speed": "215",
        "zero_to_sixty": "3.8",
        "power": "542",
        "engine": "7010",
        "weight": "1250",
        "description": "",
        "image": "assets/img/125.png",
        "id": 23
      }, {
        "name": "Porsche 959",
        "country": "Germany",
        "top_speed": "197",
        "zero_to_sixty": "3.9",
        "power": "450",
        "engine": "2851",
        "weight": "1450",
        "description": "",
        "image": "assets/img/130.png",
        "id": 24
      }, {
        "name": "Porsche GT3 RS",
        "country": "Germany",
        "top_speed": "190",
        "zero_to_sixty": "4.3",
        "power": "381",
        "engine": "3600",
        "weight": "1350",
        "description": "",
        "image": "assets/img/135.png",
        "id": 25
      }, {
        "name": "Porsche Carrera GT",
        "country": "Germany",
        "top_speed": "205",
        "zero_to_sixty": "3.7",
        "power": "604",
        "engine": "5733",
        "weight": "1380",
        "description": "",
        "image": "assets/img/140.png",
        "id": 26
      }, {
        "name": "Radical SR3 Turbo",
        "country": "United Kingdom",
        "top_speed": "160",
        "zero_to_sixty": "3.2",
        "power": "320",
        "engine": "1500",
        "weight": "525",
        "description": "",
        "image": "assets/img/145.png",
        "id": 27
      }, {
        "name": "Saleen S7",
        "country": "United States",
        "top_speed": "239",
        "zero_to_sixty": "3.3",
        "power": "550",
        "engine": "7008",
        "weight": "1247",
        "description": "",
        "image": "assets/img/150.png",
        "id": 28
      }, {
        "name": "Tesla Roadster",
        "country": "United States",
        "top_speed": "125",
        "zero_to_sixty": "3.9",
        "power": "248",
        "engine": "53kWh battery",
        "weight": "1235",
        "description": "",
        "image": "assets/img/155.png",
        "id": 29
      }, {
        "name": "TVR Tuscan S",
        "country": "United Kingdom",
        "top_speed": "185",
        "zero_to_sixty": "3.8",
        "power": "400",
        "engine": "3996",
        "weight": "1100",
        "description": "",
        "image": "assets/img/160.png",
        "id": 30
      }];

    var service;

  
  beforeEach(module('app.core'));

  beforeEach(inject(function(dataService) {
    service = dataService;
  }));


  it('should fetch the cars data from `/data.json`', function(service) {
    let _cars; 

    console.log(service);
    service.getCars()
        .then(cars => _cars = cars);
    
    expect(_cars).toEqual([]);
    
  });

});