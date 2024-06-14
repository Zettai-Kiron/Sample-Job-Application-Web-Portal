document.getElementById('search-button').addEventListener('click', searchJobs);
document.getElementById('job-application-form').addEventListener('submit', submitApplication);

const jobListings = [
    { id: 1, title: 'Software Engineer', description: 'Job description for Software Engineer' },
    { id: 2, title: 'Project Manager', description: 'Job description for Project Manager' },
    { id: 3, title: 'Data Scientist', description: 'Job description for Data Scientist' },
];

function searchJobs() {
    const searchInput = document.getElementById('job-search-input').value.toLowerCase();
    const filteredJobs = jobListings.filter(job => job.title.toLowerCase().includes(searchInput));
    displayJobs(filteredJobs);
}

function displayJobs(jobs) {
    const container = document.getElementById('job-listings-container');
    container.innerHTML = '';

    if (jobs.length === 0) {
        container.innerHTML = '<p>No jobs found</p>';
        return;
    }

    jobs.forEach(job => {
        const jobElement = document.createElement('div');
        jobElement.className = 'job-listing';
        jobElement.innerHTML = `<h3>${job.title}</h3><p>${job.description}</p>`;
        container.appendChild(jobElement);
    });
}

function submitApplication(event) {
    event.preventDefault();

    const name = document.getElementById('applicant-name').value;
    const email = document.getElementById('applicant-email').value;
    const resume = document.getElementById('resume-upload').files[0];

    if (name && email && resume) {
        alert('Application submitted successfully!');
        document.getElementById('job-application-form').reset();
    } else {
        alert('Please fill out all fields and upload your resume.');
    }
}

// Initially display all jobs
displayJobs(jobListings);
