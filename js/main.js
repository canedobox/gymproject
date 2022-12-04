/*
  -- -----------------------------------------------------
  -- National College of Ireland
  -- Higher Diploma in Science in Computing
  -- 2022/2023
  --
  -- Web Design and Client Side Scripting (HDSDEV_SEP)
  -- Continuous Assessment Project.
  -- 
  -- Submitted by: Luiz Canedo and Giulia Culoma
  -- Student IDs: x22117601 and x21248532
  --
  -- Tested using Google Chrome.
  -- -----------------------------------------------------
*/

/**
 * Open/close drawer.
 */
function toggleDrawer() {
  // Check if drawer exists.
  if ($('#drawer').length) {
    // Check if drawer-backdrop exists.
    if ($('#drawer-backdrop').length) {
      // Toggle page scrolling.
      $('body').toggleClass('modal');
      // Show/hide drawer backdrop.
      $('#drawer-backdrop').toggleClass('opened-drawer');
    }
    // Open/close drawer.
    $('#drawer').toggleClass('opened-drawer');

    // Log info.
    console.log(
      'toggleDrawer():',
      $('body').hasClass('modal') ? 'Drawer opened.' : 'Drawer closed.'
    );
  }
}

// When document is ready.
$(document).ready(function () {
  // Set click event for drawer-switch class.
  $('.drawer-switch').click(function (event) {
    // Prevent default click behavior.
    event.preventDefault();
    // Open/close drawer.
    toggleDrawer();
  });

  // Set click event for fake-link class.
  $('.fake-link').click(function (event) {
    // Prevent default click behavior.
    event.preventDefault();
    // Display a SweetAlert message when a fake link is clicked.
    Swal.fire({
      icon: 'info',
      text: '"' + $(this).text().trim() + '" link was clicked!',
    });

    // Log info.
    console.log('"' + $(this).text().trim() + '" link was clicked!');
  });
});