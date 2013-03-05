/*!
 * JavaScript Round Robin Generator 1.0
 * http://insert-title.com/
 *
 * Copyright 2013, Joe Maddalone
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
function RoundRobin(t) {
    var e = []
    , p=+t+(t%2)
    , a = new Array(p - 1)
    , l = a.length
    , pos
    , i
    , r
    , pos2;
    for(x=p;x--;){a[x]=(x+1)}
    p^t&&(a[p-1] = "_");
    //for (i = 0; i < (p / 2) ; i++) {
        //e.push({r:1,a:a[i],b:a[l - i]})
    //};
    for (r = 1; r < l + 1; r++) {
        e.push({r:r,a:a[0],b:a[l - (r - 1)]});
        for (i = 2; i < (p / 2) + 1; i++) {
            pos = (i + (r - 2)) >= l ? ((l - (i + (r - 2)))) * -1 : (i + (r - 2));
            pos2 = (pos - (r - 2)) - r;
            pos2 > 0&&(pos2 = (l - pos2) * -1);
            pos2 < (l * -1)&&(pos2 += l);
            e.push({r:r,a:a[(l + pos2)],b: a[(l - pos)]})
        }
    }
    return e
}