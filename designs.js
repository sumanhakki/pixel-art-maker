
// Select Form
const pixelArtform = document.getElementById('sizePicker');

// Select color input
const pickAColor = document.getElementById('colorPicker');

// Select size input
const pixelHeight = document.getElementById('input_height');
const pixelWidth = document.getElementById('input_width');

// When size is submitted by the user, call makeGrid()
pixelArtform.addEventListener('submit', function(event) {    
    event.preventDefault();
    const height = pixelHeight.value;
    const width = pixelWidth.value;
    makeGrid(height, width);
});

// makeGrid() function
function makeGrid(height, width) {
    const pixelTable = document.getElementById('pixel_canvas');    
    if (pixelTable.innerHTML) {
        pixelTable.innerHTML = '';
    }

    for (let i = 0; i < height; i++) {        
        const tableRow = document.createElement('tr');        
        pixelTable.appendChild(tableRow);

        for (let j = 0; j < width; j++) {        
            const pixelCell = document.createElement('td');            
            pixelCell.addEventListener('click', function() {
            pixelCell.style.backgroundColor = pickAColor.value;
            });
            
        tableRow.appendChild(pixelCell);
        }
    }
}