
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navLinks.classList.remove('active');
    });
});


window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});


function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
    });
}

// Initialize skill bars
window.addEventListener('load', animateSkills);

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Sample skills data
const skills = [
    { name: 'HTML5', icon: 'fab fa-html5', level: '90%' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', level: '85%' },
    { name: 'JavaScript', icon: 'fab fa-js', level: '70%' },
    { name: 'Git', icon: 'fab fa-git-alt', level: '70%' },
   
  ];
  
// Sample projects data
const projects = [
    {
        title: 'E-Library',
        description: 'The library website offers a searchable catalog for books and resources, along with a digital stopwatch and a user dashboard for managing borrowing history.',
        image: 'https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        demo: '#',
        code: 'https://github.com/Abdulwnasir/Library'
    },
    {
        title: 'My Personal Portifolio',
        description: 'The personal portfolio showcases an individuals projects and skills, providing a platform for self-presentation. It features sections for work samples, a resume, and contact information, enabling easy networking and professional growth.',
        image: 'https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        demo: '#',
        code: 'https://github.com/Abdulwnasir/My-Personal-Portfolio'
    },    
    {
        title: 'Text Editor',
        description: 'The digital text editor allows users to write and format text easily while accessing library resources. It features a simple interface with Start, Stop, and Reset functions for managing writing sessions effectively.',
        image: 'https://images.unsplash.com/photo-1661246627088-d6a600aa9261?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        demo: '#',
        code: 'https://github.com/Abdulwnasir/TEXTEDITOR'
    },
    
    {
        title: 'Task List Manager App',
        description: 'The task list manager helps users organize and prioritize their tasks efficiently. It features options for adding, editing, and deleting tasks, along with reminders to enhance productivity and keep projects on track.',
        image: 'https://media.istockphoto.com/id/1371325578/photo/kanban-project-management-software-on-laptop.jpg?s=1024x1024&w=is&k=20&c=7o56mzokIsRNjbPsC0HV1T9Zo3YmfEdGa-JmGPR4usE=',
        demo: '#',
        code: ''
    },
 
 
];


// Populate skills section
function populateSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    skillsGrid.innerHTML = '';
    
    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.innerHTML = `
            <div class="skill-icon">
                <i class="${skill.icon}"></i>
            </div>
            <h3>${skill.name}</h3>
            <div class="skill-bar">
                <div class="skill-progress" data-width="${skill.level}"></div>
            </div>
        `;
        skillsGrid.appendChild(skillItem);
    });
    
    // Re-initialize skill bar animation
    setTimeout(animateSkills, 300);
}

// Populate projects section
function populateProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = '';
    
    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        projectItem.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-links">
                    <a href="${project.demo}"><i class="fab fa-linkedin"></i> Live Demo</a>
                     <a href="${project.code}"><i class="fa-brands fa-github"></i> View Code</a>
                    <a href="${project.code}"><i class="fab fa-instagram"></i> View Code</a>
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectItem);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    populateSkills();
    populateProjects();
    
    // Particles.js configuration
    particlesJS('particles-container', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#4cc9f0" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#4cc9f0", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" }
            }
        }
    });
});