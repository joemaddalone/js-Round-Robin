/*!
 * JavaScript Round Robin Generator
 * http://insert-title.com/
 *
 * Copyright 2010, Joe Maddalone
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */

function RoundRobin(teams) {
    var i;
    var ret = "";
    var round;
    var numplayers = 0;
    numplayers = parseInt(teams) + parseInt(teams % 2);
    numplayers = parseInt(numplayers);
    var a = new Array(numplayers - 1);
    var alength = a.length;
    for (var x = 0; x < (numplayers) ; x++) { a[x] = "Team " + (x + 1); }
    if (numplayers != parseInt(teams)) { a[alength] = "BYE"; }
    var pos;
    var pos2;
    ret = "----- ROUND #1-----<br />"
    for (var r1a = 0; r1a < (numplayers / 2) ; r1a++) {
        ret += a[r1a] + " vs. " + a[alength - r1a] + "<br />"
    }
    for (round = 2; round < alength + 1; round++) {
        ret += "<br /><br />----- ROUND #" + round + "-----<br />"
        ret += a[0] + " vs. " + a[alength - (round - 1)] + "<br />"

        for (i = 2; i < (numplayers / 2) + 1; i++) {
            pos = (i + (round - 2))
            if (pos >= alength) { pos = ((alength - pos)) * -1 }
            else
            { pos = (i + (round - 2)) }

            pos2 = (pos - (round - 2)) - round
            if (pos2 > 0) {
                pos2 = (alength - pos2) * -1
            }

            if (pos2 < (alength * -1)) {
                pos2 += alength
            }
            ret += a[(alength + pos2)]
            ret += " vs. " + a[(alength - pos)] + "<br />"
        }
    }
    return ret
}