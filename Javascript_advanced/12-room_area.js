const roomDimensions = {
    width : 50,
    height : 100,
    getArea(){
        return this.width * this.height;
    }
}

let boundGetArea = roomDimensions.getArea.bind(roomDimensions);

console.log(boundGetArea()); 
