document.getElementById('strength-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const activity = document.getElementById('activity').value;
    const reps = document.getElementById('reps').value;
    const sets = document.getElementById('sets').value;
    const weight = document.getElementById('weight').value || 'Not specified';
    const date = document.getElementById('date').value;
  
    console.log(`Activity: ${activity}`);
    console.log(`Reps: ${reps}`);
    console.log(`Sets: ${sets}`);
    console.log(`Weight: ${weight}`);
    console.log(`Date: ${date}`);
  
    alert('Form submitted successfully!');
  });
 
  