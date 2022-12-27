const passengers = [
    {
      id: 1,
      passengerName: "Freddie Mercury",
      isVegetarianOrVegan: false,
      connectedFlights: 2,
    },
    {
      id: 2,
      passengerName: "Amy Winehouse",
      isVegetarianOrVegan: true,
      connectedFlights: 4,
    },
      {
      id: 3,
      passengerName: "Kurt Cobain",
      isVegetarianOrVegan: true,
      connectedFlights: 3,
    },
       {
      id: 3,
      passengerName: "Mic   hael Jackson",
      isVegetarianOrVegan: true,
      connectedFlights: 1,
    },
  ];
  console.log(passengers);
  let a=[];
  for(i=0;i<passengers.length;i++){
    a[i]=passengers[i].passengerName;
  }
  console.log(a);

  let b=[];
  let c=0;

  for(j=0;j<passengers.length;j++){
    if(passengers[j].isVegetarianOrVegan==true){
        b[c]=passengers[j].passengerName;
        c++;
    }
  }
  console.log(b);
