module.exports = function (ll) {
  if (!ll) throw new Error('expected ll');
  let node = [];

  let linkList = ll;

  if (linkList.value !== undefined) {
    node.push(linkList.value);
    while (linkList.next !== undefined) {
      linkList = linkList.next;
      node.push(linkList.value);
    }
  }

  for (var i = 0; i < node.length; i++) {
    if (node[i] !== node[node.length - 1 - i]) return false;
  }

  return true;
}