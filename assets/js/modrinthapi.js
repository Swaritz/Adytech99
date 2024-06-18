// Define the base URL and path parameters
const baseUrl = 'https://api.modrinth.com';
const endpoint = '/project';
const itemId = "/nodurability"; // Example path parameter

const url = `${baseUrl}${endpoint}${itemId}`;

const health_indicator_downloads = 0;

 fetch(url, {
   method: 'GET', // Specify the request method
   headers: {
           'Content-Type': 'application/json', // Set the request headers if needed
           'User-Agent': 'AdyTech99.dev/1.0 (contact@adytech99.dev)', // Custom User-Agent header
           'Authorization': 'mrp_qKxtONxGosLtjLz2yjDVnSHO5RVkcURvGwFpXzIuatnY1YFpfw8zSkNVsXe6' //token
         }
 })
 .then(response => {
   if (!response.ok) {
     throw new Error(`HTTP error! Status: ${response.status}`);
   }
   return response.json(); // Parse the response as JSON
 })
 .then(data => {
   // Access the downloads property
   const numberOfDownloads = data.downloads;
   // Update the HTML element with the number of downloads
   document.getElementById('health_indicator_downloads').textContent = numberOfDownloads;
 })
 .catch(error => {
   console.error('Error:', error); // Handle any errors

   // Update the HTML element with an error message
   document.getElementById('health_indicator_downloads').textContent = error;
 });