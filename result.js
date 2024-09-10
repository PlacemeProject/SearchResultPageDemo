

document.querySelectorAll('.apply-btn').forEach(button => {
    button.addEventListener('click', function() {
        alert('Application submitted!');
    });
});


function saveJob(element) {
    // Toggle the saved state
    element.classList.toggle('saved');

    // Here you can add your logic to actually save the job
    // (e.g., store in local storage, send a request to a server, etc.)
    if (element.classList.contains('saved')) {
        console.log('Job saved');
    } else {
        console.log('Job unsaved');
    }
}

// Function to filter jobs based on selected checkboxes
function filterJobs() {
    const jobCards = document.querySelectorAll('.job-card'); // Get all job cards
    const workModeFilters = getSelectedFilters('workMode');
    const experienceFilters = getSelectedFilters('experience');
    const salaryFilters = getSelectedFilters('salary');
    const departmentFilters = getSelectedFilters('department');
    const companyTypeFilters = getSelectedFilters('companyType');
    const roleCategoryFilters = getSelectedFilters('roleCategory');
    const locationFilters = getSelectedFilters('location');

    jobCards.forEach(card => {
        const workMode = card.querySelector('.job-details').textContent.toLowerCase();
        const location = card.querySelector('.job-details').textContent.toLowerCase();
        // You can check other details similarly

        let show = true;
        
        if (workModeFilters.length && !workModeFilters.some(filter => workMode.includes(filter))) {
            show = false;
        }
        if (locationFilters.length && !locationFilters.some(filter => location.includes(filter))) {
            show = false;
        }

        if (show) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Helper function to get selected checkboxes
function getSelectedFilters(filterName) {
    const checkboxes = document.querySelectorAll(`input[name="${filterName}"]:checked`);
    return Array.from(checkboxes).map(checkbox => checkbox.value.toLowerCase());
}

// Add event listener to the filter button
document.querySelector('button').addEventListener('click', filterJobs);
