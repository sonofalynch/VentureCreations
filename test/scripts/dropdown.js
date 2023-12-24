var dropdown = document.getElementById("categories");
dropdown.onchange=selectCategories;
function selectCategories()
{   
    var dropdown = document.getElementById("categories");
    var selectedValue = dropdown.options[dropdown.selectedIndex].value;
 
    
    if (selectedValue == "holiday")
    {   document.getElementById("holiday").style.display = "";
        document.getElementById("seasonal").style.display = "none";
    }
    if (selectedValue == "season")
    {   document.getElementById("seasonal").style.display = "";
        document.getElementById("holiday").style.display = "none";
    }
    if ((selectedValue == "back") || (selectedValue == "family") || (selectedValue == "humor") || (selectedValue == "mental") || (selectedValue == "religous"))
    {   document.getElementById("seasonal").style.display = "none";
        document.getElementById("holiday").style.display = "none";
    }
    else
    {
       document.getElementById("").style.display = "none";
    }
}