const teamMembers = [
  {
    name: "Sumit Pal",
    role: "Co-Founder & Head of Project Management",
    description:
      "Oversees project planning, execution, and client coordination to ensure timely delivery.",
    imageUrl: "img/team/sumitsir.jpeg",
    socialLinks: {
      facebook: "https://www.facebook.com/tssgtech/",
      instagram: "https://www.instagram.com/tssgtech/",
      linkedin: "https://www.linkedin.com/company/tssg-tech/",
    },
  },
  {
    name: "Rakesh Chauhan",
    role: "Account Manager",
    description:
      "Manages financial records, billing, and ensures compliance with accounting standards.",
    imageUrl: "img/team/chauhansir.jpeg",
    socialLinks: {
      facebook: "https://www.facebook.com/tssgtech/",
      instagram: "https://www.instagram.com/tssgtech/",
      linkedin: "https://www.linkedin.com/company/tssg-tech/",
    },
  },
  {
    name: "Anjum Pervez Khan",
    role: "HR Manager",
    description:
      "A results-driven HR Manager with a focus on talent development, employee engagement, and organizational growth.",
    imageUrl: "img/team/khansir.jpeg",
    socialLinks: {
      facebook: "https://www.facebook.com/tssgtech/",
      instagram: "https://www.instagram.com/tssgtech/",
      linkedin: "https://www.linkedin.com/company/tssg-tech/",
    },
  },
  {
    name: "Amarjeet Gupta",
    role: "Fullstack Developer",
    description:
      "Builds and maintains both front-end and back-end systems with clean, scalable code.",
    imageUrl: "img/team/amarjeet.jpeg",
    socialLinks: {
      facebook: "https://www.facebook.com/tssgtech/",
      instagram: "https://www.instagram.com/tssgtech/",
      linkedin: "https://www.linkedin.com/company/tssg-tech/",
    },
  },
  {
    name: "Vipin Tiwari",
    role: "Backend Developer",
    description:
      "Specializes in server-side logic, database management, and API development.",
    imageUrl: "img/team/vipin.jpeg",
    socialLinks: {
      facebook: "https://www.facebook.com/tssgtech/",
      instagram: "https://www.instagram.com/tssgtech/",
      linkedin: "https://www.linkedin.com/company/tssg-tech/",
    },
  },
  {
    name: "Rahul Gupta",
    role: "Backend Developer",
    description:
      "Specializes in server-side logic, database management, and API development.",
    imageUrl: "img/team/rahul.jpeg",
    socialLinks: {
      facebook: "https://www.facebook.com/tssgtech/",
      instagram: "https://www.instagram.com/tssgtech/",
      linkedin: "https://www.linkedin.com/company/tssg-tech/",
    },
  },
  {
    name: "Abhishek Kumar",
    role: "Digital Marketing Manager",
    description:
      "Plays a vital role in creating and executing effective digital marketing strategies.",
    imageUrl: "img/team/abhishek.jpeg",
    socialLinks: {
      facebook: "https://www.facebook.com/tssgtech/",
      instagram: "https://www.instagram.com/tssgtech/",
      linkedin: "https://www.linkedin.com/company/tssg-tech/",
    },
  },
  {
    name: "Renu",
    role: "Graphic Designer",
    description:
      "Designs compelling visuals, branding assets, and enhances overall user experience.",
    imageUrl: "img/team/renu.jpg",
    socialLinks: {
      facebook: "https://www.facebook.com/tssgtech/",
      instagram: "https://www.instagram.com/tssgtech/",
      linkedin: "https://www.linkedin.com/company/tssg-tech/",
    },
  },
  {
    name: "Saloni Bansal",
    role: "Frontend Developer",
    description:
      "Specializes in creating visually appealing and user-friendly interfaces using HTML, CSS, and JavaScript.",
    imageUrl: "img/team/saloni.jpeg",
    socialLinks: {
      facebook: "https://www.facebook.com/tssgtech/",
      instagram: "https://www.instagram.com/tssgtech/",
      linkedin: "https://www.linkedin.com/company/tssg-tech/",
    },
  },
  {
    name: "Aarzoo Tanwar",
    role: "Frontend Developer",
    description:
      "Specializes in creating visually appealing and user-friendly interfaces using HTML, CSS, and JavaScript.",
    imageUrl: "img/team/aarzoo.jpeg",
    socialLinks: {
      facebook: "https://www.facebook.com/tssgtech/",
      instagram: "https://www.instagram.com/tssgtech/",
      linkedin: "https://www.linkedin.com/company/tssg-tech/",
    },
  },
  {
    name: "Mansi Ramela",
    role: "Frontend Developer",
    description:
      "Specializes in creating visually appealing and user-friendly interfaces using HTML, CSS, and JavaScript.",
    imageUrl: "img/team/mansi.jpg",
    socialLinks: {
      facebook: "https://www.facebook.com/tssgtech/",
      instagram: "https://www.instagram.com/tssgtech/",
      linkedin: "https://www.linkedin.com/company/tssg-tech/",
    },
  },
  {
    name: "Dilip Kumar",
    role: "Office Refreshment In-Charge",
    description: "",
    imageUrl: "img/team/dilip.jpeg",
    socialLinks: {
      facebook: "https://www.facebook.com/tssgtech/",
      instagram: "https://www.instagram.com/tssgtech/",
      linkedin: "https://www.linkedin.com/company/tssg-tech/",
    },
  },
];

const services = [
    {
        title: "Web Design",
        description: "We design and develop websites that are visually appealing, user-friendly, and optimized for search engines.",
        services: []
    },
]

const teamContainer = document.getElementById("team-container");

  const genrateTeamHTML = (members) => {
    return members
      .map((team, index) => {
        
        const delay = (0.3 + 0.2 * index).toFixed(1) + "s";

        const teamRole = team.role.includes("&")
        ? team.role.replace(/&/, "& <br />")
        : team.role;

        return `<div class="col d-flex justify-content-center wow zoomIn" data-wow-delay="${delay}">
                <div class="team-card" style="background-image: url('${
                  team.imageUrl
                }');">
                    <div class="bg-white w-100">
                        <p class="">${team.name}</p>
                        <span class="text-dark" style="max-width: 200px;">
                            ${
                              teamRole
                            }
                        </span>
                    </div>
                    <div class="team-overlay">
                        <h2 class="team-name">${team.name}</h2>
                        <p class="team-role">${
                          team.name === "Sumit Pal"
                            ? team.role.replace(/&/, "& <br />")
                            : team.role
                        }</p>
                        <span class="mb-4 small">
                            ${team.description}
                        </span>
                        <div class="social-icons">
                            <a href="${
                              team.socialLinks.facebook
                            }" aria-label="Facebook"><i
                                    class="fab fa-facebook-f"></i></a>
                            <a href="${
                              team.socialLinks.instagram
                            }" aria-label="Instagram"><i
                                    class="fab fa-instagram"></i></a>
                            <a href="${
                              team.socialLinks.linkedin
                            }" aria-label="LinkedIn"><i
                                    class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>`;
      }).join("");
  };

teamContainer.innerHTML = genrateTeamHTML(teamMembers);