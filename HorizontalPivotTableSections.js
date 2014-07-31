<script type="text/javascript"> 
    /* based orignal code by Joe Betram 
    /* see:http://forums.oracle.com/forums/thread.jspa?threadID=1009297&tstart=0 
    /* Adapted by John Minkjan: http://www.obiee101.blogspot.com/ 
    /* This version by Jack Hughes: http://jackohug.com/bi
    */ 
    
    /* Set the number of columns */ 
    var intColumnNumbers = 3;

    function insertAfter( referenceNode, newNode ) { 
        referenceNode.parentNode.insertBefore(newNode, referenceNode.previousSibling); 
    } 
    var debug =1; 
    var sectioncnt =0; 
    var x =0;

    if (debug === 1) { document.write("Get all DIVs"+"<br/>");} 
    var divs = document.getElementsByTagName('div');

    if (debug === 1) { document.write("Loop over the DIVs"+"<br/>");} 
    for(var div=0; div < divs.length; div++){

        if(divs[div].className != 'PivotContainer' ){ 
            continue; 
        }

        if (debug === 1) { document.write("&nbsp;&nbsp;&nbsp;&nbsp;Found a pivot table"+"<br/>");}

        var tbody = divs[div].getElementsByTagName('tbody')[0]; 
        if (debug === 1) { document.write("&nbsp;&nbsp;&nbsp;&nbsp;Grabbed the tbody code"+"<br/>");}

        var trs = tbody.getElementsByTagName('tr');

        var new_tr = document.createElement('tr'); 
        var nw_tr =new Array(); 
        nw_tr[x] = document.createElement('tr'); 
        if (debug === 1) { document.write("&nbsp;&nbsp;&nbsp;&nbsp;Created the new_tr variable"+"<br/>");}

        while( trs.length > 0){

            var new_td = document.createElement('td'); 
            if (debug === 1) { document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Created a new TD element."+"<br/>");}

            var new_table = document.createElement('table'); 
            if (debug === 1) { document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Created a new table element."+"<br/>");}

            var new_tbody = document.createElement('tbody'); 
            if (debug === 1) { document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Created a new tbody element."+"<br/>");}

            new_tbody.appendChild(trs[0]); 
            if (debug === 1) { document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Appended Section."+"<br/>");}

            new_tbody.appendChild(trs[0]); 
            if (debug === 1) { document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Appended Data."+"<br/>");}

            new_table.appendChild(new_tbody); 
            if (debug === 1) { document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Appended tbody to the table tag."+"<br/>");}

            new_td.appendChild(new_table); 
            if (debug === 1) { document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Appended table to the TD tag."+"<br/>");}

            new_tr.appendChild(new_td); 
            if (debug === 1) { document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Appended td to the overall TR tag."+"<br/>");} 
            /*nw_tr[0].appendChild(new_td);*/ 
            sectioncnt = sectioncnt +1; 
            if (debug === 1) { "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+document.write(sectioncnt%intColumnNumbers+"<br/>");}

            if (sectioncnt%intColumnNumbers === 0){         
                nw_tr[x]=new_tr; 
                var new_tr = document.createElement('tr'); 
                x =x+1; 
            }; 
        } 
        var y=0; 
        for (y=0; y<nw_tr.length; y++) { 
            tbody.appendChild(nw_tr[y]); 
        } 
        tbody.appendChild(new_tr); 
        if (debug === 1) { document.write("&nbsp;&nbsp;&nbsp;&nbsp;Inserted the new_tr variable as the first child of tbody"+"<br/>");} 
    }

    if (debug === 1) { document.write("Finished transposePivotTable"+"<br/>");}

</script>
