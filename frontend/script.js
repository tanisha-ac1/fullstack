const API_BASE_URL = "https://fullstack-2-i0fo.onrender.com";


// CONTACT FORM SUBMISSION
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message })
    });

    if (!response.ok) throw new Error("Server error");

    await response.json();

    status.innerText = "Message sent successfully";
    status.style.color = "lightgreen";
    form.reset();

  } catch (err) {
    status.innerText = "Error sending message";
    status.style.color = "red";
  }
});

// FETCH CONTACT MESSAGES
const messagesContainer = document.getElementById("messages");

if (messagesContainer) {
  fetch(`${API_BASE_URL}/api/messages`)
    .then(res => res.json())
    .then(data => {
      data.forEach(msg => {
        const div = document.createElement("div");
        div.innerHTML = `
          <p><strong>Name:</strong> ${msg.name}</p>
          <p><strong>Email:</strong> ${msg.email}</p>
          <p><strong>Message:</strong> ${msg.message}</p>
          <hr>
        `;
        messagesContainer.appendChild(div);
      });
    })
    .catch(() => {
      messagesContainer.innerHTML = "<p>Unable to load messages</p>";
    });
}



// gsap.from(".hero-img", {
  
//   x:1000,
//   delay:1,
//   duration: 2,
  
// });

  gsap.from(".hero-img", {
        x: -1000,
        opacity: 0,
        duration: 2,
        delay: 0.4,
        ease: "power3.out"
    });

    gsap.from(".hero-title", {
        x: 40,
        
        opacity: 0,
        duration: 2,
        delay: 2.0,
        ease: "power3.out"
    });

    gsap.from(".hero-subtitle", {
        x: 1000,
        
        duration: 1,
        delay: 0.7,
        ease: "power3.out"
    });

gsap.registerPlugin(ScrollTrigger);

// HERO SECTION 
gsap.timeline()
  .from(".hero-img", {
    scale: 0.5,
    opacity: 6,
    duration: 1,
    ease: "power3.out"
  })
  .from(".hero-title", {
    y: 60,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  }, "-=0.4")
  .from(".hero-subtitle", {
    y: -40,
    opacity: 0,
    duration: 0.4,
    ease: "power3.out"
  }, "-=0.4");

//NAVBAR
gsap.from("nav a", {
  y: -30,
  opacity: 0,
  duration: 0.6,
  stagger: 0.1,
  ease: "power2.out"
});

//ABOUT section 
gsap.from("#about .section-card", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 80%",
    once: true
  },
  opacity: 0,
  y: 50,
  scale: 0.9,
  duration: 0.8,
  ease: "power3.out"
});

//  EDUCATION SECTION 
gsap.from("#education .section-card", {
  scrollTrigger: {
    trigger: "#education",
    start: "top 80%",
    once: true
  },
  opacity: 0,
  y: 50,
  scale:0.9,
  duration: 0.8,
  ease: "power3.out"
});

//  SKILLS SECTION 
gsap.from(".skill-card", {
  scrollTrigger: {
    trigger: "#skills",
    start: "top 70%",
    once: true
  },
  opacity: 0,
  y: 50,
  scale: 0.9,
  rotate:360,
  duration: 0.8,
   stagger: 0.2,
  ease: "power3.out"
});

//  PROJECTS SECTION 
gsap.from("#projects .project", {
  scrollTrigger: {
    trigger: "#projects",
    start: "top 75%",
    once: true
  },
 opacity: 0,
  x: -1000,
  scale: 0.9,
  delay:0.5,
  duration: 0.8,
  ease: "power3.out"
});

//  CONTACT SECTION 
gsap.from("#contact .section-card", {
  scrollTrigger: {
    trigger: "#contact",
    start: "top 80%",
    once: true
  },
  opacity: 1,
  y: 100,
  duration: 0.9,
  ease: "power3.out"
});





