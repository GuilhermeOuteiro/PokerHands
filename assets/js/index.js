document.addEventListener("DOMContentLoaded", function() {
  // Get references to the images and the button
  const images1 = ["i11", "i21", "i31", "i41"];
  const images2 = ["i12", "i22", "i32", "i42"];
  const images3 = ["i13", "i23", "i33", "i43"];
  const images4 = ["i14", "i24", "i34", "i44"];
  const images5 = ["i15", "i25", "i35", "i45"];
  const images6 = ["i16", "i26", "i36", "i46"];
  const images7 = ["i17", "i27", "i37", "i47"];
  const images8 = ["i18", "i28", "i38", "i48"];
  const images9 = ["i19", "i29", "i39", "i49"];
  const images10 = ["i110", "i210", "i310", "i410"];
  const nextButton = document.getElementById("nextButton");
  let currentImageIndex1 = 0;
  let currentImageIndex2 = 0;
  let currentImageIndex3 = 0;
  let currentImageIndex4 = 0;
  let currentImageIndex5 = 0;
  let currentImageIndex6 = 0;
  let currentImageIndex7 = 0;
  let currentImageIndex8 = 0;
  let currentImageIndex9 = 0;
  let currentImageIndex10 = 0;

  // Function to toggle images
  function toggleImages() {
    document.getElementById(images1[currentImageIndex1]).style.display = "none";
    currentImageIndex1 = (currentImageIndex1 + 1) % images1.length;
    document.getElementById(images1[currentImageIndex1]).style.display = "inline-block";

    document.getElementById(images2[currentImageIndex2]).style.display = "none";
    currentImageIndex2 = (currentImageIndex2 + 1) % images2.length;
    document.getElementById(images2[currentImageIndex2]).style.display = "inline-block";
    
    document.getElementById(images3[currentImageIndex3]).style.display = "none";
    currentImageIndex3 = (currentImageIndex3 + 1) % images3.length;
    document.getElementById(images3[currentImageIndex3]).style.display = "inline-block";
    
    document.getElementById(images4[currentImageIndex4]).style.display = "none";
    currentImageIndex4 = (currentImageIndex4 + 1) % images4.length;
    document.getElementById(images4[currentImageIndex4]).style.display = "inline-block";
    
    document.getElementById(images5[currentImageIndex5]).style.display = "none";
    currentImageIndex5 = (currentImageIndex5 + 1) % images5.length;
    document.getElementById(images5[currentImageIndex5]).style.display = "inline-block";
    
    document.getElementById(images6[currentImageIndex6]).style.display = "none";
    currentImageIndex6 = (currentImageIndex6 + 1) % images6.length;
    document.getElementById(images6[currentImageIndex6]).style.display = "inline-block";
    
    document.getElementById(images7[currentImageIndex7]).style.display = "none";
    currentImageIndex7 = (currentImageIndex7 + 1) % images7.length;
    document.getElementById(images7[currentImageIndex7]).style.display = "inline-block";
    
    document.getElementById(images8[currentImageIndex8]).style.display = "none";
    currentImageIndex8 = (currentImageIndex8 + 1) % images8.length;
    document.getElementById(images8[currentImageIndex8]).style.display = "inline-block";
    
    document.getElementById(images9[currentImageIndex9]).style.display = "none";
    currentImageIndex9 = (currentImageIndex9 + 1) % images9.length;
    document.getElementById(images9[currentImageIndex9]).style.display = "inline-block";

    document.getElementById(images10[currentImageIndex10]).style.display = "none";
    currentImageIndex10 = (currentImageIndex10 + 1) % images10.length;
    document.getElementById(images10[currentImageIndex10]).style.display = "inline-block";
  }

  // Add a click event listener to the button
  nextButton.addEventListener("click", toggleImages);

  // Show the first image initially
  document.getElementById(images1[currentImageIndex1]).style.display = "inline-block";
  document.getElementById(images2[currentImageIndex2]).style.display = "inline-block";
  document.getElementById(images3[currentImageIndex3]).style.display = "inline-block";
  document.getElementById(images4[currentImageIndex4]).style.display = "inline-block";
  document.getElementById(images5[currentImageIndex5]).style.display = "inline-block";
  document.getElementById(images6[currentImageIndex6]).style.display = "inline-block";
  document.getElementById(images7[currentImageIndex7]).style.display = "inline-block";
  document.getElementById(images8[currentImageIndex8]).style.display = "inline-block";
  document.getElementById(images9[currentImageIndex9]).style.display = "inline-block";
  document.getElementById(images10[currentImageIndex10]).style.display = "inline-block";
});