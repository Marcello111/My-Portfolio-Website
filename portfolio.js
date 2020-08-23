((d) => {

	// DOM elements
	const about = d.getElementById("about-contact");
	const contact = d.getElementById("contact");
	const showProjects = d.getElementById("show-projects");
	const showAbout = d.getElementById("about-me");
	const showContact = d.getElementById("contact-me");
	const projects = d.getElementById("projects");
	const coll = d.getElementsByClassName("collapsible");
	const top = d.querySelector(".top");
	const marker = d.getElementById("about-card-marker");
	const item = d.querySelectorAll(".about-card-navigation");
	const tabs = document.querySelectorAll('[data-tab-target]');
	const tabContents = document.querySelectorAll('[data-tab-content]');



	// Up div
	window.addEventListener("scroll", () => {
		if (window.pageYOffset > 150) {
			top.classList.add("active");
		} else {
			top.classList.remove("active");
		}
	})

	// Main menu navigation
	about.addEventListener("click", () => {
		showProjects.style.display = "none";
		showContact.style.display = "none";
		showAbout.style.display = "block";
	})

	contact.addEventListener("click", () => {
		showProjects.style.display = "none";
		showAbout.style.display = "none";
		showContact.style.display = "block";	
	})

	projects.addEventListener("click", () => {
		showAbout.style.display = "none";
		showContact.style.display ="none";
		showProjects.style.display ="block";
	})

	// Information icon
	for (let i = 0; i < coll.length; i++) {

		coll[i].addEventListener("click", function() {
			this.classList.toggle("active");
			let content = this.nextElementSibling;

			if (content.style.maxHeight) {
				content.style.maxHeight = null;
			} else {
				content.style.maxHeight = content.scrollHeight + "px";
			} 
		});
	}

	// About card marker
	function indicator(e) {
		marker.style.left = e.offsetLeft + "px";
		marker.style.width = e.offsetWidth + "px";
	}

	item.forEach(link => {
		link.addEventListener("click", (e) => {
			indicator(e.target);
		})
	})

	// About card tabs
	tabs.forEach(tab => {

	tab.addEventListener('click', () => {

		const target = document.querySelector(tab.dataset.tabTarget)

		tabContents.forEach(tabContent => {
		tabContent.classList.remove('active')
		})

		tabs.forEach(tab => {
		tab.classList.remove('active')
		})

		tab.classList.add('active')
		target.classList.add('active')
		})

	})

})(document);