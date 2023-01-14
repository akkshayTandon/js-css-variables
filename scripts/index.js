const inputs = document.getElementsByTagName("input");

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

Array.from(inputs).forEach(input => {
    input.addEventListener("change", handleUpdate);
});

Array.from(inputs).forEach(input => {
    input.addEventListener("mousemove", handleUpdate);
});
