async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write code to loop through the rides
  
  let ride=json
  let outputElement = document.querySelector('.rides')

  for (let i = 0; i < ride.length; i++) {
    
    if (ride[i].length > 1) {
      levelOfService = 'Noober Pool'
    }
    
    else if (ride[i][0].purpleRequested == true) {
      levelOfService = 'Noober Purple' 
    }
    
    else if (ride[i][0].numberOfPassengers > 3) {
      levelOfService = 'Noober XL'
    }
    
    else {
      levelOfService = 'Noober X'
    }    
      
    outputElement.insertAdjacentHTML("beforeend",`
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    <i class="fas fa-car-side"></i>
    <span>${levelOfService}</span>
    </h1>`)
      
      for (let j = 0; j < ride[i].length; j++) {
      
        passengerName = ride[i][j].passengerDetails.first + ' ' + ride[i][j].passengerDetails.last
        passengerPhone = ride[i][j].passengerDetails.phoneNumber
        passengerNumberOfPassengers = ride[i][j].numberOfPassengers
        passengerPickupAddressLine1 = ride[i][j].pickupLocation.address
        passengerPickupAddressLine2 = ride[i][j].pickupLocation.city +',' + ' ' + ride[i][j].pickupLocation.state +' ' + ride[i][j].pickupLocation.zip 
        passengerDropoffAddressLine1 = ride[i][j].dropoffLocation.address
        passengerDropoffAddressLine2 = ride[i][j].dropoffLocation.city +',' + ' ' + ride[i][j].dropoffLocation.state +' ' + ride[i][j].dropoffLocation.zip
        
        if (levelOfService == 'Noober Purple'){
          outputElement.insertAdjacentHTML("beforeend",`
          <div class="border-4 border-purple-500 p-4 my-4 text-left">
            <div class="flex">
              <div class="w-1/2">
                <h2 class="text-2xl py-1">${passengerName}</h2>
                <p class="font-bold text-gray-600">${passengerPhone}</p>
              </div>
              <div class="w-1/2 text-right">
                <span class="rounded-xl bg-purple-600 text-white p-2">
                  ${passengerNumberOfPassengers}
                </span>
              </div>
            </div>
                
            <div class="mt-4 flex">
              <div class="w-1/2">
                <div class="text-sm font-bold text-gray-600">PICKUP</div>
                <p>${passengerPickupAddressLine1}</p>
                <p>${passengerPickupAddressLine2}</p>
              </div> 
              <div class="w-1/2">
                <div class="text-sm font-bold text-gray-600">DROPOFF</div>
                <p>${passengerDropoffAddressLine1}</p>
                <p>${passengerDropoffAddressLine2}</p>
              </div>
            </div>
          </div>`)
        }
          
        else {
          outputElement.insertAdjacentHTML("beforeend",`
          <div class="border-4 border-gray-900 p-4 my-4 text-left">
            <div class="flex">
              <div class="w-1/2">
                <h2 class="text-2xl py-1">${passengerName}</h2>
                <p class="font-bold text-gray-600">${passengerPhone}</p>
              </div>
              <div class="w-1/2 text-right">
                <span class="rounded-xl bg-gray-600 text-white p-2">
                  ${passengerNumberOfPassengers}
                </span>
              </div>
            </div>
            
            <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${passengerPickupAddressLine1}</p>
              <p>${passengerPickupAddressLine2}</p>
            </div>
            
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${passengerDropoffAddressLine1}</p>
              <p>${passengerDropoffAddressLine2}</p>
            </div>
          </div>
          </div>`)
        }
      } 
  }

}

window.addEventListener('DOMContentLoaded', pageLoaded)

