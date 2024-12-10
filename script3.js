// Delete button functionality
document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', function () {
      const card = this.parentElement;
      card.remove();
      alert('Workout entry deleted!');
    });
  });
  