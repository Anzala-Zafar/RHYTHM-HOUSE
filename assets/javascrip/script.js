// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.menu-item');
  
  navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          
          const sectionId = this.getAttribute('data-section');
          activesectiondisplay(sectionId);
          
          navUpdate(this);
      });
  });
  
  activesectiondisplay('home');
});

function activesectiondisplay(sectionId) {
  // Hide all content sections
  const contentSections = document.querySelectorAll('.content-section');
  contentSections.forEach(section => {
      section.classList.remove('active-section');
  });
  
  // Show the selected section
  const targetSection = document.getElementById(sectionId + '-section');
  if (targetSection) {
      targetSection.classList.add('active-section');
  }
  
  // Scroll to top of main content
  document.querySelector('main').scrollIntoView({behavior: 'smooth'});
}

function navUpdate(clickedLink) {
  // Remove active class from all nav links
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
      link.style.backgroundColor = '';
  });
  
  // Add active style to clicked link
  if (clickedLink.tagName === 'A') {
      clickedLink.style.backgroundColor = '#34495e';
  }
}

// Search functionality
function performance() {
  const movie = document.getElementById('search-movie').value;
  const band = document.getElementById('search-band').value;
  const performer = document.getElementById('search-performer').value;
  const year = document.getElementById('search-year').value;
  
  let resultsHTML = '<h3>Search Results</h3>';
  
  if (!movie && !band && !performer && !year) {
      resultsHTML += '<p>Please enter at least one search criteria.</p>';
  } else {
      resultsHTML += '<p>Searching for: ';
      let searchTerms = [];
      
      if (movie) searchTerms.push(`Movie: "${movie}"`);
      if (band) searchTerms.push(`Band: "${band}"`);
      if (performer) searchTerms.push(`Performer: "${performer}"`);
      if (year) searchTerms.push(`Year: "${year}"`);
      
      resultsHTML += searchTerms.join(', ');
      resultsHTML += '</p>';
      
      resultsHTML += `
      <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; margin-top: 15px;">
          <h4>Classic Rock Collection (1975)</h4>
          <p><strong>Format:</strong> CD, Tape</p>
          <p><strong>Price:</strong> PKR299 - PKR599</p>
          <p>Featuring hits from legendary bands of the 70s.</p>
      </div>
      
      <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; margin-top: 15px;">
          <h4>Greatest Movie Soundtracks</h4>
          <p><strong>Format:</strong> CD, DVD</p>
          <p><strong>Price:</strong> PKR349 - PKR799</p>
          <p>Collection of iconic songs from classic and modern films.</p>
      </div>
      
      <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; margin-top: 15px;">
          <h4>Acoustic Sessions - Solo Performers</h4>
          <p><strong>Format:</strong> CD</p>
          <p><strong>Price:</strong> PKR249 - PKR499</p>
          <p>Intimate performances by talented solo artists.</p>
      </div>
      `;
  }
  
  document.getElementById('search-results').innerHTML = resultsHTML;
}

// Hide
//   const exploreBtn = document.getElementById("btn");
//   const exploreSection = document.getElementById("exploreSection");

//   exploreBtn.onclick = function () {
//     exploreSection.classList.toggle("hidden");
//   };

  const exploreBtn = document.getElementById("explorebtn");
  const exploreSection = document.getElementById("exploreSection");

  exploreBtn.addEventListener("click", function (e) {
    e.preventDefault();   // ❌ stop page jump
    exploreSection.classList.toggle("hidden");
  });

