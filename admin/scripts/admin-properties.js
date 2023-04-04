

function onImageUpload(event){
    let image = document.addProperty.propertyImage[0];
    console.log(image);
}

function addProperty(event){
    event.preventDefault();
    let controls = document.querySelectorAll('#add-property .form-control');
    let image = document.addProperty.image;
    console.log(image);
    return;
    /*var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        var base64Image = reader.result;
        let postData = {
            p_name:controls[0].value,
            p_uid:controls[1].value,
            p_location:controls[2].value,
            p_price:controls[3].value,
            p_beds:controls[4].value,
            p_baths:controls[5].value,
            p_description:controls[6].value,
            p_image:base64Image,
        }
        console.log(postData);
    };*/

}
