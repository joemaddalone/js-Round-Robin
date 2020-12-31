(function(g,f){typeof exports==='object'&&typeof module!=='undefined'?module.exports=f():typeof define==='function'&&define.amd?define(f):(g=typeof globalThis!=='undefined'?globalThis:g||self,g.robiner=f());}(this,(function(){'use strict';/*!
 * JavaScript Round Robin Generator 1.0
 *
 * Copyright 2013, Joe Maddalone
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
const robiner = function (t) {
  let e = [],
    p = +t + (t % 2),
    a = new Array(p - 1),
    l = a.length,
    pos,
    i,
    r,
    x,
    pos2;
  for (x = p; x--; ) {
    a[x] = x;
  }
  p ^ t && (a[p - 1] = null);
  for (r = 1; r < l + 1; r++) {
    e.push({ r: r, a: a[0], b: a[l - (r - 1)] });
    for (i = 2; i < p / 2 + 1; i++) {
      pos = i + (r - 2) >= l ? (l - (i + (r - 2))) * -1 : i + (r - 2);
      pos2 = pos - (r - 2) - r;
      pos2 > 0 && (pos2 = (l - pos2) * -1);
      pos2 < l * -1 && (pos2 += l);
      e.push({ r: r, a: a[l + pos2], b: a[l - pos] });
    }
  }
  return e;
};return robiner;})));