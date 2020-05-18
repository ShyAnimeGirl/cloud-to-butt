setTimeout(walk,1200,document.body);
walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	var tagName = node.tagName ? node.tagName.toLowerCase() : "";
	if (tagName == 'input' || tagName == 'textarea') {
		return;
	}
	if (node.classList && node.classList.contains('ace_editor')) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bCorona\b/g, "Coronu");
	v = v.replace(/\bcorona\b/g, "coronu");
	v = v.replace(/\bcovid-19\b/g, "chinaaids-666");
	v = v.replace(/\bCovid-19\b/g, "gay-911");
	v = v.replace(/\bCOVID-19\b/g, "6G");
	v = v.replace(/\bCOVID\b/g, "CORONU");
	v = v.replace(/\bcovid\b/g, "coronu");
	v = v.replace(/\banti-covid\b/g, "CORONU DENYING");	
	v = v.replace(/\bAnti-covid\b/g, "normal");	
	v = v.replace(/\b#covid19\b/g, "#coronu666");
	v = v.replace(/\b#coronavirus\b/g, "#coronuewwww");
	v = v.replace(/\bcoronavirus\b/g, "coronuewwww");
	v = v.replace(/\bCoronavirus\b/g, "coronuewwww");
	v = v.replace(/\bCOVID-19\b/g, "spooky-1111");	
	v = v.replace(/\b#slowthespread\b/g, "#be afraid");
	v = v.replace(/\bCDC\b/g, "NFL");
	v = v.replace(/\bvirus\b/g, "sniffles");
	v = v.replace(/\bVirus\b/g, "Sniffles");
	v = v.replace(/\bViral\b/g, "gay");
	v = v.replace(/\bviral\b/g, "gay");
	v = v.replace(/\bW.H.O.\b/g, "global elites");
	v = v.replace(/\bWHO\b/g, "WHOM");
	v = v.replace(/\bhydroxychloroquine\b/g, "advil");
	v = v.replace(/\bHydroxychloroquine\b/g, "asprin");
	v = v.replace(/\bSARS-CoV-2\b/g, "WHY YES I AM A REDDITOR HOW DID YOU KNOW?");
	v = v.replace(/\bSARS\b/g, "china scratchy spots");	
	textNode.nodeValue = v;
}


}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bCorona\b/g, "Coronu");
	v = v.replace(/\bcorona\b/g, "coronu");
	v = v.replace(/\bcovid-19\b/g, "chinaaids-666");
	v = v.replace(/\bCovid-19\b/g, "gay-911");
	v = v.replace(/\bCOVID-19\b/g, "6G");
	v = v.replace(/\bCOVID\b/g, "CORONU");
	v = v.replace(/\bcovid\b/g, "coronu");
	v = v.replace(/\b#covid19\b/g, "#coronu666");
	v = v.replace(/\b#coronavirus\b/g, "#coronuewwww");
	v = v.replace(/\bcoronavirus\b/g, "coronuewwww");
	v = v.replace(/\bCoronavirus\b/g, "coronuewwww");
	v = v.replace(/\bCOVID-19\b/g, "spooky-1111");	
	v = v.replace(/\b#slowthespread\b/g, "#be afraid");
	v = v.replace(/\bCDC\b/g, "NFL");
	v = v.replace(/\bvirus\b/g, "sniffles");
	v = v.replace(/\bVirus\b/g, "Sniffles");
	v = v.replace(/\bViral\b/g, "gay");
	v = v.replace(/\bviral\b/g, "gay");
	v = v.replace(/\bW.H.O.\b/g, "global elites");
	v = v.replace(/\bWHO\b/g, "WHOM");
	v = v.replace(/\bhydroxychloroquine\b/g, "advil");
	v = v.replace(/\bHydroxychloroquine\b/g, "asprin");
	v = v.replace(/\bSARS-CoV-2\b/g, "WHY YES I AM A REDDITOR HOW DID YOU KNOW?");
	v = v.replace(/\bSARS\b/g, "china scratchy spots");	
	textNode.nodeValue = v;
}


