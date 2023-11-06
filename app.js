var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var eleves = [12, 11, 123, 8, 9, 100, 90, 23, 22, 99, 198, 202, 11, 19, 78, 112];
function creerGroupes(eleves) {
    var _a;
    var groupeElevesAleatoire = __spreadArray([], eleves, true);
    for (var i = groupeElevesAleatoire.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [groupeElevesAleatoire[j], groupeElevesAleatoire[i]], groupeElevesAleatoire[i] = _a[0], groupeElevesAleatoire[j] = _a[1];
    }
    var duo = [];
    var group = [];
    for (var i = 0; i < groupeElevesAleatoire.length; i++) {
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
var groupesAleatoires = creerGroupes(eleves);
var outputDiv = document.getElementById("output");
if (outputDiv) {
    outputDiv.innerHTML = "<h2>Groupes aléatoires d'élèves :</h2>";
    groupesAleatoires.forEach(function (group, index) {
        var groupText = "Groupe ".concat(index + 1, ": ").concat(group.join(', '));
        var groupElement = document.createElement("p");
        groupElement.textContent = groupText;
        outputDiv.appendChild(groupElement);
    });
}
