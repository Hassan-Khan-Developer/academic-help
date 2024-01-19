// ^ Navbar Script START 


    
  function myFunction(){
      document.getElementById('navbar-mobile').classList.toggle("mystyle");
  }

            //   ^ Navbar Script END
            // ^ TABS-CONTENT-Script START


  function showContent(imageContentId, contentId) {
    // Hide all content divs
    document.querySelectorAll('.content').forEach(function (el) {
      el.classList.add('hidden');
    });

    // Show the selected content
    document.getElementById(imageContentId).classList.remove('hidden');
    document.getElementById(contentId).classList.remove('hidden');
  }
           
                //   ^ TABS-CONTENT-Script END 
       
                // ^ Brand LOGO Script


                
                   
