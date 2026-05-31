document.getElementById("projectForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    document.getElementById("projectNameError").textContent = "";
    document.getElementById("projectDescriptionError").textContent = "";
    document.getElementById("projectUrlError").textContent = "";
    document.getElementById("projectTypeError").textContent = "";
    document.getElementById("completionDateError").textContent = "";
    document.getElementById("projectImageError").textContent = "";

    const projectName = document.getElementById("projectName").value.trim();
    const projectDescription = document.getElementById("projectDescription").value.trim();
    const projectUrl = document.getElementById("projectUrl").value.trim();
    const projectType = document.getElementById("projectType").value;
    const completionDate = document.getElementById("completionDate").value;
    const projectImage = document.getElementById("projectImage").value.trim();

    const namePattern = /^[A-Za-z\s]+$/;
    const urlPattern = /^https:\/\/.+/;
    const imagePattern = /^https:\/\/.+\.(jpg|jpeg|png|webp)$/i;

    if (projectName.length < 5) {
        document.getElementById("projectNameError").textContent = "Project name must contain at least 5 characters.";
        isValid = false;
    } else if (!namePattern.test(projectName)) {
        document.getElementById("projectNameError").textContent = "Project name must contain only letters and spaces.";
        isValid = false;
    }

    if (projectDescription.length < 15) {
        document.getElementById("projectDescriptionError").textContent = "Project description must contain at least 15 characters.";
        isValid = false;
    }

    if (!urlPattern.test(projectUrl)) {
        document.getElementById("projectUrlError").textContent = "Project URL must be valid and start with https://.";
        isValid = false;
    }

    if (projectType === "") {
        document.getElementById("projectTypeError").textContent = "Please choose a project type.";
        isValid = false;
    }

    if (completionDate === "") {
        document.getElementById("completionDateError").textContent = "Please select a completion date.";
        isValid = false;
    }

    if (!imagePattern.test(projectImage)) {
        document.getElementById("projectImageError").textContent = "Image thumbnail must be a valid image URL ending in .jpg, .jpeg, .png, or .webp.";
        isValid = false;
    }

    if (!isValid) {
        return;
    }

    const confirmation = confirm("Do you want to add this bakery project?");

    if (confirmation) {
        const tableBody = document.getElementById("projectsTableBody");

        const newRow = document.createElement("tr");

        newRow.innerHTML = `
            <td>${projectName}</td>
            <td>${projectDescription}</td>
            <td><a href="${projectUrl}" target="_blank">${projectUrl}</a></td>
            <td>${projectType}</td>
            <td>${completionDate}</td>
            <td><img src="${projectImage}" alt="Thumbnail for ${projectName}" class="project-thumbnail"></td>
        `;

        tableBody.appendChild(newRow);

        alert("The bakery project was successfully added to the table.");
        document.getElementById("projectForm").reset();
    }
});

document.getElementById("projectForm").addEventListener("reset", function () {
    document.getElementById("projectNameError").textContent = "";
    document.getElementById("projectDescriptionError").textContent = "";
    document.getElementById("projectUrlError").textContent = "";
    document.getElementById("projectTypeError").textContent = "";
    document.getElementById("completionDateError").textContent = "";
    document.getElementById("projectImageError").textContent = "";
});