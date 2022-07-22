$(document).ready(function() {

    // Define variables that reference our script tags within the body of our page
    var topNavigation = $("#topNavigation").html();
   

    // Have MustacheJS render our script tags
    Mustache.parse(topNavigation);
    
    // Define our data objects
    var topNav = Mustache.render(topNavigation, {
        item: [{
                name: "Home",
                link: "#"
            },
            {
                name: "Hair",
                link: "#"
            },
            {
                name: "Makeup",
                link: "#"

                name:"Accessories"
                link:"#"

                name: "Blog"
                link: "#"

                name:"Contact"
                link:"#"
            }
        ]
    });

   

    // Place data into the HTML of our page with the html() jQuery method
    $("#render_topLinks").html(topNav);
   

    // Insert current year into the Copyright text in the footer.  Note: MustacheJS is not needed to do this.
    $("#currentYear").html(new Date().getFullYear());

});