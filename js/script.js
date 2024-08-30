// section mobile btn

let MenuBtnMobileE1=document.getElementById("menu-btn_mobile")
let MenuBtnMobileE1OpenBoolen = false
let mobileMenuNavE1=document.getElementById("mobile-menu-nav")

MenuBtnMobileE1.addEventListener("click",()=>{
    if(MenuBtnMobileE1OpenBoolen){
        //mobileMenuNavE1.style.display = "none"
        mobileMenuNavE1.classList.remove("mobile-menu-nav-hidden")
        MenuBtnMobileE1OpenBoolen= false
    }
    else{
        mobileMenuNavE1.classList.add("mobile-menu-nav-hidden")
        // mobileMenuNavE1.style.display = "block"
        MenuBtnMobileE1OpenBoolen = true
    }
})

// cross menu nav

let mobileNavcloseE1 = document.getElementById("mobile-Nav-close")
mobileNavcloseE1.addEventListener("click",()=>{
    // mobileMenuNavE1.style.display = "none"
    mobileMenuNavE1.classList.remove("mobile-menu-nav-hidden")
    MenuBtnMobileE1OpenBoolen= false
})












document.addEventListener('DOMContentLoaded', function() {
    const courses = [
        "Introduction to Python",
        "Advanced JavaScript",
        "Web Development with React",
        "Data Structures in C++",
        "Machine Learning Basics",
        "Digital Marketing 101",
        "Graphic Design Fundamentals",
        "Cybersecurity Essentials"
    ];

    const searchInput = document.getElementById('course-search');
    const courseList = document.getElementById('course-list');
    const courseSearchSection = document.getElementById('course-search-section');
    const getStartedBtn = document.getElementById('get-started-btn');

    // Show the course search section when 'Get Started' is clicked
    getStartedBtn.addEventListener('click', function(event) {
        event.preventDefault();
        courseSearchSection.style.display = 'block';
        window.scrollTo({
            top: courseSearchSection.offsetTop,
            behavior: 'smooth'
        });
    });

    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        courseList.innerHTML = '';

        if (query.length > 0) {
            const filteredCourses = courses.filter(course => course.toLowerCase().includes(query));

            filteredCourses.forEach(course => {
                const li = document.createElement('li');
                li.textContent = course;
                courseList.appendChild(li);
            });
        }
    });
});
