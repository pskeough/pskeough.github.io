// Marks a paragraph as a figure caption when its whole content is one <em>,
// e.g. a line of *italic text* under an image. A paragraph that merely contains
// one italic word keeps normal body styling.
export default function rehypeCaption() {
  const isBlank = (n) => n.type === 'text' && n.value.trim() === '';
  const visit = (node) => {
    if (node.type === 'element' && node.tagName === 'p') {
      const kids = node.children.filter((c) => !isBlank(c));
      if (kids.length === 1 && kids[0].type === 'element' && kids[0].tagName === 'em') {
        const cls = node.properties.className ?? [];
        node.properties.className = [...cls, 'caption'];
      }
    }
    if (node.children) node.children.forEach(visit);
  };
  return (tree) => visit(tree);
}
