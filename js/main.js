/*
  -- -----------------------------------------------------
  -- National College of Ireland
  -- Higher Diploma in Science in Computing
  -- 2022/2023
  --
  -- Web Design and Client Side Scripting (HDSDEV_SEP)
  -- Continuous Assessment Project.
  -- 
  -- Submitted by: Luiz Canedo & Giulia Culoma
  -- Student IDs: x22117601 & x21248532
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
      $('body').toggleClass('modal');
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
  // Add open/close function to drawer-switch class.
  $('.drawer-switch').on('click', function (event) {
    // Prevent default click behavior.
    event.preventDefault();
    // Open/close drawer.
    toggleDrawer();
  });
});
