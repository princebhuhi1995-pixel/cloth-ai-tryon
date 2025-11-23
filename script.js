async function generateTryOn() {
    const userFile = document.getElementById("userPhoto").files[0];
    const clothFile = document.getElementById("clothPhoto").files[0];

    if (!userFile || !clothFile) {
        alert("Please upload both photos.");
        return;
    }

    const formData = new FormData();
    formData.append("user", userFile);
    formData.append("cloth", clothFile);

    // Replace this demo URL with real AI API later
    const response = await fetch("https://tryon-api-demo.onrender.com/tryon", {
        method: "POST",
        body: formData
    });

    const data = await response.json();
    document.getElementById("outputImage").src = data.output;
}
