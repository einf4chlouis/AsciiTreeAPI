/**
 * @param {number} height - höhe vom Baum.
 * @param {number} width - Breite vom Baum (muss ungerade und >= 3 sein).
 * @returns {string} ASCII Strin vom Baum.
 */

export function generateAsciiTree(height, width) {
	if (height < 1) throw new Error('Höhe vom Baum muss mindestens 1 sein.'); // Überprüfung der Höhe
	if (width < 3 || width % 2 === 0) throw new Error('Breite vom Baum muss ungerade und >= 3 sein.'); // Überprüfung der Breite
	let tree = ''; // Initialisierung des Baum-Strings
	for (let i = 1; i <= height; i++) {

		const stars = 1 + Math.floor((width - 1) * (i - 1) / (height - 1)); // Anzahl der Sterne in der aktuellen Reihe
		
        const rowStars = stars % 2 === 0 ? stars - 1 : stars; // Sind Sterne gerade? Dann minus 1 so dass sie ungerade sind
		
        const spaces = Math.floor((width - rowStars) / 2); // Anzahl der Leerzeichen vor den Sternen
		
        tree += ' '.repeat(spaces) + '*'.repeat(rowStars) + '\n'; // Baumreihe als String zusammenfügen
	}

	const trunkWidth = width >= 5 ? 3 : 1; // Breite vom Stamm
	const trunkSpaces = Math.floor((width - trunkWidth) / 2); // Leerzeichen vor dem Stamm
	tree += ' '.repeat(trunkSpaces) + '|'.repeat(trunkWidth) + '\n'; // Stamm als String zusammenfügen
	return tree; 
}