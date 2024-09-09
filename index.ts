document.getElementById('resume-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
  
    const resumeOutput = `
      <h2>${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <h3>Education</h3>
      <p>${education}</p>
      <h3>Work Experience</h3>
      <p>${workExperience}</p>
      <h3>Skills</h3>
      <p>${skills}</p>
    `;
  
    const resumeContainer = document.getElementById('resume-output');
    if (resumeContainer) {
      resumeContainer.innerHTML = resumeOutput;
    }
  });
  