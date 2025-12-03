// Methods that modify the original Array

// push()

const countries = ['USA', 'Canada', 'UK', 'COL', 'EC']
const newCountries = countries.push('Germany', 'Japon')

console.log(`Original: ${countries}`);
console.log(`New countries: ${newCountries}`); // return the new length of array

// pop()

const removeCountry = countries.pop()
console.log(`Removed countries: ${removeCountry}`);
console.log(`Original ${countries}`)