export function getEmojiFlag( countryCode ) {
	return String.fromCodePoint(
		...countryCode
			.toUpperCase()
			.split( '' )
			.map( ( char ) => 127397 + char.charCodeAt() )
	);
}

export function stripHTML( myString ) {
	return myString.replace( /(<([^>]+)>)/gi, '' );
}
