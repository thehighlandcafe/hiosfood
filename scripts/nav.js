function home() {
        //Showing home section
    
                //Label
        document.getElementById('homeLabel').style.display = "block";
                //Icon
        document.getElementById('homeIcon').className = "activeIcon";
    
        //Hiding other navigation items' labels etc.
    
            //Restaurant section
                //Label
        document.getElementById('restaurantLabel').style.display = "none";
                //Icon
        document.getElementById('restaurantIcon').className = "inactiveIcon";
    
            //More section
                //Label
        document.getElementById('moreLabel').style.display = "none";
                //Icon
        document.getElementById('moreIcon').className = "inactiveIcon";
    
        //Changing the iframe source
        document.getElementById('content').src = "https://thehighlandcafe.github.io/hioswebcore/welcome.html";
    
        //Changing the page's title to match the section
        document.title = "HiOSMobile | Home";
    
        //Hiding More container and showing iframe
        document.getElementById('frameContainer').style.display = "block";
    }
    
    function restaurant() {
            //Showing restaurant section
    
                //Label
        document.getElementById('restaurantLabel').style.display = "block";
                //Icon
        document.getElementById('restaurantIcon').className = "activeIcon";
    
        //Hiding other navigation items' labels etc.
    
            //Home section
                //Label
        document.getElementById('homeLabel').style.display = "none";
                //Icon
        document.getElementById('homeIcon').className = "inactiveIcon";
    
            //More section
                //Label
        document.getElementById('moreLabel').style.display = "none";
                //Icon
        document.getElementById('moreIcon').className = "inactiveIcon";
    
        //Changing the iframe source
        document.getElementById('content').src = "https://thehighlandcafe.github.io/hioswebcore/restaurant.html";
    
        //Changing the page's title to match the section
        document.title = "HiOSMobile | Restaurant";
    
            document.getElementById('frameContainer').style.display = "block";
    }
    
    function more() {
        //Showing more section
    
                //Label
        document.getElementById('moreLabel').style.display = "block";
                //Icon
        document.getElementById('moreIcon').className = "activeIcon";
    
        //Hiding other navigation items' labels etc.
    
            //Home section
                //Label
        document.getElementById('homeLabel').style.display = "none";
                //Icon
        document.getElementById('homeIcon').className = "inactiveIcon";
    
            //Restaurant section
                //Label
        document.getElementById('restaurantLabel').style.display = "none";
                //Icon
        document.getElementById('restaurantIcon').className = "inactiveIcon";
    
        //Hiding the iFrame altogether
        document.getElementById('frameContainer').style.display = "none";

    
        //Changing the page's title to match the section
        document.title = "HiOSMobile | More";
    }
    
    function moreNew() {
            window.location.href = "more.html";
    }
    