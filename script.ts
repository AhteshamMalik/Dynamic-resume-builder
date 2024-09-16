// This code assumes you have TypeScript set up to transpile to JavaScript

// Interface for the form data
interface ResumeData {
    name: string;
    email: string;
    phone: string;
    education: string;
    experience: string;
    skills: string;
}

// Function to generate the resume
function generateResume(data: ResumeData): string {
    return `
        <h2>${data.name}</h2>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <h3>Education</h3>
        <p>${data.education}</p>
        <h3>Work Experience</h3>
        <p>${data.experience}</p>
        <h3>Skills</h3>
        <p>${data.skills}</p>
    `;
}

// Handling form submission
document.getElementById('resumeForm')?.addEventListener('submit', (event) => {
    event.preventDefault();

    // Capture form data
    const formData = new FormData(event.target as HTMLFormElement);
    const data: ResumeData = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        education: formData.get('education') as string,
        experience: formData.get('experience') as string,
        skills: formData.get('skills') as string,
    };

    // Generate the resume
    const resumeOutput = document.getElementById('resumeOutput');
    if (resumeOutput) {
        resumeOutput.innerHTML = generateResume(data);
    }
});
