// createBubblePath.js
// Bulle avec flèche : séparation des fills (bulle vs flèche) + 1 seul contour pour la bordure.
// Permet de définir des couleurs distinctes pour la bulle et la flèche sans couture visible.

/**
 * @param {Object} opts
 * @param {number} opts.width        Largeur du contenu (ou du div hôte)
 * @param {number} opts.height       Hauteur du contenu (ou du div hôte)
 * @param {"top"|"bottom"|"left"|"right"} [opts.side="top"]
 * @param {number} [opts.arrowBase=20]   Largeur de la base de la flèche
 * @param {number} [opts.arrowLength=10] Longueur (profondeur) de la flèche
 * @param {number} [opts.borderRadius=10]
 * @param {number} [opts.padding=8]
 * @param {number} [opts.strokeWidth=2]
 * @param {string} [opts.stroke="#111827"]
 * @param {string} [opts.bubbleFill="#ffffff"] Couleur de remplissage de la bulle (rectangle)
 * @param {string} [opts.arrowFill="#ffffff"]  Couleur de remplissage de la flèche
 * @param {number} [opts.seamOverlap=0.5]  Petit chevauchement (px) de la flèche SOUS la bulle pour éviter un filet (anti‑aliasing)
 */
export function createBubblePath(opts) {
    const {
        width,
        height,
        side = "top",
        arrowBase = 20,
        arrowLength = 10,
        borderRadius = 10,
        padding = 8,
        strokeWidth = 2,
        seamOverlap = 0.5,
    } = opts || {};

    const w = Math.max(0, Number(width) || 0);
    const h = Math.max(0, Number(height) || 0);
    const base = Math.max(0, Number(arrowBase) || 0);
    const length = Math.max(0, Number(arrowLength) || 0);
    const rIn = Math.max(0, Number(borderRadius) || 0);
    const pad = Math.max(0, Number(padding) || 0);
    const sw = Math.max(0, Number(strokeWidth) || 0);

    const rectW = w + pad * 2;
    const rectH = h + pad * 2;

    const extraW = side === "left" || side === "right" ? length : 0;
    const extraH = side === "top" || side === "bottom" ? length : 0;

    const svgWidth = rectW + extraW + sw;
    const svgHeight = rectH + extraH + sw;

    const rectX = side === "left" ? length : 0;
    const rectY = side === "top" ? length : 0;

    const rr = Math.min(rIn, Math.min(rectW, rectH) / 2);
    const cx = rectX + rectW / 2;
    const cy = rectY + rectH / 2;

    const x = rectX, y = rectY, x2 = x + rectW, y2 = y + rectH;

    // ---------- Path du RECTANGLE arrondi (pour le fill de bulle) ----------
    const rectD = [
        `M ${x + rr} ${y}`,
        `H ${x2 - rr}`,
        `A ${rr} ${rr} 0 0 1 ${x2} ${y + rr}`,
        `V ${y2 - rr}`,
        `A ${rr} ${rr} 0 0 1 ${x2 - rr} ${y2}`,
        `H ${x + rr}`,
        `A ${rr} ${rr} 0 0 1 ${x} ${y2 - rr}`,
        `V ${y + rr}`,
        `A ${rr} ${rr} 0 0 1 ${x + rr} ${y}`,
        "Z",
    ].join(" ");

    // ---------- Path de la FLÈCHE pour le fill (légèrement chevauchée) ----------
    // On pousse la base de la flèche de seamOverlap vers l'intérieur du rectangle
    // pour éviter un filet entre les deux fills sur certaines résolutions.
    let arrowD = "";
    if (length > 0 && base > 0) {
        if (side === "right") {
            arrowD = [
                `M ${x2 - seamOverlap} ${cy - base / 2}`,
                `L ${x2 + length} ${cy}`,
                `L ${x2 - seamOverlap} ${cy + base / 2}`,
                "Z",
            ].join(" ");
        } else if (side === "left") {
            arrowD = [
                `M ${x + seamOverlap} ${cy + base / 2}`,
                `L ${x - length} ${cy}`,
                `L ${x + seamOverlap} ${cy - base / 2}`,
                "Z",
            ].join(" ");
        } else if (side === "top") {
            arrowD = [
                `M ${cx - base / 2} ${y + seamOverlap}`,
                `L ${cx} ${y - length}`,
                `L ${cx + base / 2} ${y + seamOverlap}`,
                "Z",
            ].join(" ");
        } else if (side === "bottom") {
            arrowD = [
                `M ${cx + base / 2} ${y2 - seamOverlap}`,
                `L ${cx} ${y2 + length}`,
                `L ${cx - base / 2} ${y2 - seamOverlap}`,
                "Z",
            ].join(" ");
        }
    }

    // ---------- Path du CONTOUR (union rect + flèche), pour le stroke unique ----------
    let outlineD = "";
    if (side === "right") {
        outlineD = [
            `M ${x + rr} ${y}`,
            `H ${x2 - rr}`,
            `A ${rr} ${rr} 0 0 1 ${x2} ${y + rr}`,
            `V ${cy - base / 2}`,
            ...(length > 0 && base > 0
                ? [`L ${x2 + length} ${cy}`, `L ${x2} ${cy + base / 2}`]
                : []),
            `V ${y2 - rr}`,
            `A ${rr} ${rr} 0 0 1 ${x2 - rr} ${y2}`,
            `H ${x + rr}`,
            `A ${rr} ${rr} 0 0 1 ${x} ${y2 - rr}`,
            `V ${y + rr}`,
            `A ${rr} ${rr} 0 0 1 ${x + rr} ${y}`,
            "Z",
        ].join(" ");
    } else if (side === "left") {
        outlineD = [
            `M ${x + rr} ${y}`,
            `H ${x2 - rr}`,
            `A ${rr} ${rr} 0 0 1 ${x2} ${y + rr}`,
            `V ${y2 - rr}`,
            `A ${rr} ${rr} 0 0 1 ${x2 - rr} ${y2}`,
            `H ${x + rr}`,
            `A ${rr} ${rr} 0 0 1 ${x} ${y2 - rr}`,
            `V ${cy + base / 2}`,
            ...(length > 0 && base > 0
                ? [`L ${x - length} ${cy}`, `L ${x} ${cy - base / 2}`]
                : []),
            `V ${y + rr}`,
            `A ${rr} ${rr} 0 0 1 ${x + rr} ${y}`,
            "Z",
        ].join(" ");
    } else if (side === "top") {
        outlineD = [
            `M ${cx} ${y - length}`,
            ...(length > 0 && base > 0 ? [`L ${cx + base / 2} ${y}`] : []),
            `H ${x2 - rr}`,
            `A ${rr} ${rr} 0 0 1 ${x2} ${y + rr}`,
            `V ${y2 - rr}`,
            `A ${rr} ${rr} 0 0 1 ${x2 - rr} ${y2}`,
            `H ${x + rr}`,
            `A ${rr} ${rr} 0 0 1 ${x} ${y2 - rr}`,
            `V ${y + rr}`,
            `A ${rr} ${rr} 0 0 1 ${x + rr} ${y}`,
            ...(length > 0 && base > 0 ? [`H ${cx - base / 2}`] : []),
            "Z",
        ].join(" ");
    } else if (side === "bottom") {
        outlineD = [
            `M ${x + rr} ${y}`,
            `H ${x2 - rr}`,
            `A ${rr} ${rr} 0 0 1 ${x2} ${y + rr}`,
            `V ${y2 - rr}`,
            `A ${rr} ${rr} 0 0 1 ${x2 - rr} ${y2}`,
            ...(length > 0 && base > 0 ? [`H ${cx + base / 2}`, `L ${cx} ${y2 + length}`, `L ${cx - base / 2} ${y2}`] : [`H ${x + rr}`]),
            `H ${x + rr}`,
            `A ${rr} ${rr} 0 0 1 ${x} ${y + rr}`,
            `V ${y + rr}`,
            `A ${rr} ${rr} 0 0 1 ${x + rr} ${y}`,
            "Z",
        ].join(" ");
    }

    const offset = { top: side === "top" ? -length : 0, left: side === "left" ? -length : 0 };
    const contentOffset = { x: rectX + pad, y: rectY + pad };

    return {
        // géométrie
        outlineD,   // à utiliser pour le stroke (bordure unique)
        rectD,      // fill bulle
        arrowD,     // fill flèche (chevauchement interne minime)

        // métriques utiles
        width: svgWidth,
        height: svgHeight,
        viewBox: `0 0 ${svgWidth} ${svgHeight}`,
        viewBoxRectOnly: `0 0 ${rectW} ${rectH}`,
        transformRectToOrigin: `translate(${-rectX}, ${-rectY})`,
        rect: { x: rectX, y: rectY, w: rectW, h: rectH, r: rr },
        offset,
        contentOffset,
        strokeWidth: sw,
    };
}

// --- Exemple d'utilisation : couleurs distinctes ----------------------------
// const geo = createBubblePath({
//   width: 200,
//   height: 80,
//   side: "right",
//   arrowBase: 18,
//   arrowLength: 10,
//   borderRadius: 10,
//   bubbleFill: "#FFFFFF",
//   arrowFill: "#F3F4F6", // gris léger
//   stroke: "#111827",
//   strokeWidth: 2,
// });
//
// <svg viewBox={`0 0 ${geo.rect.w} ${geo.rect.h}`} style={{ overflow: 'visible' }}>
//   {/* calage du chemin complet */}
//   <g transform={geo.transformRectToOrigin}>
//     {/* ordre: flèche sous la bulle pour masquer toute micro-coupure */}
//     {geo.arrowD && <path d={geo.arrowD} fill={geo.arrowFill} stroke="none" />}
//     <path d={geo.rectD} fill={geo.bubbleFill} stroke="none" />
//     <path d={geo.outlineD} fill="none" stroke={geo.stroke} strokeWidth={geo.strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
//   </g>
// </svg>
