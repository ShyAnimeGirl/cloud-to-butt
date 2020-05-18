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
	
	textNode.nodeValue = v;
}


