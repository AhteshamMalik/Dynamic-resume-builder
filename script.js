// This code assumes you have TypeScript set up to transpile to JavaScript
var _a;
// Function to generate the resume
function generateResume(data) {
    return "\n        <h2>".concat(data.name, "</h2>\n        <p><strong>Email:</strong> ").concat(data.email, "</p>\n        <p><strong>Phone:</strong> ").concat(data.phone, "</p>\n        <h3>Education</h3>\n        <p>").concat(data.education, "</p>\n        <h3>Work Experience</h3>\n        <p>").concat(data.experience, "</p>\n        <h3>Skills</h3>\n        <p>").concat(data.skills, "</p>\n    ");
}
// Handling form submission
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Capture form data
    var formData = new FormData(event.target);
    var data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        education: formData.get('education'),
        experience: formData.get('experience'),
        skills: formData.get('skills'),
    };
    // Generate the resume
    var resumeOutput = document.getElementById('resumeOutput');
    if (resumeOutput) {
        resumeOutput.innerHTML = generateResume(data);
    }
});
