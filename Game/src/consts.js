//colors for shapes
var colors = [
    '#1abc9c',   // Turquoise (instead of teal)
    '#f39c12',   // Orange (warmer than previous yellow)
    '#9b59b6',   // Purple (slightly softer than previous)
    '#2ecc71',   // Bright green (more vibrant)
    '#3498db',   // Bright blue (clearer)
    '#2980b9',   // Deep blue (added depth)
    '#f1c40f'    // Bright yellow (more vivid)
];

//sidebar width
var sideWidth = 120;

//scene column count
var columnCount = 10;

//scene row count
var rowCount = 20;

//previewCount
var previewCount = 6;

//scene gradient start color 
var sceneBgStart = '#34495e';   // Deeper, more sophisticated gray

//scene gradient end color 
var sceneBgEnd = '#2c3e50';     // Darker, richer gray

//preview background color
var previewBg = '#252525';      // Slightly lighter dark background

//grid line color
var gridLineColor = 'rgba(255,255,255,0.15)';  // Slightly more subtle

//box border color
var boxBorderColor = 'rgba(255,255,255,0.4)';  // Slightly less transparent

// Game speed
var defaultInterval = 600;

// Level update interval 
var levelInterval = 120 * 1000; 

var exports = module.exports = {};

exports.COLORS =  colors;
exports.SIDE_WIDTH = sideWidth;
exports.ROW_COUNT = rowCount;
exports.COLUMN_COUNT = columnCount;
exports.SCENE_BG_START = sceneBgStart;
exports.SCENE_BG_END = sceneBgEnd;
exports.PREVIEW_BG = previewBg;
exports.PREVIEW_COUNT = previewCount;
exports.GRID_LINE_COLOR = gridLineColor;
exports.BOX_BORDER_COLOR = boxBorderColor;
exports.DEFAULT_INTERVAL = defaultInterval;
exports.LEVEL_INTERVAL = levelInterval;