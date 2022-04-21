export function getEmojiFlag( countryCode ) {
	return String.fromCodePoint(
		...countryCode
			.toUpperCase()
			.split( '' )
			.map( ( char ) => 127397 + char.charCodeAt() )
	);
}

export function stripHtmlTags( myString = '' ) {
	return myString?.replace( /(<([^>]+)>)/gi, '' );
}
