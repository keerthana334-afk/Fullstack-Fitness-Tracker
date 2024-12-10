document.getElementById('search-button').addEventListener('click', function () {
    const searchQuery = document.getElementById('search').value.trim();
    if (searchQuery) {
      alert(`Searching for exercises related to: ${searchQuery}`);
    } else {
      alert('Please enter a muscle group or keyword!');
    }
  });
  