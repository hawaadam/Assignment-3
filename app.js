let carData = [
    {
        brand: "BMW",
        model: "BMW XM",
        price: "10000000",
        
    },
    {
        brand: "Audi",
        model: "Audi Q8",
        price: "4000000",
        
    },
    {
        brand: "Toyota",
        model: "Toyota Prius",
        price: "5000000",
        
    },
    {
        brand: "Honda",
        model: "City Hybrid",
        price: "5000",
        
    },

    ];

    function searchCars() {
      const criteria = document.getElementById('searchCriteria').value;
      const value = document.getElementById('searchValue').value.toLowerCase();

      const filteredcars = carData.filter(car => {
        const carValue = car[criteria].toLowerCase();
        return carValue.includes(value);
      });

      displayResults(filteredcars);
    }

    function displayResults(results) {
      const resultsContainer = document.getElementById('resultsContainer');
      resultsContainer.innerHTML = '';

      if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No Car Found.</p>';
        return;
      }

      const resultList = document.createElement('ul');
      results.map(car => {
        const listItem = document.createElement('li');
        listItem.textContent = `${car.brand} - ${car.model}`;
        resultList.appendChild(listItem);
      });

      resultsContainer.appendChild(resultList);
    }