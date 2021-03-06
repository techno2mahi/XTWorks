﻿<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style>
	#sortable1, #sortable2 { list-style-type: none; margin: 0; padding: 0; float: left; margin-right: 10px; }
	#sortable1, #sortable3 { list-style-type: none; margin: 0; padding: 0; float: left; margin-right: 10px; }
	#sortable1, #sortable4 { list-style-type: none; margin: 0; padding: 0; float: left; margin-right: 10px; }
	#sortable1, #sortable5 { list-style-type: none; margin: 0; padding: 0; float: left; margin-right: 10px; }
	
	#sortable1 li, #sortable2 li { margin: 0 5px 5px 5px; padding: 5px; font-size: 1.2em; width: 120px; }
	#sortable1 li, #sortable3 li { margin: 0 5px 5px 5px; padding: 5px; font-size: 1.2em; width: 120px; }
	#sortable1 li, #sortable4 li { margin: 0 5px 5px 5px; padding: 5px; font-size: 1.2em; width: 120px; }
	#sortable1 li, #sortable5 li { margin: 0 5px 5px 5px; padding: 5px; font-size: 1.2em; width: 120px; }
	</style>
    <script src="Scripts/jquery-1.6.2.min.js" type="text/javascript"></script>
   <script src="Scripts/jquery-ui-1.8.14.custom.min.js" type="text/javascript"></script>
<script src="../../jquery-1.7.1.js"></script>	
<script src="../../ui/jquery.ui.core.js"></script>	
<script src="../../ui/jquery.ui.widget.js"></script>	
<script src="../../ui/jquery.ui.mouse.js"></script>	
<script src="../../ui/jquery.ui.sortable.js"></script>
<script>
	$(function() {
		$("#Allproducts, #SelectedProducts" ).sortable({
			connectWith: ".connectedSortable"
		}).disableSelection();
	});
	</script>
	
</head>
<body>
    <form id="form1" runat="server">
   <div class="demo">
   <table>
<tr>
<td valign="top"> <ul id="Allproducts" class="connectedSortable" style="border:groove">
    <input name="DEMO" type="text" style="border:hidden; display:table-cell;" value="All Products" />
	<li class="ui-state-default">ASP.NET Book Price: 450 INR</li>
	<li class="ui-state-default">C# Book Price: 450 INR</li>
	<li class="ui-state-default">Sql Server Book Price: 450 INR</li>
	<li class="ui-state-default">VB.NET Book Price: 450 INR</li>
	<li class="ui-state-default">Jquery Tutorial Price: 450 INR</li>
    <li class="ui-state-default">MVC Tutorial Price: 450 INR</li>
	<li class="ui-state-default">Android Tutorial Price: 450 INR</li>
	<li class="ui-state-default">WCF Latest Tutorial Price: 450 INR</li>
	<li class="ui-state-default">Advanced Book On HRMS Price: 450 INR</li>
	</ul></td>
<td valign="top"><ul id="SelectedProducts" class="connectedSortable" style="border:groove">
    <input name="DEMO" type="text" style="border:hidden; display:table-cell;" value="Selected Products" />
	</ul></td>
</tr>
   </table>
 



</div>
    </form>
</body>
</html>
