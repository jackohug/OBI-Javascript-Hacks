<script type="text/javascript"> 
    /* based orignal code by Joe Betram 
    /* see:http://forums.oracle.com/forums/thread.jspa?threadID=1009297&tstart=0 
    /* This Version John Minkjan :http://www.obiee101.blogspot.com/ 
    /* Thanks to Nandoo for noticing the IE bug 
    */ 
    /* Set the number of columns */ 
    var intColumnNumbers = 3;
    function insertAfter( referenceNode, newNode ) 
    { 
        referenceNode.parentNode.insertBefore(newNode, referenceNode.previousSibling); 
    } 
    var debug =0; 
    var sectioncnt =0; 
    var x =0;
    if (debug === 1) { document.write("Get all tables"+"<BR>");} 
    var tables = document.getElementsByTagName('table');
    if (debug === 1) { document.write("Loop over the tables"+"<BR>");}
    for(var table=0; table < tables.length; table++){
    if(tables[table].className != 'PTSectsTable' ){ 
    continue; 
    }
    if (debug === 1) { document.write("Found a pivot table"+"<BR>");}
    var tbody = tables[table].getElementsByTagName('tbody')[0]; 
    if (debug === 1) { document.write("Grabbed the tbody code"+"<BR>");}
    var trs = tbody.getElementsByTagName('tr');
    var new_tr = document.createElement('tr'); 
    var nw_tr =new Array(); 
    nw_tr[x] = document.createElement('tr'); 
    if (debug === 1) { document.write("Created the new_tr variable"+"<BR>");}
    while( trs.length > 0){
    var new_td = document.createElement('td'); 
    if (debug === 1) { document.write("Created a new TD element."+"<BR>");}
    var new_table = document.createElement('table'); 
    if (debug === 1) { document.write("Created a new table element."+"<BR>");}
    var new_tbody = document.createElement('tbody'); 
    if (debug === 1) { document.write("Created a new tbody element."+"<BR>");}
    new_tbody.appendChild(trs[0]); 
    if (debug === 1) { document.write("Appended Section."+"<BR>");}
    new_tbody.appendChild(trs[0]); 
    if (debug === 1) { document.write("Appended Data."+"<BR>");}
    new_table.appendChild(new_tbody); 
    if (debug === 1) { document.write("Appended tbody to the table tag."+"<BR>");}
    new_td.appendChild(new_table); 
    if (debug === 1) { document.write("Appended table to the TD tag."+"<BR>");}
    new_tr.appendChild(new_td); 
    if (debug === 1) { document.write("Appended td to the overall TR tag."+"<BR>");} 
    /*nw_tr[0].appendChild(new_td);*/ 
    sectioncnt = sectioncnt +1; 
    if (debug === 1) { document.write(sectioncnt%intColumnNumbers+"<BR>");}
    if (sectioncnt%intColumnNumbers ===0){         
        nw_tr[x]=new_tr; 
        var new_tr = document.createElement('tr'); 
        x =x+1; 
    }; 
    } 
    var y=0; 
    for (y=0; y<nw_tr.length; y++) 
    { 
        tbody.appendChild(nw_tr[y]); 
    } 
    tbody.appendChild(new_tr); 
    if (debug === 1) { document.write("Inserted the new_tr variable as the first child of tbody"+"<BR>");} 
    }
    if (debug === 1) { document.write("Finished transposePivotTable"+"<BR>");}
    </script>
