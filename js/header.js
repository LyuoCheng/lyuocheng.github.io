document.writeln("<head>");
    document.writeln("<link rel=\"stylesheet\" href=\"/css/header.css\">");
    document.writeln("<script type=\"text/javascript\" src=\"/js/func_slidebar.js\"></script>");
    document.writeln("</head>");
document.writeln("<div class=\"header-wrapper\">");
    document.writeln("<h1 class=\"logo\" title=\"LYUO CHENG\">");
        document.writeln("<a href=\"/\" class=\"home\">");
            document.writeln("<img src=\"/img/logo/LyuoCheng.png\" alt=\"LyuoCheng\" class=\"logo-img\">");
        document.writeln("</a>");
    document.writeln("</h1>");
document.writeln("</div>");
document.writeln("<div class=\"sidebar\">");
    document.writeln("<ul class=\"nav\">");
        // document.writeln("<li><a href=\"/\">HOMEPAGE</a></li>");
        document.writeln("<li><a href=\"/\">PHOTOGRAPH</a></li>");
        document.writeln("<li><a href=\"/pages/CGI.html\">CGI</a></li>");
        document.writeln("<li><a href=\"/\">PROJECT</a></li>");
        document.writeln("<li><a href=\"/\">CONTACT</a></li>");
    document.writeln("</ul>");
document.writeln("</div>");
document.writeln("<ion-icon class=\"btn\" onclick=\"sidebarslide()\"></ion-icon>");