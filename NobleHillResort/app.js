// Configure Sliders
$('.carousel').carousel({
	interval: 6000,
	pause: 'hover'
});

window.addEventListener('load', loadUser);
document.getElementById('loadNext').addEventListener('click', loadUser);

function loadUser() {
	const xhr = new XMLHttpRequest();

	xhr.open('GET', 'https://randomuser.me/api/', true);

	xhr.onload = function () {
		if (this.status === 200) {
			const response = JSON.parse(this.responseText);

			let outputDetails = '';
			let userImg = '';
			let testimonialUser = '';

			response.results.forEach(function (detail) {
				outputDetails += `
                <ul class="list-group text-left">
                <li class="list-group-item bg-light tex">
                    <a href="#" class="roundMe btn btn-primary mr-2 displayUserInfo"><i
                            class="fas fa-user-circle fa-1x"></i></a><span
                        class="card-text h5 font-weight-lighter">Hi, my name is <strong class="text-primary">${detail
							.name.first} ${detail.name.last}</strong></span>
                </li>
                <li class="list-group-item bg-light tex">
                    <a href="#" class="roundMe btn btn-primary mr-2 displayUserInfo"><i
                            class="fas fa-birthday-cake fa-1x"></i></a><span
                        class="card-text h5 font-weight-lighter">I was born on <strong class="text-primary">${detail.dob
							.date}</strong></span>
                </li>
                <li class="list-group-item bg-light tex">
                    <a href="#" class="roundMe btn btn-primary mr-2 displayUserInfo"><i
                            class="fas fa-paper-plane fa-1x"></i></a><span
                        class="card-text h5 font-weight-lighter">My email address is <strong class="text-primary">${detail.email}</strong></span>
                </li>
                <li class="list-group-item bg-light tex">
                    <a href="#" class="roundMe btn btn-primary mr-2 displayUserInfo"><i
                            class="fas fa-map-marker-alt fa-1x"></i></a><span
                        class="card-text h5 font-weight-lighter">I live in <strong class="text-primary">${detail
							.location.country}</strong></span>
                </li>
                </ul>
                `;
				userImg += `
                <img src="${detail.picture.large}" class="img-fluid rounded-circle mb-3">
                `;
				testimonialUser += `
                <cite title="Random User Testimonial">${detail.name.title}. ${detail.name.first} ${detail.name
					.last}</cite>
                `;
			});
			document.getElementById('displayImg').innerHTML = userImg;
			document.getElementById('outputDetails').innerHTML = outputDetails;
			document.getElementById('testimonialUser').innerHTML = testimonialUser;
		}
	};
	xhr.send();
}