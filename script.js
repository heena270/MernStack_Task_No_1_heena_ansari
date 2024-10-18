const image = document.getElementById('draggableImage');
const dropZone = document.getElementById('dropZone');

image.addEventListener('dragstart', (event) => {
    image.classList.add('dragging');
    event.dataTransfer.setData('text/plain', null); 
});


image.addEventListener('dragend', () => {
    image.classList.remove('dragging');
});


dropZone.addEventListener('dragover', (event) => {
    event.preventDefault();
});


dropZone.addEventListener('drop', (event) => {
    event.preventDefault();

    const dropZoneRect = dropZone.getBoundingClientRect();
    const xOffset = event.clientX - dropZoneRect.left - (image.width / 2);
    const yOffset = event.clientY - dropZoneRect.top - (image.height / 2);

   
    image.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
});
