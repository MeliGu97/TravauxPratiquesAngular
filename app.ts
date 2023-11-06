const eleves: number[] = [12, 11, 123, 8, 9, 100, 90, 23, 22, 99, 198, 202, 11, 19, 78, 112];

function creerGroupes(eleves: number[]): number[][] {
  const groupeElevesAleatoire: number[] = [...eleves];
  for (let i: number = groupeElevesAleatoire.length - 1; i > 0; i--) {
    const j: number = Math.floor(Math.random() * (i + 1));
    [groupeElevesAleatoire[i], groupeElevesAleatoire[j]] = [groupeElevesAleatoire[j], groupeElevesAleatoire[i]];
  }

  const duo: number[][] = [];
  let group: number[] = [];

  for (let i: number = 0; i < groupeElevesAleatoire.length; i++) {
    group.push(groupeElevesAleatoire[i]);

    if (group.length === 2) {
      duo.push(group);
      group = [];
    }
  }

  if (group.length === 1) {
    // Dans le cas ou il reste un élève seul, il est ajouté au dernier groupe
    duo[duo.length - 1].push(group[0]);
  }

  return duo;
}

const groupesAleatoires: number[][] = creerGroupes(eleves);

const outputDiv = document.getElementById("output");

if (outputDiv) {
  outputDiv.innerHTML = "<h2>Groupes aléatoires d'élèves :</h2>";

  groupesAleatoires.forEach((group, index) => {
    const groupText = `Groupe ${index + 1}: ${group.join(', ')}`;
    const groupElement = document.createElement("p");
    groupElement.textContent = groupText;
    outputDiv.appendChild(groupElement);
  });
}
