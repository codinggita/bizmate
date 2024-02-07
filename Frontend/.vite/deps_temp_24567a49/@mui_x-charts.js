import {
  AreaElement,
  AreaElementPath,
  AreaPlot,
  CartesianContext,
  CartesianContextProvider,
  ChartContainer,
  ChartsAxis,
  ChartsAxisHighlight,
  ChartsAxisHighlightPath,
  ChartsAxisTooltipContent,
  ChartsClipPath,
  ChartsItemTooltipContent,
  ChartsLegend,
  ChartsLegendRoot,
  ChartsSurface,
  ChartsText,
  ChartsTooltip,
  ChartsXAxis,
  ChartsYAxis,
  DEFAULT_MARGINS,
  DEFAULT_X_AXIS_KEY,
  DEFAULT_Y_AXIS_KEY,
  DefaultChartsAxisTooltipContent,
  DefaultChartsItemTooltipContent,
  DrawingContext,
  DrawingProvider,
  InteractionContext,
  LineChart,
  LineElement,
  LineElementPath,
  LineHighlightElement,
  LineHighlightPlot,
  LinePlot,
  MarkElement,
  MarkPlot,
  ResponsiveChartContainer,
  SeriesContext,
  _extends,
  _objectWithoutPropertiesLoose,
  animated,
  arc_default,
  areaElementClasses,
  axisClasses,
  blueberryTwilightPalette,
  blueberryTwilightPaletteDark,
  blueberryTwilightPaletteLight,
  chartsAxisHighlightClasses,
  chartsTooltipClasses,
  cheerfulFiestaPalette,
  cheerfulFiestaPaletteDark,
  cheerfulFiestaPaletteLight,
  color,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  getAreaElementUtilityClass,
  getAxisHighlightUtilityClass,
  getAxisUtilityClass,
  getChartsTooltipUtilityClass,
  getHighlightElementUtilityClass,
  getIsFaded,
  getIsHighlighted,
  getLegendUtilityClass,
  getLineElementUtilityClass,
  getMarkElementUtilityClass,
  getPercentageValue,
  getSeriesToDisplay,
  getValueToPositionMapper,
  isBandScaleConfig,
  legendClasses,
  lineElementClasses,
  lineHighlightElementClasses,
  mangoFusionPalette,
  mangoFusionPaletteDark,
  mangoFusionPaletteLight,
  markElementClasses,
  require_jsx_runtime,
  require_prop_types,
  styled_default,
  to,
  useId,
  useInteractionItemProps,
  useSlotProps,
  useTransition,
  useXScale,
  useYScale
} from "./chunk-SMW5ECPI.js";
import "./chunk-UWZXFKA6.js";
import {
  __toESM,
  require_react
} from "./chunk-UPDK7Z2H.js";

// node_modules/@mui/x-charts/esm/hooks/useDrawingArea.js
var React = __toESM(require_react());
function useDrawingArea() {
  const {
    left,
    top,
    width,
    height,
    bottom,
    right
  } = React.useContext(DrawingContext);
  return React.useMemo(() => ({
    left,
    top,
    width,
    height,
    bottom,
    right
  }), [height, left, top, width, bottom, right]);
}

// node_modules/@mui/x-charts/esm/ChartsReferenceLine/ChartsReferenceLine.js
var React4 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/x-charts/esm/ChartsReferenceLine/ChartsXReferenceLine.js
var React2 = __toESM(require_react());

// node_modules/@mui/x-charts/esm/ChartsReferenceLine/chartsReferenceLineClasses.js
function getReferenceLineUtilityClass(slot) {
  return generateUtilityClass("MuiChartsReferenceLine", slot);
}
var referenceLineClasses = generateUtilityClasses("MuiChartsReferenceLine", ["root", "vertical", "horizontal", "line", "label"]);

// node_modules/@mui/x-charts/esm/ChartsReferenceLine/common.js
var ReferenceLineRoot = styled_default("g")(({
  theme
}) => ({
  [`& .${referenceLineClasses.line}`]: {
    fill: "none",
    stroke: (theme.vars || theme).palette.text.primary,
    shapeRendering: "crispEdges",
    strokeWidth: 1,
    pointerEvents: "none"
  },
  [`& .${referenceLineClasses.label}`]: _extends({
    fill: (theme.vars || theme).palette.text.primary,
    stroke: "none",
    pointerEvents: "none",
    fontSize: 12
  }, theme.typography.body1)
}));

// node_modules/@mui/x-charts/esm/ChartsReferenceLine/ChartsXReferenceLine.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var getTextParams = ({
  top,
  height,
  spacingY,
  labelAlign = "middle"
}) => {
  switch (labelAlign) {
    case "start":
      return {
        y: top + spacingY,
        style: {
          dominantBaseline: "hanging",
          textAnchor: "start"
        }
      };
    case "end":
      return {
        y: top + height - spacingY,
        style: {
          dominantBaseline: "auto",
          textAnchor: "start"
        }
      };
    default:
      return {
        y: top + height / 2,
        style: {
          dominantBaseline: "central",
          textAnchor: "start"
        }
      };
  }
};
function getXReferenceLineClasses(classes) {
  return composeClasses({
    root: ["root", "vertical"],
    line: ["line"],
    label: ["label"]
  }, getReferenceLineUtilityClass, classes);
}
var warnedOnce = false;
function ChartsXReferenceLine(props) {
  var _spacing$x, _spacing$y;
  const {
    x,
    label = "",
    spacing = 5,
    classes: inClasses,
    labelAlign,
    lineStyle,
    labelStyle,
    axisId
  } = props;
  const {
    top,
    height
  } = useDrawingArea();
  const xAxisScale = useXScale(axisId);
  const xPosition = xAxisScale(x);
  if (xPosition === void 0) {
    if (true) {
      if (!warnedOnce) {
        warnedOnce = true;
        console.error(`MUI X: the value ${x} does not exist in the data of x axis with id ${axisId}.`);
      }
    }
    return null;
  }
  const d = `M ${xPosition} ${top} l 0 ${height}`;
  const classes = getXReferenceLineClasses(inClasses);
  const spacingX = typeof spacing === "object" ? (_spacing$x = spacing.x) != null ? _spacing$x : 0 : spacing;
  const spacingY = typeof spacing === "object" ? (_spacing$y = spacing.y) != null ? _spacing$y : 0 : spacing;
  const textParams = _extends({
    x: xPosition + spacingX,
    text: label,
    fontSize: 12
  }, getTextParams({
    top,
    height,
    spacingY,
    labelAlign
  }), {
    className: classes.label
  });
  return (0, import_jsx_runtime2.jsxs)(ReferenceLineRoot, {
    className: classes.root,
    children: [(0, import_jsx_runtime.jsx)("path", {
      d,
      className: classes.line,
      style: lineStyle
    }), (0, import_jsx_runtime.jsx)(ChartsText, _extends({}, textParams, {
      style: _extends({}, textParams.style, labelStyle)
    }))]
  });
}

// node_modules/@mui/x-charts/esm/ChartsReferenceLine/ChartsYReferenceLine.js
var React3 = __toESM(require_react());
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var getTextParams2 = ({
  left,
  width,
  spacingX,
  labelAlign = "middle"
}) => {
  switch (labelAlign) {
    case "start":
      return {
        x: left + spacingX,
        style: {
          dominantBaseline: "auto",
          textAnchor: "start"
        }
      };
    case "end":
      return {
        x: left + width - spacingX,
        style: {
          dominantBaseline: "auto",
          textAnchor: "end"
        }
      };
    default:
      return {
        x: left + width / 2,
        style: {
          dominantBaseline: "auto",
          textAnchor: "middle"
        }
      };
  }
};
var warnedOnce2 = false;
function getYReferenceLineClasses(classes) {
  return composeClasses({
    root: ["root", "horizontal"],
    line: ["line"],
    label: ["label"]
  }, getReferenceLineUtilityClass, classes);
}
function ChartsYReferenceLine(props) {
  var _spacing$x, _spacing$y;
  const {
    y,
    label = "",
    spacing = 5,
    classes: inClasses,
    labelAlign,
    lineStyle,
    labelStyle,
    axisId
  } = props;
  const {
    left,
    width
  } = useDrawingArea();
  const yAxisScale = useYScale(axisId);
  const yPosition = yAxisScale(y);
  if (yPosition === void 0) {
    if (true) {
      if (!warnedOnce2) {
        warnedOnce2 = true;
        console.error(`MUI X: the value ${y} does not exist in the data of y axis with id ${axisId}.`);
      }
    }
    return null;
  }
  const d = `M ${left} ${yPosition} l ${width} 0`;
  const classes = getYReferenceLineClasses(inClasses);
  const spacingX = typeof spacing === "object" ? (_spacing$x = spacing.x) != null ? _spacing$x : 0 : spacing;
  const spacingY = typeof spacing === "object" ? (_spacing$y = spacing.y) != null ? _spacing$y : 0 : spacing;
  const textParams = _extends({
    y: yPosition - spacingY,
    text: label,
    fontSize: 12
  }, getTextParams2({
    left,
    width,
    spacingX,
    labelAlign
  }), {
    className: classes.label
  });
  return (0, import_jsx_runtime4.jsxs)(ReferenceLineRoot, {
    className: classes.root,
    children: [(0, import_jsx_runtime3.jsx)("path", {
      d,
      className: classes.line,
      style: lineStyle
    }), (0, import_jsx_runtime3.jsx)(ChartsText, _extends({}, textParams, {
      style: _extends({}, textParams.style, labelStyle)
    }))]
  });
}

// node_modules/@mui/x-charts/esm/ChartsReferenceLine/ChartsReferenceLine.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
function ChartsReferenceLine(props) {
  const {
    x,
    y
  } = props;
  if (x !== void 0 && y !== void 0) {
    throw new Error("MUI-X-Charts: The ChartsReferenceLine can not have both `x` and `y` props set.");
  }
  if (x === void 0 && y === void 0) {
    throw new Error("MUI-X-Charts: The ChartsReferenceLine should have a value in `x` or `y` prop.");
  }
  if (x !== void 0) {
    return (0, import_jsx_runtime5.jsx)(ChartsXReferenceLine, _extends({}, props));
  }
  return (0, import_jsx_runtime5.jsx)(ChartsYReferenceLine, _extends({}, props));
}
true ? ChartsReferenceLine.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The id of the axis used for the reference value.
   * @default The `id` of the first defined axis.
   */
  axisId: import_prop_types.default.string,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types.default.object,
  /**
   * The label to display along the reference line.
   */
  label: import_prop_types.default.string,
  /**
   * The alignment if the label is in the chart drawing area.
   * @default 'middle'
   */
  labelAlign: import_prop_types.default.oneOf(["end", "middle", "start"]),
  /**
   * The style applied to the label.
   */
  labelStyle: import_prop_types.default.object,
  /**
   * The style applied to the line.
   */
  lineStyle: import_prop_types.default.object,
  /**
   * Additional space arround the label in px.
   * Can be a number or an object `{ x, y }` to distinguish space with the reference line and space with axes.
   * @default 5
   */
  spacing: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.shape({
    x: import_prop_types.default.number,
    y: import_prop_types.default.number
  })]),
  /**
   * The x value associated with the reference line.
   * If defined the reference line will be vertical.
   */
  x: import_prop_types.default.oneOfType([import_prop_types.default.instanceOf(Date), import_prop_types.default.number, import_prop_types.default.string]),
  /**
   * The y value associated with the reference line.
   * If defined the reference line will be horizontal.
   */
  y: import_prop_types.default.oneOfType([import_prop_types.default.instanceOf(Date), import_prop_types.default.number, import_prop_types.default.string])
} : void 0;

// node_modules/@mui/x-charts/esm/BarChart/BarChart.js
var React7 = __toESM(require_react());
var import_prop_types4 = __toESM(require_prop_types());

// node_modules/@mui/x-charts/esm/BarChart/BarPlot.js
var React6 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());

// node_modules/@mui/x-charts/esm/BarChart/BarElement.js
var React5 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var _excluded = ["id", "dataIndex", "classes", "color", "highlightScope", "slots", "slotProps", "style"];
function getBarElementUtilityClass(slot) {
  return generateUtilityClass("MuiBarElement", slot);
}
var barElementClasses = generateUtilityClasses("MuiBarElement", ["root"]);
var useUtilityClasses = (ownerState) => {
  const {
    classes,
    id
  } = ownerState;
  const slots = {
    root: ["root", `series-${id}`]
  };
  return composeClasses(slots, getBarElementUtilityClass, classes);
};
var BarElementPath = styled_default(animated.rect, {
  name: "MuiBarElement",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})(({
  ownerState
}) => ({
  stroke: "none",
  shapeRendering: "crispEdges",
  fill: ownerState.isHighlighted ? color(ownerState.color).brighter(0.5).formatHex() : ownerState.color,
  transition: "opacity 0.2s ease-in, fill 0.2s ease-in",
  opacity: ownerState.isFaded && 0.3 || 1
}));
function BarElement(props) {
  var _slots$bar;
  const {
    id,
    dataIndex,
    classes: innerClasses,
    color: color2,
    highlightScope,
    slots,
    slotProps,
    style
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const getInteractionItemProps = useInteractionItemProps(highlightScope);
  const {
    item
  } = React5.useContext(InteractionContext);
  const isHighlighted = getIsHighlighted(item, {
    type: "bar",
    seriesId: id,
    dataIndex
  }, highlightScope);
  const isFaded = !isHighlighted && getIsFaded(item, {
    type: "bar",
    seriesId: id,
    dataIndex
  }, highlightScope);
  const ownerState = {
    id,
    dataIndex,
    classes: innerClasses,
    color: color2,
    isFaded,
    isHighlighted
  };
  const classes = useUtilityClasses(ownerState);
  const Bar = (_slots$bar = slots == null ? void 0 : slots.bar) != null ? _slots$bar : BarElementPath;
  const barProps = useSlotProps({
    elementType: Bar,
    externalSlotProps: slotProps == null ? void 0 : slotProps.bar,
    additionalProps: _extends({}, other, getInteractionItemProps({
      type: "bar",
      seriesId: id,
      dataIndex
    }), {
      style,
      className: classes.root
    }),
    ownerState
  });
  return (0, import_jsx_runtime6.jsx)(Bar, _extends({}, barProps));
}
true ? BarElement.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  classes: import_prop_types2.default.object,
  dataIndex: import_prop_types2.default.number.isRequired,
  highlightScope: import_prop_types2.default.shape({
    faded: import_prop_types2.default.oneOf(["global", "none", "series"]),
    highlighted: import_prop_types2.default.oneOf(["item", "none", "series"])
  }),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types2.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types2.default.object
} : void 0;

// node_modules/@mui/x-charts/esm/BarChart/BarPlot.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var _excluded2 = ["skipAnimation"];
function getBandSize({
  bandWidth: W,
  numberOfGroups: N,
  gapRatio: r
}) {
  if (r === 0) {
    return {
      barWidth: W / N,
      offset: 0
    };
  }
  const barWidth = W / (N + (N - 1) * r);
  const offset = r * barWidth;
  return {
    barWidth,
    offset
  };
}
var useCompletedData = () => {
  var _React$useContext$bar;
  const seriesData = (_React$useContext$bar = React6.useContext(SeriesContext).bar) != null ? _React$useContext$bar : {
    series: {},
    stackingGroups: [],
    seriesOrder: []
  };
  const axisData = React6.useContext(CartesianContext);
  const {
    series,
    stackingGroups
  } = seriesData;
  const {
    xAxis,
    yAxis,
    xAxisIds,
    yAxisIds
  } = axisData;
  const defaultXAxisId = xAxisIds[0];
  const defaultYAxisId = yAxisIds[0];
  const data = stackingGroups.flatMap(({
    ids: groupIds
  }, groupIndex) => {
    return groupIds.flatMap((seriesId) => {
      var _series$seriesId$xAxi, _series$seriesId$yAxi;
      const xAxisKey = (_series$seriesId$xAxi = series[seriesId].xAxisKey) != null ? _series$seriesId$xAxi : defaultXAxisId;
      const yAxisKey = (_series$seriesId$yAxi = series[seriesId].yAxisKey) != null ? _series$seriesId$yAxi : defaultYAxisId;
      const xAxisConfig = xAxis[xAxisKey];
      const yAxisConfig = yAxis[yAxisKey];
      const verticalLayout = series[seriesId].layout === "vertical";
      let baseScaleConfig;
      if (verticalLayout) {
        if (!isBandScaleConfig(xAxisConfig)) {
          throw new Error(`MUI-X-Charts: ${xAxisKey === DEFAULT_X_AXIS_KEY ? "The first `xAxis`" : `The x-axis with id "${xAxisKey}"`} shoud be of type "band" to display the bar series of id "${seriesId}"`);
        }
        if (xAxis[xAxisKey].data === void 0) {
          throw new Error(`MUI-X-Charts: ${xAxisKey === DEFAULT_X_AXIS_KEY ? "The first `xAxis`" : `The x-axis with id "${xAxisKey}"`} shoud have data property`);
        }
        baseScaleConfig = xAxisConfig;
      } else {
        if (!isBandScaleConfig(yAxisConfig)) {
          throw new Error(`MUI-X-Charts: ${yAxisKey === DEFAULT_Y_AXIS_KEY ? "The first `yAxis`" : `The y-axis with id "${yAxisKey}"`} shoud be of type "band" to display the bar series of id "${seriesId}"`);
        }
        if (yAxis[yAxisKey].data === void 0) {
          throw new Error(`MUI-X-Charts: ${yAxisKey === DEFAULT_Y_AXIS_KEY ? "The first `yAxis`" : `The y-axis with id "${yAxisKey}"`} shoud have data property`);
        }
        baseScaleConfig = yAxisConfig;
      }
      const xScale = xAxisConfig.scale;
      const yScale = yAxisConfig.scale;
      const bandWidth = baseScaleConfig.scale.bandwidth();
      const {
        barWidth,
        offset
      } = getBandSize({
        bandWidth,
        numberOfGroups: stackingGroups.length,
        gapRatio: baseScaleConfig.barGapRatio
      });
      const barOffset = groupIndex * (barWidth + offset);
      const {
        stackedData,
        color: color2
      } = series[seriesId];
      return stackedData.map((values, dataIndex) => {
        var _xAxis$xAxisKey$data, _yAxis$yAxisKey$data;
        const bottom = Math.min(...values);
        const top = Math.max(...values);
        return {
          bottom,
          top,
          seriesId,
          dataIndex,
          layout: series[seriesId].layout,
          x: verticalLayout ? xScale((_xAxis$xAxisKey$data = xAxis[xAxisKey].data) == null ? void 0 : _xAxis$xAxisKey$data[dataIndex]) + barOffset : xScale(bottom),
          y: verticalLayout ? yScale(top) : yScale((_yAxis$yAxisKey$data = yAxis[yAxisKey].data) == null ? void 0 : _yAxis$yAxisKey$data[dataIndex]) + barOffset,
          xOrigin: xScale(0),
          yOrigin: yScale(0),
          height: verticalLayout ? Math.abs(yScale(bottom) - yScale(top)) : barWidth,
          width: verticalLayout ? barWidth : Math.abs(xScale(bottom) - xScale(top)),
          color: color2,
          highlightScope: series[seriesId].highlightScope
        };
      });
    });
  });
  return data;
};
var getOutStyle = ({
  layout,
  yOrigin,
  x,
  width,
  y,
  xOrigin,
  height
}) => _extends({}, layout === "vertical" ? {
  y: yOrigin,
  x,
  height: 0,
  width
} : {
  y,
  x: xOrigin,
  height,
  width: 0
});
var getInStyle = ({
  x,
  width,
  y,
  height
}) => ({
  y,
  x,
  height,
  width
});
function BarPlot(props) {
  const completedData = useCompletedData();
  const {
    skipAnimation
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
  const transition = useTransition(completedData, {
    keys: (bar) => `${bar.seriesId}-${bar.dataIndex}`,
    from: getOutStyle,
    leave: getOutStyle,
    enter: getInStyle,
    update: getInStyle,
    immediate: skipAnimation
  });
  return (0, import_jsx_runtime7.jsx)(React6.Fragment, {
    children: transition((style, {
      seriesId,
      dataIndex,
      color: color2,
      highlightScope
    }) => (0, import_jsx_runtime7.jsx)(BarElement, _extends({
      id: seriesId,
      dataIndex,
      highlightScope,
      color: color2
    }, other, {
      style
    })))
  });
}
true ? BarPlot.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, animations are skiped.
   * @default false
   */
  skipAnimation: import_prop_types3.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types3.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types3.default.object
} : void 0;

// node_modules/@mui/x-charts/esm/BarChart/BarChart.js
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
var BarChart = React7.forwardRef(function BarChart2(props, ref) {
  const {
    xAxis,
    yAxis,
    series,
    width,
    height,
    margin,
    colors,
    dataset,
    sx,
    layout,
    tooltip,
    axisHighlight,
    legend,
    topAxis,
    leftAxis,
    rightAxis,
    bottomAxis,
    skipAnimation,
    children,
    slots,
    slotProps
  } = props;
  const id = useId();
  const clipPathId = `${id}-clip-path`;
  const hasHorizontalSeries = layout === "horizontal" || layout === void 0 && series.some((item) => item.layout === "horizontal");
  const defaultAxisConfig = {
    scaleType: "band",
    data: Array.from({
      length: Math.max(...series.map((s) => {
        var _ref, _s$data;
        return ((_ref = (_s$data = s.data) != null ? _s$data : dataset) != null ? _ref : []).length;
      }))
    }, (_, index) => index)
  };
  const defaultizedAxisHighlight = _extends({}, hasHorizontalSeries ? {
    y: "band"
  } : {
    x: "band"
  }, axisHighlight);
  return (0, import_jsx_runtime9.jsxs)(ResponsiveChartContainer, {
    ref,
    series: series.map((s) => _extends({
      type: "bar"
    }, s, {
      layout: hasHorizontalSeries ? "horizontal" : "vertical"
    })),
    width,
    height,
    margin,
    xAxis: xAxis != null ? xAxis : hasHorizontalSeries ? void 0 : [_extends({
      id: DEFAULT_X_AXIS_KEY
    }, defaultAxisConfig)],
    yAxis: yAxis != null ? yAxis : hasHorizontalSeries ? [_extends({
      id: DEFAULT_Y_AXIS_KEY
    }, defaultAxisConfig)] : void 0,
    colors,
    dataset,
    sx,
    disableAxisListener: (tooltip == null ? void 0 : tooltip.trigger) !== "axis" && (axisHighlight == null ? void 0 : axisHighlight.x) === "none" && (axisHighlight == null ? void 0 : axisHighlight.y) === "none",
    children: [(0, import_jsx_runtime8.jsx)("g", {
      clipPath: `url(#${clipPathId})`,
      children: (0, import_jsx_runtime8.jsx)(BarPlot, {
        slots,
        slotProps,
        skipAnimation
      })
    }), (0, import_jsx_runtime8.jsx)(ChartsAxis, {
      topAxis,
      leftAxis,
      rightAxis,
      bottomAxis,
      slots,
      slotProps
    }), (0, import_jsx_runtime8.jsx)(ChartsLegend, _extends({}, legend, {
      slots,
      slotProps
    })), (0, import_jsx_runtime8.jsx)(ChartsAxisHighlight, _extends({}, defaultizedAxisHighlight)), (0, import_jsx_runtime8.jsx)(ChartsTooltip, _extends({}, tooltip, {
      slots,
      slotProps
    })), (0, import_jsx_runtime8.jsx)(ChartsClipPath, {
      id: clipPathId
    }), children]
  });
});
true ? BarChart.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Object `{ x, y }` that defines how the charts highlight the mouse position along the x- and y-axes.
   * The two properties accept the following values:
   * - 'none': display nothing.
   * - 'line': display a line at the current mouse position.
   * - 'band': display a band at the current mouse position. Only available with band scale.
   */
  axisHighlight: import_prop_types4.default.shape({
    x: import_prop_types4.default.oneOf(["band", "line", "none"]),
    y: import_prop_types4.default.oneOf(["band", "line", "none"])
  }),
  /**
   * Indicate which axis to display the bottom of the charts.
   * Can be a string (the id of the axis) or an object `ChartsXAxisProps`.
   * @default xAxisIds[0] The id of the first provided axis
   */
  bottomAxis: import_prop_types4.default.oneOfType([import_prop_types4.default.shape({
    axisId: import_prop_types4.default.string,
    classes: import_prop_types4.default.object,
    disableLine: import_prop_types4.default.bool,
    disableTicks: import_prop_types4.default.bool,
    fill: import_prop_types4.default.string,
    label: import_prop_types4.default.string,
    labelFontSize: import_prop_types4.default.number,
    labelStyle: import_prop_types4.default.object,
    position: import_prop_types4.default.oneOf(["bottom", "top"]),
    slotProps: import_prop_types4.default.object,
    slots: import_prop_types4.default.object,
    stroke: import_prop_types4.default.string,
    tickFontSize: import_prop_types4.default.number,
    tickInterval: import_prop_types4.default.oneOfType([import_prop_types4.default.oneOf(["auto"]), import_prop_types4.default.array, import_prop_types4.default.func]),
    tickLabelInterval: import_prop_types4.default.oneOfType([import_prop_types4.default.oneOf(["auto"]), import_prop_types4.default.func]),
    tickLabelStyle: import_prop_types4.default.object,
    tickMaxStep: import_prop_types4.default.number,
    tickMinStep: import_prop_types4.default.number,
    tickNumber: import_prop_types4.default.number,
    tickSize: import_prop_types4.default.number
  }), import_prop_types4.default.string]),
  children: import_prop_types4.default.node,
  className: import_prop_types4.default.string,
  /**
   * Color palette used to colorize multiple series.
   * @default blueberryTwilightPalette
   */
  colors: import_prop_types4.default.oneOfType([import_prop_types4.default.arrayOf(import_prop_types4.default.string), import_prop_types4.default.func]),
  /**
   * An array of objects that can be used to populate series and axes data using their `dataKey` property.
   */
  dataset: import_prop_types4.default.arrayOf(import_prop_types4.default.object),
  desc: import_prop_types4.default.string,
  /**
   * If `true`, the charts will not listen to the mouse move event.
   * It might break interactive features, but will improve performance.
   * @default false
   */
  disableAxisListener: import_prop_types4.default.bool,
  /**
   * The height of the chart in px. If not defined, it takes the height of the parent element.
   * @default undefined
   */
  height: import_prop_types4.default.number,
  layout: import_prop_types4.default.oneOf(["horizontal", "vertical"]),
  /**
   * Indicate which axis to display the left of the charts.
   * Can be a string (the id of the axis) or an object `ChartsYAxisProps`.
   * @default yAxisIds[0] The id of the first provided axis
   */
  leftAxis: import_prop_types4.default.oneOfType([import_prop_types4.default.shape({
    axisId: import_prop_types4.default.string,
    classes: import_prop_types4.default.object,
    disableLine: import_prop_types4.default.bool,
    disableTicks: import_prop_types4.default.bool,
    fill: import_prop_types4.default.string,
    label: import_prop_types4.default.string,
    labelFontSize: import_prop_types4.default.number,
    labelStyle: import_prop_types4.default.object,
    position: import_prop_types4.default.oneOf(["left", "right"]),
    slotProps: import_prop_types4.default.object,
    slots: import_prop_types4.default.object,
    stroke: import_prop_types4.default.string,
    tickFontSize: import_prop_types4.default.number,
    tickInterval: import_prop_types4.default.oneOfType([import_prop_types4.default.oneOf(["auto"]), import_prop_types4.default.array, import_prop_types4.default.func]),
    tickLabelInterval: import_prop_types4.default.oneOfType([import_prop_types4.default.oneOf(["auto"]), import_prop_types4.default.func]),
    tickLabelStyle: import_prop_types4.default.object,
    tickMaxStep: import_prop_types4.default.number,
    tickMinStep: import_prop_types4.default.number,
    tickNumber: import_prop_types4.default.number,
    tickSize: import_prop_types4.default.number
  }), import_prop_types4.default.string]),
  /**
   * @deprecated Consider using `slotProps.legend` instead.
   */
  legend: import_prop_types4.default.shape({
    classes: import_prop_types4.default.object,
    direction: import_prop_types4.default.oneOf(["column", "row"]),
    hidden: import_prop_types4.default.bool,
    position: import_prop_types4.default.shape({
      horizontal: import_prop_types4.default.oneOf(["left", "middle", "right"]).isRequired,
      vertical: import_prop_types4.default.oneOf(["bottom", "middle", "top"]).isRequired
    }),
    slotProps: import_prop_types4.default.object,
    slots: import_prop_types4.default.object
  }),
  /**
   * The margin between the SVG and the drawing area.
   * It's used for leaving some space for extra information such as the x- and y-axis or legend.
   * Accepts an object with the optional properties: `top`, `bottom`, `left`, and `right`.
   * @default object Depends on the charts type.
   */
  margin: import_prop_types4.default.shape({
    bottom: import_prop_types4.default.number,
    left: import_prop_types4.default.number,
    right: import_prop_types4.default.number,
    top: import_prop_types4.default.number
  }),
  /**
   * Indicate which axis to display the right of the charts.
   * Can be a string (the id of the axis) or an object `ChartsYAxisProps`.
   * @default null
   */
  rightAxis: import_prop_types4.default.oneOfType([import_prop_types4.default.shape({
    axisId: import_prop_types4.default.string,
    classes: import_prop_types4.default.object,
    disableLine: import_prop_types4.default.bool,
    disableTicks: import_prop_types4.default.bool,
    fill: import_prop_types4.default.string,
    label: import_prop_types4.default.string,
    labelFontSize: import_prop_types4.default.number,
    labelStyle: import_prop_types4.default.object,
    position: import_prop_types4.default.oneOf(["left", "right"]),
    slotProps: import_prop_types4.default.object,
    slots: import_prop_types4.default.object,
    stroke: import_prop_types4.default.string,
    tickFontSize: import_prop_types4.default.number,
    tickInterval: import_prop_types4.default.oneOfType([import_prop_types4.default.oneOf(["auto"]), import_prop_types4.default.array, import_prop_types4.default.func]),
    tickLabelInterval: import_prop_types4.default.oneOfType([import_prop_types4.default.oneOf(["auto"]), import_prop_types4.default.func]),
    tickLabelStyle: import_prop_types4.default.object,
    tickMaxStep: import_prop_types4.default.number,
    tickMinStep: import_prop_types4.default.number,
    tickNumber: import_prop_types4.default.number,
    tickSize: import_prop_types4.default.number
  }), import_prop_types4.default.string]),
  series: import_prop_types4.default.arrayOf(import_prop_types4.default.shape({
    color: import_prop_types4.default.string,
    data: import_prop_types4.default.arrayOf(import_prop_types4.default.number),
    dataKey: import_prop_types4.default.string,
    highlightScope: import_prop_types4.default.shape({
      faded: import_prop_types4.default.oneOf(["global", "none", "series"]),
      highlighted: import_prop_types4.default.oneOf(["item", "none", "series"])
    }),
    id: import_prop_types4.default.string,
    label: import_prop_types4.default.string,
    layout: import_prop_types4.default.oneOf(["horizontal", "vertical"]),
    stack: import_prop_types4.default.string,
    stackOffset: import_prop_types4.default.oneOf(["diverging", "expand", "none", "silhouette", "wiggle"]),
    stackOrder: import_prop_types4.default.oneOf(["appearance", "ascending", "descending", "insideOut", "none", "reverse"]),
    type: import_prop_types4.default.oneOf(["bar"]),
    valueFormatter: import_prop_types4.default.func,
    xAxisKey: import_prop_types4.default.string,
    yAxisKey: import_prop_types4.default.string
  })).isRequired,
  /**
   * If `true`, animations are skiped.
   * @default false
   */
  skipAnimation: import_prop_types4.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types4.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types4.default.object,
  sx: import_prop_types4.default.oneOfType([import_prop_types4.default.arrayOf(import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.object, import_prop_types4.default.bool])), import_prop_types4.default.func, import_prop_types4.default.object]),
  title: import_prop_types4.default.string,
  tooltip: import_prop_types4.default.shape({
    axisContent: import_prop_types4.default.elementType,
    classes: import_prop_types4.default.object,
    itemContent: import_prop_types4.default.elementType,
    slotProps: import_prop_types4.default.object,
    slots: import_prop_types4.default.object,
    trigger: import_prop_types4.default.oneOf(["axis", "item", "none"])
  }),
  /**
   * Indicate which axis to display the top of the charts.
   * Can be a string (the id of the axis) or an object `ChartsXAxisProps`.
   * @default null
   */
  topAxis: import_prop_types4.default.oneOfType([import_prop_types4.default.shape({
    axisId: import_prop_types4.default.string,
    classes: import_prop_types4.default.object,
    disableLine: import_prop_types4.default.bool,
    disableTicks: import_prop_types4.default.bool,
    fill: import_prop_types4.default.string,
    label: import_prop_types4.default.string,
    labelFontSize: import_prop_types4.default.number,
    labelStyle: import_prop_types4.default.object,
    position: import_prop_types4.default.oneOf(["bottom", "top"]),
    slotProps: import_prop_types4.default.object,
    slots: import_prop_types4.default.object,
    stroke: import_prop_types4.default.string,
    tickFontSize: import_prop_types4.default.number,
    tickInterval: import_prop_types4.default.oneOfType([import_prop_types4.default.oneOf(["auto"]), import_prop_types4.default.array, import_prop_types4.default.func]),
    tickLabelInterval: import_prop_types4.default.oneOfType([import_prop_types4.default.oneOf(["auto"]), import_prop_types4.default.func]),
    tickLabelStyle: import_prop_types4.default.object,
    tickMaxStep: import_prop_types4.default.number,
    tickMinStep: import_prop_types4.default.number,
    tickNumber: import_prop_types4.default.number,
    tickSize: import_prop_types4.default.number
  }), import_prop_types4.default.string]),
  viewBox: import_prop_types4.default.shape({
    height: import_prop_types4.default.number,
    width: import_prop_types4.default.number,
    x: import_prop_types4.default.number,
    y: import_prop_types4.default.number
  }),
  /**
   * The width of the chart in px. If not defined, it takes the width of the parent element.
   * @default undefined
   */
  width: import_prop_types4.default.number,
  /**
   * The configuration of the x-axes.
   * If not provided, a default axis config is used with id set to `DEFAULT_X_AXIS_KEY`.
   */
  xAxis: import_prop_types4.default.arrayOf(import_prop_types4.default.shape({
    axisId: import_prop_types4.default.string,
    classes: import_prop_types4.default.object,
    data: import_prop_types4.default.array,
    dataKey: import_prop_types4.default.string,
    disableLine: import_prop_types4.default.bool,
    disableTicks: import_prop_types4.default.bool,
    fill: import_prop_types4.default.string,
    hideTooltip: import_prop_types4.default.bool,
    id: import_prop_types4.default.string,
    label: import_prop_types4.default.string,
    labelFontSize: import_prop_types4.default.number,
    labelStyle: import_prop_types4.default.object,
    max: import_prop_types4.default.oneOfType([import_prop_types4.default.instanceOf(Date), import_prop_types4.default.number]),
    min: import_prop_types4.default.oneOfType([import_prop_types4.default.instanceOf(Date), import_prop_types4.default.number]),
    position: import_prop_types4.default.oneOf(["bottom", "left", "right", "top"]),
    scaleType: import_prop_types4.default.oneOf(["band", "linear", "log", "point", "pow", "sqrt", "time", "utc"]),
    slotProps: import_prop_types4.default.object,
    slots: import_prop_types4.default.object,
    stroke: import_prop_types4.default.string,
    tickFontSize: import_prop_types4.default.number,
    tickInterval: import_prop_types4.default.oneOfType([import_prop_types4.default.oneOf(["auto"]), import_prop_types4.default.array, import_prop_types4.default.func]),
    tickLabelInterval: import_prop_types4.default.oneOfType([import_prop_types4.default.oneOf(["auto"]), import_prop_types4.default.func]),
    tickLabelStyle: import_prop_types4.default.object,
    tickMaxStep: import_prop_types4.default.number,
    tickMinStep: import_prop_types4.default.number,
    tickNumber: import_prop_types4.default.number,
    tickSize: import_prop_types4.default.number,
    valueFormatter: import_prop_types4.default.func
  })),
  /**
   * The configuration of the y-axes.
   * If not provided, a default axis config is used with id set to `DEFAULT_Y_AXIS_KEY`.
   */
  yAxis: import_prop_types4.default.arrayOf(import_prop_types4.default.shape({
    axisId: import_prop_types4.default.string,
    classes: import_prop_types4.default.object,
    data: import_prop_types4.default.array,
    dataKey: import_prop_types4.default.string,
    disableLine: import_prop_types4.default.bool,
    disableTicks: import_prop_types4.default.bool,
    fill: import_prop_types4.default.string,
    hideTooltip: import_prop_types4.default.bool,
    id: import_prop_types4.default.string,
    label: import_prop_types4.default.string,
    labelFontSize: import_prop_types4.default.number,
    labelStyle: import_prop_types4.default.object,
    max: import_prop_types4.default.oneOfType([import_prop_types4.default.instanceOf(Date), import_prop_types4.default.number]),
    min: import_prop_types4.default.oneOfType([import_prop_types4.default.instanceOf(Date), import_prop_types4.default.number]),
    position: import_prop_types4.default.oneOf(["bottom", "left", "right", "top"]),
    scaleType: import_prop_types4.default.oneOf(["band", "linear", "log", "point", "pow", "sqrt", "time", "utc"]),
    slotProps: import_prop_types4.default.object,
    slots: import_prop_types4.default.object,
    stroke: import_prop_types4.default.string,
    tickFontSize: import_prop_types4.default.number,
    tickInterval: import_prop_types4.default.oneOfType([import_prop_types4.default.oneOf(["auto"]), import_prop_types4.default.array, import_prop_types4.default.func]),
    tickLabelInterval: import_prop_types4.default.oneOfType([import_prop_types4.default.oneOf(["auto"]), import_prop_types4.default.func]),
    tickLabelStyle: import_prop_types4.default.object,
    tickMaxStep: import_prop_types4.default.number,
    tickMinStep: import_prop_types4.default.number,
    tickNumber: import_prop_types4.default.number,
    tickSize: import_prop_types4.default.number,
    valueFormatter: import_prop_types4.default.func
  }))
} : void 0;

// node_modules/@mui/x-charts/esm/PieChart/PieChart.js
var React14 = __toESM(require_react());
var import_prop_types10 = __toESM(require_prop_types());

// node_modules/@mui/x-charts/esm/PieChart/PiePlot.js
var React13 = __toESM(require_react());
var import_prop_types9 = __toESM(require_prop_types());

// node_modules/@mui/x-charts/esm/PieChart/PieArcPlot.js
var React10 = __toESM(require_react());
var import_prop_types6 = __toESM(require_prop_types());

// node_modules/@mui/x-charts/esm/PieChart/PieArc.js
var React8 = __toESM(require_react());
var import_prop_types5 = __toESM(require_prop_types());
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
var _excluded3 = ["id", "dataIndex", "classes", "color", "highlightScope", "onClick", "isFaded", "isHighlighted", "startAngle", "endAngle", "paddingAngle", "innerRadius", "outerRadius", "cornerRadius"];
function getPieArcUtilityClass(slot) {
  return generateUtilityClass("MuiPieArc", slot);
}
var pieArcClasses = generateUtilityClasses("MuiPieArc", ["root", "highlighted", "faded"]);
var useUtilityClasses2 = (ownerState) => {
  const {
    classes,
    id,
    isFaded,
    isHighlighted
  } = ownerState;
  const slots = {
    root: ["root", `series-${id}`, isHighlighted && "highlighted", isFaded && "faded"]
  };
  return composeClasses(slots, getPieArcUtilityClass, classes);
};
var PieArcRoot = styled_default(animated.path, {
  name: "MuiPieArc",
  slot: "Root",
  overridesResolver: (_, styles) => styles.arc
})(({
  theme
}) => ({
  stroke: (theme.vars || theme).palette.background.paper,
  strokeWidth: 1,
  strokeLinejoin: "round"
}));
function PieArc(props) {
  const {
    id,
    dataIndex,
    classes: innerClasses,
    color: color2,
    highlightScope,
    onClick,
    isFaded,
    isHighlighted,
    startAngle,
    endAngle,
    paddingAngle,
    innerRadius,
    outerRadius,
    cornerRadius
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded3);
  const ownerState = {
    id,
    dataIndex,
    classes: innerClasses,
    color: color2,
    isFaded,
    isHighlighted
  };
  const classes = useUtilityClasses2(ownerState);
  const getInteractionItemProps = useInteractionItemProps(highlightScope);
  return (0, import_jsx_runtime10.jsx)(PieArcRoot, _extends({
    d: to([startAngle, endAngle, paddingAngle, innerRadius, outerRadius, cornerRadius], (sA, eA, pA, iR, oR, cR) => arc_default().cornerRadius(cR)({
      padAngle: pA,
      startAngle: sA,
      endAngle: eA,
      innerRadius: iR,
      outerRadius: oR
    })),
    onClick,
    cursor: onClick ? "pointer" : "unset",
    ownerState,
    className: classes.root
  }, other, getInteractionItemProps({
    type: "pie",
    seriesId: id,
    dataIndex
  })));
}
true ? PieArc.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  classes: import_prop_types5.default.object,
  dataIndex: import_prop_types5.default.number.isRequired,
  highlightScope: import_prop_types5.default.shape({
    faded: import_prop_types5.default.oneOf(["global", "none", "series"]),
    highlighted: import_prop_types5.default.oneOf(["item", "none", "series"])
  }),
  isFaded: import_prop_types5.default.bool.isRequired,
  isHighlighted: import_prop_types5.default.bool.isRequired
} : void 0;

// node_modules/@mui/x-charts/esm/PieChart/dataTransform/transition.js
var defaultTransitionConfig = {
  keys: (item) => item.id,
  from: ({
    innerRadius,
    outerRadius,
    cornerRadius,
    startAngle,
    endAngle,
    paddingAngle,
    color: color2,
    isFaded
  }) => ({
    innerRadius,
    outerRadius: (innerRadius + outerRadius) / 2,
    cornerRadius,
    startAngle: (startAngle + endAngle) / 2,
    endAngle: (startAngle + endAngle) / 2,
    paddingAngle,
    fill: color2,
    opacity: isFaded ? 0.3 : 1
  }),
  leave: ({
    innerRadius,
    startAngle,
    endAngle
  }) => ({
    innerRadius,
    outerRadius: innerRadius,
    startAngle: (startAngle + endAngle) / 2,
    endAngle: (startAngle + endAngle) / 2
  }),
  enter: ({
    innerRadius,
    outerRadius,
    startAngle,
    endAngle
  }) => ({
    innerRadius,
    outerRadius,
    startAngle,
    endAngle
  }),
  update: ({
    innerRadius,
    outerRadius,
    cornerRadius,
    startAngle,
    endAngle,
    paddingAngle,
    color: color2,
    isFaded
  }) => ({
    innerRadius,
    outerRadius,
    cornerRadius,
    startAngle,
    endAngle,
    paddingAngle,
    fill: color2,
    opacity: isFaded ? 0.3 : 1
  }),
  config: {
    tension: 120,
    friction: 14,
    clamp: true
  }
};
var defaultLabelTransitionConfig = {
  keys: (item) => item.id,
  from: ({
    innerRadius,
    outerRadius,
    arcLabelRadius,
    cornerRadius,
    startAngle,
    endAngle,
    paddingAngle
  }) => ({
    innerRadius,
    outerRadius: (innerRadius + outerRadius) / 2,
    cornerRadius,
    arcLabelRadius,
    startAngle: (startAngle + endAngle) / 2,
    endAngle: (startAngle + endAngle) / 2,
    paddingAngle,
    opacity: 0
  }),
  leave: ({
    innerRadius,
    startAngle,
    endAngle
  }) => ({
    innerRadius,
    outerRadius: innerRadius,
    arcLabelRadius: innerRadius,
    startAngle: (startAngle + endAngle) / 2,
    endAngle: (startAngle + endAngle) / 2,
    opacity: 0
  }),
  enter: ({
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    arcLabelRadius
  }) => ({
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    arcLabelRadius,
    opacity: 1
  }),
  update: ({
    innerRadius,
    outerRadius,
    cornerRadius,
    startAngle,
    endAngle,
    paddingAngle,
    arcLabelRadius
  }) => ({
    innerRadius,
    outerRadius,
    cornerRadius,
    startAngle,
    endAngle,
    paddingAngle,
    arcLabelRadius,
    opacity: 1
  }),
  config: {
    tension: 120,
    friction: 14,
    clamp: true
  }
};

// node_modules/@mui/x-charts/esm/PieChart/dataTransform/useTransformData.js
var React9 = __toESM(require_react());
function useTransformData(series) {
  const {
    id: seriesId,
    highlightScope,
    data,
    faded,
    highlighted,
    paddingAngle: basePaddingAngle = 0,
    innerRadius: baseInnerRadius = 0,
    arcLabelRadius: baseArcLabelRadius,
    outerRadius: baseOuterRadius,
    cornerRadius: baseCornerRadius = 0
  } = series;
  const {
    item: highlightedItem
  } = React9.useContext(InteractionContext);
  const getHighlightStatus = React9.useCallback((dataIndex) => {
    const isHighlighted = getIsHighlighted(highlightedItem, {
      type: "pie",
      seriesId,
      dataIndex
    }, highlightScope);
    const isFaded = !isHighlighted && getIsFaded(highlightedItem, {
      type: "pie",
      seriesId,
      dataIndex
    }, highlightScope);
    return {
      isHighlighted,
      isFaded
    };
  }, [highlightScope, highlightedItem, seriesId]);
  const dataWithHighlight = React9.useMemo(() => data.map((item, itemIndex) => {
    var _attributesOverride$p, _attributesOverride$i, _attributesOverride$o, _attributesOverride$c, _ref, _attributesOverride$a;
    const {
      isHighlighted,
      isFaded
    } = getHighlightStatus(itemIndex);
    const attributesOverride = _extends({
      additionalRadius: 0
    }, isFaded && faded || isHighlighted && highlighted || {});
    const paddingAngle = Math.max(0, Math.PI * ((_attributesOverride$p = attributesOverride.paddingAngle) != null ? _attributesOverride$p : basePaddingAngle) / 180);
    const innerRadius = Math.max(0, (_attributesOverride$i = attributesOverride.innerRadius) != null ? _attributesOverride$i : baseInnerRadius);
    const outerRadius = Math.max(0, (_attributesOverride$o = attributesOverride.outerRadius) != null ? _attributesOverride$o : baseOuterRadius + attributesOverride.additionalRadius);
    const cornerRadius = (_attributesOverride$c = attributesOverride.cornerRadius) != null ? _attributesOverride$c : baseCornerRadius;
    const arcLabelRadius = (_ref = (_attributesOverride$a = attributesOverride.arcLabelRadius) != null ? _attributesOverride$a : baseArcLabelRadius) != null ? _ref : (innerRadius + outerRadius) / 2;
    return _extends({}, item, attributesOverride, {
      isFaded,
      isHighlighted,
      paddingAngle,
      innerRadius,
      outerRadius,
      cornerRadius,
      arcLabelRadius
    });
  }), [baseCornerRadius, baseInnerRadius, baseOuterRadius, basePaddingAngle, baseArcLabelRadius, data, faded, getHighlightStatus, highlighted]);
  return dataWithHighlight;
}

// node_modules/@mui/x-charts/esm/PieChart/PieArcPlot.js
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
var _excluded4 = ["slots", "slotProps", "innerRadius", "outerRadius", "cornerRadius", "paddingAngle", "id", "highlightScope", "highlighted", "faded", "data", "onClick", "skipAnimation"];
var _excluded22 = ["startAngle", "endAngle", "paddingAngle", "innerRadius", "arcLabelRadius", "outerRadius", "cornerRadius"];
function PieArcPlot(props) {
  var _slots$pieArc;
  const {
    slots,
    slotProps,
    innerRadius = 0,
    outerRadius,
    cornerRadius = 0,
    paddingAngle = 0,
    id,
    highlightScope,
    highlighted,
    faded = {
      additionalRadius: -5
    },
    data,
    onClick,
    skipAnimation
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded4);
  const transformedData = useTransformData({
    innerRadius,
    outerRadius,
    cornerRadius,
    paddingAngle,
    id,
    highlightScope,
    highlighted,
    faded,
    data
  });
  const transition = useTransition(transformedData, _extends({}, defaultTransitionConfig, {
    immediate: skipAnimation
  }));
  if (data.length === 0) {
    return null;
  }
  const Arc = (_slots$pieArc = slots == null ? void 0 : slots.pieArc) != null ? _slots$pieArc : PieArc;
  return (0, import_jsx_runtime11.jsx)("g", _extends({}, other, {
    children: transition((_ref, item, _, index) => {
      let {
        startAngle,
        endAngle,
        paddingAngle: pA,
        innerRadius: iR,
        outerRadius: oR,
        cornerRadius: cR
      } = _ref, style = _objectWithoutPropertiesLoose(_ref, _excluded22);
      return (0, import_jsx_runtime11.jsx)(Arc, _extends({
        startAngle,
        endAngle,
        paddingAngle: pA,
        innerRadius: iR,
        outerRadius: oR,
        cornerRadius: cR,
        style,
        id,
        color: item.color,
        dataIndex: index,
        highlightScope,
        isFaded: item.isFaded,
        isHighlighted: item.isHighlighted,
        onClick: onClick && ((event) => {
          onClick(event, {
            type: "pie",
            seriesId: id,
            dataIndex: index
          }, item);
        })
      }, slotProps == null ? void 0 : slotProps.pieArc));
    })
  }));
}
true ? PieArcPlot.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The radius between circle center and the arc label in px.
   * @default (innerRadius - outerRadius) / 2
   */
  arcLabelRadius: import_prop_types6.default.number,
  /**
   * The radius applied to arc corners (similar to border radius).
   * @default 0
   */
  cornerRadius: import_prop_types6.default.number,
  data: import_prop_types6.default.arrayOf(import_prop_types6.default.shape({
    color: import_prop_types6.default.string.isRequired,
    endAngle: import_prop_types6.default.number.isRequired,
    formattedValue: import_prop_types6.default.string.isRequired,
    id: import_prop_types6.default.oneOfType([import_prop_types6.default.number, import_prop_types6.default.string]).isRequired,
    index: import_prop_types6.default.number.isRequired,
    label: import_prop_types6.default.string,
    padAngle: import_prop_types6.default.number.isRequired,
    startAngle: import_prop_types6.default.number.isRequired,
    value: import_prop_types6.default.number.isRequired
  })).isRequired,
  /**
   * Override the arc attibutes when it is faded.
   * @default { additionalRadius: -5 }
   */
  faded: import_prop_types6.default.shape({
    additionalRadius: import_prop_types6.default.number,
    arcLabelRadius: import_prop_types6.default.number,
    color: import_prop_types6.default.string,
    cornerRadius: import_prop_types6.default.number,
    innerRadius: import_prop_types6.default.number,
    outerRadius: import_prop_types6.default.number,
    paddingAngle: import_prop_types6.default.number
  }),
  /**
   * Override the arc attibutes when it is highlighted.
   */
  highlighted: import_prop_types6.default.shape({
    additionalRadius: import_prop_types6.default.number,
    arcLabelRadius: import_prop_types6.default.number,
    color: import_prop_types6.default.string,
    cornerRadius: import_prop_types6.default.number,
    innerRadius: import_prop_types6.default.number,
    outerRadius: import_prop_types6.default.number,
    paddingAngle: import_prop_types6.default.number
  }),
  highlightScope: import_prop_types6.default.shape({
    faded: import_prop_types6.default.oneOf(["global", "none", "series"]),
    highlighted: import_prop_types6.default.oneOf(["item", "none", "series"])
  }),
  id: import_prop_types6.default.string.isRequired,
  /**
   * The radius between circle center and the begining of the arc.
   * @default 0
   */
  innerRadius: import_prop_types6.default.number,
  /**
   * Callback fired when a pie item is clicked.
   * @param {React.MouseEvent<SVGPathElement, MouseEvent>} event The event source of the callback.
   * @param {PieItemIdentifier} pieItemIdentifier The pie item identifier.
   * @param {DefaultizedPieValueType} item The pie item.
   */
  onClick: import_prop_types6.default.func,
  /**
   * The radius between circle center and the end of the arc.
   */
  outerRadius: import_prop_types6.default.number.isRequired,
  /**
   * The padding angle (deg) between two arcs.
   * @default 0
   */
  paddingAngle: import_prop_types6.default.number,
  /**
   * If `true`, animations are skiped.
   * @default false
   */
  skipAnimation: import_prop_types6.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types6.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types6.default.object
} : void 0;

// node_modules/@mui/x-charts/esm/PieChart/PieArcLabelPlot.js
var React12 = __toESM(require_react());
var import_prop_types8 = __toESM(require_prop_types());

// node_modules/@mui/x-charts/esm/PieChart/PieArcLabel.js
var React11 = __toESM(require_react());
var import_prop_types7 = __toESM(require_prop_types());
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
var _excluded5 = ["id", "classes", "color", "startAngle", "endAngle", "paddingAngle", "arcLabelRadius", "innerRadius", "outerRadius", "cornerRadius", "formattedArcLabel", "isHighlighted", "isFaded", "style"];
function getPieArcLabelUtilityClass(slot) {
  return generateUtilityClass("MuiPieArcLabel", slot);
}
var pieArcLabelClasses = generateUtilityClasses("MuiPieArcLabel", ["root", "highlighted", "faded"]);
var useUtilityClasses3 = (ownerState) => {
  const {
    classes,
    id,
    isFaded,
    isHighlighted
  } = ownerState;
  const slots = {
    root: ["root", `series-${id}`, isHighlighted && "highlighted", isFaded && "faded"]
  };
  return composeClasses(slots, getPieArcLabelUtilityClass, classes);
};
var PieArcLabelRoot = styled_default(animated.text, {
  name: "MuiPieArcLabel",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})(({
  theme
}) => ({
  fill: (theme.vars || theme).palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "middle"
}));
var getLabelPosition = (formattedArcLabel, variable) => (startAngle, endAngle, padAngle, arcLabelRadius, cornerRadius) => {
  if (!formattedArcLabel) {
    return 0;
  }
  const [x, y] = arc_default().cornerRadius(cornerRadius).centroid({
    padAngle,
    startAngle,
    endAngle,
    innerRadius: arcLabelRadius,
    outerRadius: arcLabelRadius
  });
  if (variable === "x") {
    return x;
  }
  return y;
};
function PieArcLabel(props) {
  const {
    id,
    classes: innerClasses,
    color: color2,
    startAngle,
    endAngle,
    paddingAngle,
    arcLabelRadius,
    cornerRadius,
    formattedArcLabel,
    isHighlighted,
    isFaded,
    style
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded5);
  const ownerState = {
    id,
    classes: innerClasses,
    color: color2,
    isFaded,
    isHighlighted
  };
  const classes = useUtilityClasses3(ownerState);
  return (0, import_jsx_runtime12.jsx)(PieArcLabelRoot, _extends({
    className: classes.root
  }, other, {
    style: _extends({
      x: to([startAngle, endAngle, paddingAngle, arcLabelRadius, cornerRadius], getLabelPosition(formattedArcLabel, "x")),
      y: to([startAngle, endAngle, paddingAngle, arcLabelRadius, cornerRadius], getLabelPosition(formattedArcLabel, "y"))
    }, style),
    children: formattedArcLabel
  }));
}
true ? PieArcLabel.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  classes: import_prop_types7.default.object,
  formattedArcLabel: import_prop_types7.default.string,
  isFaded: import_prop_types7.default.bool.isRequired,
  isHighlighted: import_prop_types7.default.bool.isRequired
} : void 0;

// node_modules/@mui/x-charts/esm/PieChart/PieArcLabelPlot.js
var import_jsx_runtime13 = __toESM(require_jsx_runtime());
var _excluded6 = ["slots", "slotProps", "innerRadius", "outerRadius", "arcLabelRadius", "cornerRadius", "paddingAngle", "id", "highlightScope", "highlighted", "faded", "data", "arcLabel", "arcLabelMinAngle", "skipAnimation"];
var _excluded23 = ["startAngle", "endAngle", "paddingAngle", "innerRadius", "outerRadius", "arcLabelRadius", "cornerRadius"];
var RATIO = 180 / Math.PI;
function getItemLabel(arcLabel, arcLabelMinAngle, item) {
  if (!arcLabel) {
    return null;
  }
  const angle = (item.endAngle - item.startAngle) * RATIO;
  if (angle < arcLabelMinAngle) {
    return null;
  }
  if (typeof arcLabel === "string") {
    var _item$arcLabel;
    return (_item$arcLabel = item[arcLabel]) == null ? void 0 : _item$arcLabel.toString();
  }
  return arcLabel(item);
}
function PieArcLabelPlot(props) {
  var _slots$pieArcLabel;
  const {
    slots,
    slotProps,
    innerRadius,
    outerRadius,
    arcLabelRadius,
    cornerRadius = 0,
    paddingAngle = 0,
    id,
    highlightScope,
    highlighted,
    faded = {
      additionalRadius: -5
    },
    data,
    arcLabel,
    arcLabelMinAngle = 0,
    skipAnimation
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded6);
  const transformedData = useTransformData({
    innerRadius,
    outerRadius,
    arcLabelRadius,
    cornerRadius,
    paddingAngle,
    id,
    highlightScope,
    highlighted,
    faded,
    data
  });
  const transition = useTransition(transformedData, _extends({}, defaultLabelTransitionConfig, {
    immediate: skipAnimation
  }));
  if (data.length === 0) {
    return null;
  }
  const ArcLabel = (_slots$pieArcLabel = slots == null ? void 0 : slots.pieArcLabel) != null ? _slots$pieArcLabel : PieArcLabel;
  return (0, import_jsx_runtime13.jsx)("g", _extends({}, other, {
    children: transition((_ref, item) => {
      let {
        startAngle,
        endAngle,
        paddingAngle: pA,
        innerRadius: iR,
        outerRadius: oR,
        arcLabelRadius: aLR,
        cornerRadius: cR
      } = _ref, style = _objectWithoutPropertiesLoose(_ref, _excluded23);
      return (0, import_jsx_runtime13.jsx)(ArcLabel, _extends({
        startAngle,
        endAngle,
        paddingAngle: pA,
        innerRadius: iR,
        outerRadius: oR,
        arcLabelRadius: aLR,
        cornerRadius: cR,
        style,
        id,
        color: item.color,
        isFaded: item.isFaded,
        isHighlighted: item.isHighlighted,
        formattedArcLabel: getItemLabel(arcLabel, arcLabelMinAngle, item)
      }, slotProps == null ? void 0 : slotProps.pieArcLabel));
    })
  }));
}
true ? PieArcLabelPlot.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The label displayed into the arc.
   */
  arcLabel: import_prop_types8.default.oneOfType([import_prop_types8.default.oneOf(["formattedValue", "label", "value"]), import_prop_types8.default.func]),
  /**
   * The minimal angle required to display the arc label.
   * @default 0
   */
  arcLabelMinAngle: import_prop_types8.default.number,
  /**
   * The radius between circle center and the arc label in px.
   * @default (innerRadius - outerRadius) / 2
   */
  arcLabelRadius: import_prop_types8.default.number,
  /**
   * The radius applied to arc corners (similar to border radius).
   * @default 0
   */
  cornerRadius: import_prop_types8.default.number,
  data: import_prop_types8.default.arrayOf(import_prop_types8.default.shape({
    color: import_prop_types8.default.string.isRequired,
    endAngle: import_prop_types8.default.number.isRequired,
    formattedValue: import_prop_types8.default.string.isRequired,
    id: import_prop_types8.default.oneOfType([import_prop_types8.default.number, import_prop_types8.default.string]).isRequired,
    index: import_prop_types8.default.number.isRequired,
    label: import_prop_types8.default.string,
    padAngle: import_prop_types8.default.number.isRequired,
    startAngle: import_prop_types8.default.number.isRequired,
    value: import_prop_types8.default.number.isRequired
  })).isRequired,
  /**
   * Override the arc attibutes when it is faded.
   * @default { additionalRadius: -5 }
   */
  faded: import_prop_types8.default.shape({
    additionalRadius: import_prop_types8.default.number,
    arcLabelRadius: import_prop_types8.default.number,
    color: import_prop_types8.default.string,
    cornerRadius: import_prop_types8.default.number,
    innerRadius: import_prop_types8.default.number,
    outerRadius: import_prop_types8.default.number,
    paddingAngle: import_prop_types8.default.number
  }),
  /**
   * Override the arc attibutes when it is highlighted.
   */
  highlighted: import_prop_types8.default.shape({
    additionalRadius: import_prop_types8.default.number,
    arcLabelRadius: import_prop_types8.default.number,
    color: import_prop_types8.default.string,
    cornerRadius: import_prop_types8.default.number,
    innerRadius: import_prop_types8.default.number,
    outerRadius: import_prop_types8.default.number,
    paddingAngle: import_prop_types8.default.number
  }),
  highlightScope: import_prop_types8.default.shape({
    faded: import_prop_types8.default.oneOf(["global", "none", "series"]),
    highlighted: import_prop_types8.default.oneOf(["item", "none", "series"])
  }),
  id: import_prop_types8.default.string.isRequired,
  /**
   * The radius between circle center and the begining of the arc.
   * @default 0
   */
  innerRadius: import_prop_types8.default.number,
  /**
   * The radius between circle center and the end of the arc.
   */
  outerRadius: import_prop_types8.default.number.isRequired,
  /**
   * The padding angle (deg) between two arcs.
   * @default 0
   */
  paddingAngle: import_prop_types8.default.number,
  /**
   * If `true`, animations are skiped.
   * @default false
   */
  skipAnimation: import_prop_types8.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types8.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types8.default.object
} : void 0;

// node_modules/@mui/x-charts/esm/PieChart/PiePlot.js
var import_jsx_runtime14 = __toESM(require_jsx_runtime());
var import_jsx_runtime15 = __toESM(require_jsx_runtime());
function PiePlot(props) {
  const {
    skipAnimation,
    slots,
    slotProps,
    onClick
  } = props;
  const seriesData = React13.useContext(SeriesContext).pie;
  const {
    left,
    top,
    width,
    height
  } = React13.useContext(DrawingContext);
  if (seriesData === void 0) {
    return null;
  }
  const availableRadius = Math.min(width, height) / 2;
  const {
    series,
    seriesOrder
  } = seriesData;
  return (0, import_jsx_runtime15.jsxs)("g", {
    children: [seriesOrder.map((seriesId) => {
      const {
        innerRadius: innerRadiusParam,
        outerRadius: outerRadiusParam,
        cornerRadius,
        paddingAngle,
        data,
        cx: cxParam,
        cy: cyParam,
        highlighted,
        faded,
        highlightScope
      } = series[seriesId];
      const outerRadius = getPercentageValue(outerRadiusParam != null ? outerRadiusParam : availableRadius, availableRadius);
      const innerRadius = getPercentageValue(innerRadiusParam != null ? innerRadiusParam : 0, availableRadius);
      const cx = getPercentageValue(cxParam != null ? cxParam : "50%", width);
      const cy = getPercentageValue(cyParam != null ? cyParam : "50%", height);
      return (0, import_jsx_runtime14.jsx)("g", {
        transform: `translate(${left + cx}, ${top + cy})`,
        children: (0, import_jsx_runtime14.jsx)(PieArcPlot, {
          innerRadius,
          outerRadius,
          cornerRadius,
          paddingAngle,
          id: seriesId,
          data,
          skipAnimation,
          highlightScope,
          highlighted,
          faded,
          onClick,
          slots,
          slotProps
        })
      }, seriesId);
    }), seriesOrder.map((seriesId) => {
      const {
        innerRadius: innerRadiusParam,
        outerRadius: outerRadiusParam,
        arcLabelRadius: arcLabelRadiusParam,
        cornerRadius,
        paddingAngle,
        arcLabel,
        arcLabelMinAngle,
        data,
        cx: cxParam,
        cy: cyParam,
        highlightScope
      } = series[seriesId];
      const outerRadius = getPercentageValue(outerRadiusParam != null ? outerRadiusParam : availableRadius, availableRadius);
      const innerRadius = getPercentageValue(innerRadiusParam != null ? innerRadiusParam : 0, availableRadius);
      const arcLabelRadius = arcLabelRadiusParam === void 0 ? (outerRadius + innerRadius) / 2 : getPercentageValue(arcLabelRadiusParam, availableRadius);
      const cx = getPercentageValue(cxParam != null ? cxParam : "50%", width);
      const cy = getPercentageValue(cyParam != null ? cyParam : "50%", height);
      return (0, import_jsx_runtime14.jsx)("g", {
        transform: `translate(${left + cx}, ${top + cy})`,
        children: (0, import_jsx_runtime14.jsx)(PieArcLabelPlot, {
          innerRadius,
          outerRadius: outerRadius != null ? outerRadius : availableRadius,
          arcLabelRadius,
          cornerRadius,
          paddingAngle,
          id: seriesId,
          data,
          skipAnimation,
          arcLabel,
          arcLabelMinAngle,
          highlightScope
        })
      }, seriesId);
    })]
  });
}
true ? PiePlot.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Callback fired when a pie item is clicked.
   * @param {React.MouseEvent<SVGPathElement, MouseEvent>} event The event source of the callback.
   * @param {PieItemIdentifier} pieItemIdentifier The pie item identifier.
   * @param {DefaultizedPieValueType} item The pie item.
   */
  onClick: import_prop_types9.default.func,
  /**
   * If `true`, animations are skiped.
   * @default false
   */
  skipAnimation: import_prop_types9.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types9.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types9.default.object
} : void 0;

// node_modules/@mui/x-charts/esm/PieChart/PieChart.js
var import_jsx_runtime16 = __toESM(require_jsx_runtime());
var import_jsx_runtime17 = __toESM(require_jsx_runtime());
var defaultMargin = {
  top: 5,
  bottom: 5,
  left: 5,
  right: 100
};
function PieChart(props) {
  const {
    xAxis,
    yAxis,
    series,
    width,
    height,
    margin: marginProps,
    colors,
    sx,
    tooltip = {
      trigger: "item"
    },
    axisHighlight = {
      x: "none",
      y: "none"
    },
    skipAnimation,
    legend = {
      direction: "column",
      position: {
        vertical: "middle",
        horizontal: "right"
      }
    },
    topAxis = null,
    leftAxis = null,
    rightAxis = null,
    bottomAxis = null,
    children,
    slots,
    slotProps,
    onClick
  } = props;
  const margin = _extends({}, defaultMargin, marginProps);
  return (0, import_jsx_runtime17.jsxs)(ResponsiveChartContainer, {
    series: series.map((s) => _extends({
      type: "pie"
    }, s)),
    width,
    height,
    margin,
    xAxis: xAxis != null ? xAxis : [{
      id: DEFAULT_X_AXIS_KEY,
      scaleType: "point",
      data: [...new Array(Math.max(...series.map((s) => s.data.length)))].map((_, index) => index)
    }],
    yAxis,
    colors,
    sx,
    disableAxisListener: (tooltip == null ? void 0 : tooltip.trigger) !== "axis" && (axisHighlight == null ? void 0 : axisHighlight.x) === "none" && (axisHighlight == null ? void 0 : axisHighlight.y) === "none",
    children: [(0, import_jsx_runtime16.jsx)(ChartsAxis, {
      topAxis,
      leftAxis,
      rightAxis,
      bottomAxis,
      slots,
      slotProps
    }), (0, import_jsx_runtime16.jsx)(PiePlot, {
      slots,
      slotProps,
      onClick,
      skipAnimation
    }), (0, import_jsx_runtime16.jsx)(ChartsLegend, _extends({}, legend, {
      slots,
      slotProps
    })), (0, import_jsx_runtime16.jsx)(ChartsAxisHighlight, _extends({}, axisHighlight)), (0, import_jsx_runtime16.jsx)(ChartsTooltip, _extends({}, tooltip)), children]
  });
}
true ? PieChart.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  axisHighlight: import_prop_types10.default.shape({
    x: import_prop_types10.default.oneOf(["band", "line", "none"]),
    y: import_prop_types10.default.oneOf(["band", "line", "none"])
  }),
  /**
   * Indicate which axis to display the bottom of the charts.
   * Can be a string (the id of the axis) or an object `ChartsXAxisProps`.
   * @default null
   */
  bottomAxis: import_prop_types10.default.oneOfType([import_prop_types10.default.shape({
    axisId: import_prop_types10.default.string,
    classes: import_prop_types10.default.object,
    disableLine: import_prop_types10.default.bool,
    disableTicks: import_prop_types10.default.bool,
    fill: import_prop_types10.default.string,
    label: import_prop_types10.default.string,
    labelFontSize: import_prop_types10.default.number,
    labelStyle: import_prop_types10.default.object,
    position: import_prop_types10.default.oneOf(["bottom", "top"]),
    slotProps: import_prop_types10.default.object,
    slots: import_prop_types10.default.object,
    stroke: import_prop_types10.default.string,
    tickFontSize: import_prop_types10.default.number,
    tickInterval: import_prop_types10.default.oneOfType([import_prop_types10.default.oneOf(["auto"]), import_prop_types10.default.array, import_prop_types10.default.func]),
    tickLabelInterval: import_prop_types10.default.oneOfType([import_prop_types10.default.oneOf(["auto"]), import_prop_types10.default.func]),
    tickLabelStyle: import_prop_types10.default.object,
    tickMaxStep: import_prop_types10.default.number,
    tickMinStep: import_prop_types10.default.number,
    tickNumber: import_prop_types10.default.number,
    tickSize: import_prop_types10.default.number
  }), import_prop_types10.default.string]),
  children: import_prop_types10.default.node,
  className: import_prop_types10.default.string,
  /**
   * Color palette used to colorize multiple series.
   * @default blueberryTwilightPalette
   */
  colors: import_prop_types10.default.oneOfType([import_prop_types10.default.arrayOf(import_prop_types10.default.string), import_prop_types10.default.func]),
  /**
   * An array of objects that can be used to populate series and axes data using their `dataKey` property.
   */
  dataset: import_prop_types10.default.arrayOf(import_prop_types10.default.object),
  desc: import_prop_types10.default.string,
  /**
   * If `true`, the charts will not listen to the mouse move event.
   * It might break interactive features, but will improve performance.
   * @default false
   */
  disableAxisListener: import_prop_types10.default.bool,
  /**
   * The height of the chart in px. If not defined, it takes the height of the parent element.
   * @default undefined
   */
  height: import_prop_types10.default.number,
  /**
   * Indicate which axis to display the left of the charts.
   * Can be a string (the id of the axis) or an object `ChartsYAxisProps`.
   * @default null
   */
  leftAxis: import_prop_types10.default.oneOfType([import_prop_types10.default.shape({
    axisId: import_prop_types10.default.string,
    classes: import_prop_types10.default.object,
    disableLine: import_prop_types10.default.bool,
    disableTicks: import_prop_types10.default.bool,
    fill: import_prop_types10.default.string,
    label: import_prop_types10.default.string,
    labelFontSize: import_prop_types10.default.number,
    labelStyle: import_prop_types10.default.object,
    position: import_prop_types10.default.oneOf(["left", "right"]),
    slotProps: import_prop_types10.default.object,
    slots: import_prop_types10.default.object,
    stroke: import_prop_types10.default.string,
    tickFontSize: import_prop_types10.default.number,
    tickInterval: import_prop_types10.default.oneOfType([import_prop_types10.default.oneOf(["auto"]), import_prop_types10.default.array, import_prop_types10.default.func]),
    tickLabelInterval: import_prop_types10.default.oneOfType([import_prop_types10.default.oneOf(["auto"]), import_prop_types10.default.func]),
    tickLabelStyle: import_prop_types10.default.object,
    tickMaxStep: import_prop_types10.default.number,
    tickMinStep: import_prop_types10.default.number,
    tickNumber: import_prop_types10.default.number,
    tickSize: import_prop_types10.default.number
  }), import_prop_types10.default.string]),
  /**
   * @deprecated Consider using `slotProps.legend` instead.
   */
  legend: import_prop_types10.default.shape({
    classes: import_prop_types10.default.object,
    direction: import_prop_types10.default.oneOf(["column", "row"]),
    hidden: import_prop_types10.default.bool,
    position: import_prop_types10.default.shape({
      horizontal: import_prop_types10.default.oneOf(["left", "middle", "right"]).isRequired,
      vertical: import_prop_types10.default.oneOf(["bottom", "middle", "top"]).isRequired
    }),
    slotProps: import_prop_types10.default.object,
    slots: import_prop_types10.default.object
  }),
  /**
   * The margin between the SVG and the drawing area.
   * It's used for leaving some space for extra information such as the x- and y-axis or legend.
   * Accepts an object with the optional properties: `top`, `bottom`, `left`, and `right`.
   * @default object Depends on the charts type.
   */
  margin: import_prop_types10.default.shape({
    bottom: import_prop_types10.default.number,
    left: import_prop_types10.default.number,
    right: import_prop_types10.default.number,
    top: import_prop_types10.default.number
  }),
  onClick: import_prop_types10.default.func,
  /**
   * Indicate which axis to display the right of the charts.
   * Can be a string (the id of the axis) or an object `ChartsYAxisProps`.
   * @default null
   */
  rightAxis: import_prop_types10.default.oneOfType([import_prop_types10.default.shape({
    axisId: import_prop_types10.default.string,
    classes: import_prop_types10.default.object,
    disableLine: import_prop_types10.default.bool,
    disableTicks: import_prop_types10.default.bool,
    fill: import_prop_types10.default.string,
    label: import_prop_types10.default.string,
    labelFontSize: import_prop_types10.default.number,
    labelStyle: import_prop_types10.default.object,
    position: import_prop_types10.default.oneOf(["left", "right"]),
    slotProps: import_prop_types10.default.object,
    slots: import_prop_types10.default.object,
    stroke: import_prop_types10.default.string,
    tickFontSize: import_prop_types10.default.number,
    tickInterval: import_prop_types10.default.oneOfType([import_prop_types10.default.oneOf(["auto"]), import_prop_types10.default.array, import_prop_types10.default.func]),
    tickLabelInterval: import_prop_types10.default.oneOfType([import_prop_types10.default.oneOf(["auto"]), import_prop_types10.default.func]),
    tickLabelStyle: import_prop_types10.default.object,
    tickMaxStep: import_prop_types10.default.number,
    tickMinStep: import_prop_types10.default.number,
    tickNumber: import_prop_types10.default.number,
    tickSize: import_prop_types10.default.number
  }), import_prop_types10.default.string]),
  series: import_prop_types10.default.arrayOf(import_prop_types10.default.shape({
    arcLabel: import_prop_types10.default.oneOfType([import_prop_types10.default.oneOf(["formattedValue", "label", "value"]), import_prop_types10.default.func]),
    arcLabelMinAngle: import_prop_types10.default.number,
    arcLabelRadius: import_prop_types10.default.oneOfType([import_prop_types10.default.number, import_prop_types10.default.string]),
    color: import_prop_types10.default.string,
    cornerRadius: import_prop_types10.default.number,
    cx: import_prop_types10.default.oneOfType([import_prop_types10.default.number, import_prop_types10.default.string]),
    cy: import_prop_types10.default.oneOfType([import_prop_types10.default.number, import_prop_types10.default.string]),
    data: import_prop_types10.default.arrayOf(import_prop_types10.default.shape({
      color: import_prop_types10.default.string,
      id: import_prop_types10.default.oneOfType([import_prop_types10.default.number, import_prop_types10.default.string]),
      label: import_prop_types10.default.string,
      value: import_prop_types10.default.number.isRequired
    })).isRequired,
    endAngle: import_prop_types10.default.number,
    faded: import_prop_types10.default.shape({
      additionalRadius: import_prop_types10.default.number,
      arcLabelRadius: import_prop_types10.default.number,
      color: import_prop_types10.default.string,
      cornerRadius: import_prop_types10.default.number,
      innerRadius: import_prop_types10.default.number,
      outerRadius: import_prop_types10.default.number,
      paddingAngle: import_prop_types10.default.number
    }),
    highlighted: import_prop_types10.default.shape({
      additionalRadius: import_prop_types10.default.number,
      arcLabelRadius: import_prop_types10.default.number,
      color: import_prop_types10.default.string,
      cornerRadius: import_prop_types10.default.number,
      innerRadius: import_prop_types10.default.number,
      outerRadius: import_prop_types10.default.number,
      paddingAngle: import_prop_types10.default.number
    }),
    highlightScope: import_prop_types10.default.shape({
      faded: import_prop_types10.default.oneOf(["global", "none", "series"]),
      highlighted: import_prop_types10.default.oneOf(["item", "none", "series"])
    }),
    id: import_prop_types10.default.string,
    innerRadius: import_prop_types10.default.oneOfType([import_prop_types10.default.number, import_prop_types10.default.string]),
    outerRadius: import_prop_types10.default.oneOfType([import_prop_types10.default.number, import_prop_types10.default.string]),
    paddingAngle: import_prop_types10.default.number,
    sortingValues: import_prop_types10.default.oneOfType([import_prop_types10.default.oneOf(["asc", "desc", "none"]), import_prop_types10.default.func]),
    startAngle: import_prop_types10.default.number,
    type: import_prop_types10.default.oneOf(["pie"]),
    valueFormatter: import_prop_types10.default.func
  })).isRequired,
  /**
   * If `true`, animations are skiped.
   * @default false
   */
  skipAnimation: import_prop_types10.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types10.default.object,
  slots: import_prop_types10.default.object,
  sx: import_prop_types10.default.oneOfType([import_prop_types10.default.arrayOf(import_prop_types10.default.oneOfType([import_prop_types10.default.func, import_prop_types10.default.object, import_prop_types10.default.bool])), import_prop_types10.default.func, import_prop_types10.default.object]),
  title: import_prop_types10.default.string,
  tooltip: import_prop_types10.default.shape({
    axisContent: import_prop_types10.default.elementType,
    classes: import_prop_types10.default.object,
    itemContent: import_prop_types10.default.elementType,
    slotProps: import_prop_types10.default.object,
    slots: import_prop_types10.default.object,
    trigger: import_prop_types10.default.oneOf(["axis", "item", "none"])
  }),
  /**
   * Indicate which axis to display the top of the charts.
   * Can be a string (the id of the axis) or an object `ChartsXAxisProps`.
   * @default null
   */
  topAxis: import_prop_types10.default.oneOfType([import_prop_types10.default.shape({
    axisId: import_prop_types10.default.string,
    classes: import_prop_types10.default.object,
    disableLine: import_prop_types10.default.bool,
    disableTicks: import_prop_types10.default.bool,
    fill: import_prop_types10.default.string,
    label: import_prop_types10.default.string,
    labelFontSize: import_prop_types10.default.number,
    labelStyle: import_prop_types10.default.object,
    position: import_prop_types10.default.oneOf(["bottom", "top"]),
    slotProps: import_prop_types10.default.object,
    slots: import_prop_types10.default.object,
    stroke: import_prop_types10.default.string,
    tickFontSize: import_prop_types10.default.number,
    tickInterval: import_prop_types10.default.oneOfType([import_prop_types10.default.oneOf(["auto"]), import_prop_types10.default.array, import_prop_types10.default.func]),
    tickLabelInterval: import_prop_types10.default.oneOfType([import_prop_types10.default.oneOf(["auto"]), import_prop_types10.default.func]),
    tickLabelStyle: import_prop_types10.default.object,
    tickMaxStep: import_prop_types10.default.number,
    tickMinStep: import_prop_types10.default.number,
    tickNumber: import_prop_types10.default.number,
    tickSize: import_prop_types10.default.number
  }), import_prop_types10.default.string]),
  viewBox: import_prop_types10.default.shape({
    height: import_prop_types10.default.number,
    width: import_prop_types10.default.number,
    x: import_prop_types10.default.number,
    y: import_prop_types10.default.number
  }),
  /**
   * The width of the chart in px. If not defined, it takes the width of the parent element.
   * @default undefined
   */
  width: import_prop_types10.default.number,
  /**
   * The configuration of the x-axes.
   * If not provided, a default axis config is used with id set to `DEFAULT_X_AXIS_KEY`.
   */
  xAxis: import_prop_types10.default.arrayOf(import_prop_types10.default.shape({
    axisId: import_prop_types10.default.string,
    classes: import_prop_types10.default.object,
    data: import_prop_types10.default.array,
    dataKey: import_prop_types10.default.string,
    disableLine: import_prop_types10.default.bool,
    disableTicks: import_prop_types10.default.bool,
    fill: import_prop_types10.default.string,
    hideTooltip: import_prop_types10.default.bool,
    id: import_prop_types10.default.string,
    label: import_prop_types10.default.string,
    labelFontSize: import_prop_types10.default.number,
    labelStyle: import_prop_types10.default.object,
    max: import_prop_types10.default.oneOfType([import_prop_types10.default.instanceOf(Date), import_prop_types10.default.number]),
    min: import_prop_types10.default.oneOfType([import_prop_types10.default.instanceOf(Date), import_prop_types10.default.number]),
    position: import_prop_types10.default.oneOf(["bottom", "left", "right", "top"]),
    scaleType: import_prop_types10.default.oneOf(["band", "linear", "log", "point", "pow", "sqrt", "time", "utc"]),
    slotProps: import_prop_types10.default.object,
    slots: import_prop_types10.default.object,
    stroke: import_prop_types10.default.string,
    tickFontSize: import_prop_types10.default.number,
    tickInterval: import_prop_types10.default.oneOfType([import_prop_types10.default.oneOf(["auto"]), import_prop_types10.default.array, import_prop_types10.default.func]),
    tickLabelInterval: import_prop_types10.default.oneOfType([import_prop_types10.default.oneOf(["auto"]), import_prop_types10.default.func]),
    tickLabelStyle: import_prop_types10.default.object,
    tickMaxStep: import_prop_types10.default.number,
    tickMinStep: import_prop_types10.default.number,
    tickNumber: import_prop_types10.default.number,
    tickSize: import_prop_types10.default.number,
    valueFormatter: import_prop_types10.default.func
  })),
  /**
   * The configuration of the y-axes.
   * If not provided, a default axis config is used with id set to `DEFAULT_Y_AXIS_KEY`.
   */
  yAxis: import_prop_types10.default.arrayOf(import_prop_types10.default.shape({
    axisId: import_prop_types10.default.string,
    classes: import_prop_types10.default.object,
    data: import_prop_types10.default.array,
    dataKey: import_prop_types10.default.string,
    disableLine: import_prop_types10.default.bool,
    disableTicks: import_prop_types10.default.bool,
    fill: import_prop_types10.default.string,
    hideTooltip: import_prop_types10.default.bool,
    id: import_prop_types10.default.string,
    label: import_prop_types10.default.string,
    labelFontSize: import_prop_types10.default.number,
    labelStyle: import_prop_types10.default.object,
    max: import_prop_types10.default.oneOfType([import_prop_types10.default.instanceOf(Date), import_prop_types10.default.number]),
    min: import_prop_types10.default.oneOfType([import_prop_types10.default.instanceOf(Date), import_prop_types10.default.number]),
    position: import_prop_types10.default.oneOf(["bottom", "left", "right", "top"]),
    scaleType: import_prop_types10.default.oneOf(["band", "linear", "log", "point", "pow", "sqrt", "time", "utc"]),
    slotProps: import_prop_types10.default.object,
    slots: import_prop_types10.default.object,
    stroke: import_prop_types10.default.string,
    tickFontSize: import_prop_types10.default.number,
    tickInterval: import_prop_types10.default.oneOfType([import_prop_types10.default.oneOf(["auto"]), import_prop_types10.default.array, import_prop_types10.default.func]),
    tickLabelInterval: import_prop_types10.default.oneOfType([import_prop_types10.default.oneOf(["auto"]), import_prop_types10.default.func]),
    tickLabelStyle: import_prop_types10.default.object,
    tickMaxStep: import_prop_types10.default.number,
    tickMinStep: import_prop_types10.default.number,
    tickNumber: import_prop_types10.default.number,
    tickSize: import_prop_types10.default.number,
    valueFormatter: import_prop_types10.default.func
  }))
} : void 0;

// node_modules/@mui/x-charts/esm/ScatterChart/ScatterChart.js
var React17 = __toESM(require_react());
var import_prop_types13 = __toESM(require_prop_types());

// node_modules/@mui/x-charts/esm/ScatterChart/ScatterPlot.js
var React16 = __toESM(require_react());
var import_prop_types12 = __toESM(require_prop_types());

// node_modules/@mui/x-charts/esm/ScatterChart/Scatter.js
var React15 = __toESM(require_react());
var import_prop_types11 = __toESM(require_prop_types());
var import_jsx_runtime18 = __toESM(require_jsx_runtime());
function Scatter(props) {
  const {
    series,
    xScale,
    yScale,
    color: color2,
    markerSize
  } = props;
  const {
    item
  } = React15.useContext(InteractionContext);
  const getInteractionItemProps = useInteractionItemProps(series.highlightScope);
  const cleanData = React15.useMemo(() => {
    const getXPosition = getValueToPositionMapper(xScale);
    const getYPosition = getValueToPositionMapper(yScale);
    const xRange = xScale.range();
    const yRange = yScale.range();
    const minXRange = Math.min(...xRange);
    const maxXRange = Math.max(...xRange);
    const minYRange = Math.min(...yRange);
    const maxYRange = Math.max(...yRange);
    const temp = [];
    for (let i = 0; i < series.data.length; i += 1) {
      const scatterPoint = series.data[i];
      const x = getXPosition(scatterPoint.x);
      const y = getYPosition(scatterPoint.y);
      const isInRange = x >= minXRange && x <= maxXRange && y >= minYRange && y <= maxYRange;
      const pointCtx = {
        type: "scatter",
        seriesId: series.id,
        dataIndex: i
      };
      if (isInRange) {
        temp.push({
          x,
          y,
          isFaded: !getIsHighlighted(item, pointCtx, series.highlightScope) && getIsFaded(item, pointCtx, series.highlightScope),
          interactionProps: getInteractionItemProps(pointCtx),
          id: scatterPoint.id
        });
      }
    }
    return temp;
  }, [yScale, xScale, getInteractionItemProps, item, series.data, series.highlightScope, series.id]);
  return (0, import_jsx_runtime18.jsx)("g", {
    children: cleanData.map((dataPoint) => (0, import_jsx_runtime18.jsx)("circle", _extends({
      cx: 0,
      cy: 0,
      r: markerSize,
      transform: `translate(${dataPoint.x}, ${dataPoint.y})`,
      fill: color2,
      opacity: dataPoint.isFaded && 0.3 || 1
    }, dataPoint.interactionProps), dataPoint.id))
  });
}
true ? Scatter.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  color: import_prop_types11.default.string.isRequired,
  markerSize: import_prop_types11.default.number.isRequired,
  series: import_prop_types11.default.shape({
    color: import_prop_types11.default.string.isRequired,
    data: import_prop_types11.default.arrayOf(import_prop_types11.default.shape({
      id: import_prop_types11.default.oneOfType([import_prop_types11.default.number, import_prop_types11.default.string]).isRequired,
      x: import_prop_types11.default.number.isRequired,
      y: import_prop_types11.default.number.isRequired
    })).isRequired,
    highlightScope: import_prop_types11.default.shape({
      faded: import_prop_types11.default.oneOf(["global", "none", "series"]),
      highlighted: import_prop_types11.default.oneOf(["item", "none", "series"])
    }),
    id: import_prop_types11.default.string.isRequired,
    label: import_prop_types11.default.string,
    markerSize: import_prop_types11.default.number,
    type: import_prop_types11.default.oneOf(["scatter"]).isRequired,
    valueFormatter: import_prop_types11.default.func.isRequired,
    xAxisKey: import_prop_types11.default.string,
    yAxisKey: import_prop_types11.default.string
  }).isRequired,
  xScale: import_prop_types11.default.func.isRequired,
  yScale: import_prop_types11.default.func.isRequired
} : void 0;

// node_modules/@mui/x-charts/esm/ScatterChart/ScatterPlot.js
var import_jsx_runtime19 = __toESM(require_jsx_runtime());
function ScatterPlot(props) {
  var _slots$scatter;
  const {
    slots,
    slotProps
  } = props;
  const seriesData = React16.useContext(SeriesContext).scatter;
  const axisData = React16.useContext(CartesianContext);
  if (seriesData === void 0) {
    return null;
  }
  const {
    series,
    seriesOrder
  } = seriesData;
  const {
    xAxis,
    yAxis,
    xAxisIds,
    yAxisIds
  } = axisData;
  const defaultXAxisId = xAxisIds[0];
  const defaultYAxisId = yAxisIds[0];
  const ScatterItems = (_slots$scatter = slots == null ? void 0 : slots.scatter) != null ? _slots$scatter : Scatter;
  return (0, import_jsx_runtime19.jsx)(React16.Fragment, {
    children: seriesOrder.map((seriesId) => {
      const {
        id,
        xAxisKey,
        yAxisKey,
        markerSize,
        color: color2
      } = series[seriesId];
      const xScale = xAxis[xAxisKey != null ? xAxisKey : defaultXAxisId].scale;
      const yScale = yAxis[yAxisKey != null ? yAxisKey : defaultYAxisId].scale;
      return (0, import_jsx_runtime19.jsx)(ScatterItems, _extends({
        xScale,
        yScale,
        color: color2,
        markerSize: markerSize != null ? markerSize : 4,
        series: series[seriesId]
      }, slotProps == null ? void 0 : slotProps.scatter), id);
    })
  });
}
true ? ScatterPlot.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types12.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types12.default.object
} : void 0;

// node_modules/@mui/x-charts/esm/ScatterChart/ScatterChart.js
var import_jsx_runtime20 = __toESM(require_jsx_runtime());
var import_jsx_runtime21 = __toESM(require_jsx_runtime());
var ScatterChart = React17.forwardRef(function ScatterChart2(props, ref) {
  const {
    xAxis,
    yAxis,
    series,
    tooltip,
    axisHighlight,
    legend,
    width,
    height,
    margin,
    colors,
    sx,
    topAxis,
    leftAxis,
    rightAxis,
    bottomAxis,
    children,
    slots,
    slotProps
  } = props;
  return (0, import_jsx_runtime21.jsxs)(ResponsiveChartContainer, {
    ref,
    series: series.map((s) => _extends({
      type: "scatter"
    }, s)),
    width,
    height,
    margin,
    colors,
    xAxis,
    yAxis,
    sx,
    children: [(0, import_jsx_runtime20.jsx)(ChartsAxis, {
      topAxis,
      leftAxis,
      rightAxis,
      bottomAxis,
      slots,
      slotProps
    }), (0, import_jsx_runtime20.jsx)(ScatterPlot, {
      slots,
      slotProps
    }), (0, import_jsx_runtime20.jsx)(ChartsLegend, _extends({}, legend, {
      slots,
      slotProps
    })), (0, import_jsx_runtime20.jsx)(ChartsAxisHighlight, _extends({
      x: "none",
      y: "none"
    }, axisHighlight)), (0, import_jsx_runtime20.jsx)(ChartsTooltip, _extends({
      trigger: "item"
    }, tooltip)), children]
  });
});
true ? ScatterChart.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  axisHighlight: import_prop_types13.default.shape({
    x: import_prop_types13.default.oneOf(["band", "line", "none"]),
    y: import_prop_types13.default.oneOf(["band", "line", "none"])
  }),
  /**
   * Indicate which axis to display the bottom of the charts.
   * Can be a string (the id of the axis) or an object `ChartsXAxisProps`.
   * @default xAxisIds[0] The id of the first provided axis
   */
  bottomAxis: import_prop_types13.default.oneOfType([import_prop_types13.default.shape({
    axisId: import_prop_types13.default.string,
    classes: import_prop_types13.default.object,
    disableLine: import_prop_types13.default.bool,
    disableTicks: import_prop_types13.default.bool,
    fill: import_prop_types13.default.string,
    label: import_prop_types13.default.string,
    labelFontSize: import_prop_types13.default.number,
    labelStyle: import_prop_types13.default.object,
    position: import_prop_types13.default.oneOf(["bottom", "top"]),
    slotProps: import_prop_types13.default.object,
    slots: import_prop_types13.default.object,
    stroke: import_prop_types13.default.string,
    tickFontSize: import_prop_types13.default.number,
    tickInterval: import_prop_types13.default.oneOfType([import_prop_types13.default.oneOf(["auto"]), import_prop_types13.default.array, import_prop_types13.default.func]),
    tickLabelInterval: import_prop_types13.default.oneOfType([import_prop_types13.default.oneOf(["auto"]), import_prop_types13.default.func]),
    tickLabelStyle: import_prop_types13.default.object,
    tickMaxStep: import_prop_types13.default.number,
    tickMinStep: import_prop_types13.default.number,
    tickNumber: import_prop_types13.default.number,
    tickSize: import_prop_types13.default.number
  }), import_prop_types13.default.string]),
  children: import_prop_types13.default.node,
  className: import_prop_types13.default.string,
  /**
   * Color palette used to colorize multiple series.
   * @default blueberryTwilightPalette
   */
  colors: import_prop_types13.default.oneOfType([import_prop_types13.default.arrayOf(import_prop_types13.default.string), import_prop_types13.default.func]),
  /**
   * An array of objects that can be used to populate series and axes data using their `dataKey` property.
   */
  dataset: import_prop_types13.default.arrayOf(import_prop_types13.default.object),
  desc: import_prop_types13.default.string,
  /**
   * If `true`, the charts will not listen to the mouse move event.
   * It might break interactive features, but will improve performance.
   * @default false
   */
  disableAxisListener: import_prop_types13.default.bool,
  /**
   * The height of the chart in px. If not defined, it takes the height of the parent element.
   * @default undefined
   */
  height: import_prop_types13.default.number,
  /**
   * Indicate which axis to display the left of the charts.
   * Can be a string (the id of the axis) or an object `ChartsYAxisProps`.
   * @default yAxisIds[0] The id of the first provided axis
   */
  leftAxis: import_prop_types13.default.oneOfType([import_prop_types13.default.shape({
    axisId: import_prop_types13.default.string,
    classes: import_prop_types13.default.object,
    disableLine: import_prop_types13.default.bool,
    disableTicks: import_prop_types13.default.bool,
    fill: import_prop_types13.default.string,
    label: import_prop_types13.default.string,
    labelFontSize: import_prop_types13.default.number,
    labelStyle: import_prop_types13.default.object,
    position: import_prop_types13.default.oneOf(["left", "right"]),
    slotProps: import_prop_types13.default.object,
    slots: import_prop_types13.default.object,
    stroke: import_prop_types13.default.string,
    tickFontSize: import_prop_types13.default.number,
    tickInterval: import_prop_types13.default.oneOfType([import_prop_types13.default.oneOf(["auto"]), import_prop_types13.default.array, import_prop_types13.default.func]),
    tickLabelInterval: import_prop_types13.default.oneOfType([import_prop_types13.default.oneOf(["auto"]), import_prop_types13.default.func]),
    tickLabelStyle: import_prop_types13.default.object,
    tickMaxStep: import_prop_types13.default.number,
    tickMinStep: import_prop_types13.default.number,
    tickNumber: import_prop_types13.default.number,
    tickSize: import_prop_types13.default.number
  }), import_prop_types13.default.string]),
  /**
   * @deprecated Consider using `slotProps.legend` instead.
   */
  legend: import_prop_types13.default.shape({
    classes: import_prop_types13.default.object,
    direction: import_prop_types13.default.oneOf(["column", "row"]),
    hidden: import_prop_types13.default.bool,
    position: import_prop_types13.default.shape({
      horizontal: import_prop_types13.default.oneOf(["left", "middle", "right"]).isRequired,
      vertical: import_prop_types13.default.oneOf(["bottom", "middle", "top"]).isRequired
    }),
    slotProps: import_prop_types13.default.object,
    slots: import_prop_types13.default.object
  }),
  /**
   * The margin between the SVG and the drawing area.
   * It's used for leaving some space for extra information such as the x- and y-axis or legend.
   * Accepts an object with the optional properties: `top`, `bottom`, `left`, and `right`.
   * @default object Depends on the charts type.
   */
  margin: import_prop_types13.default.shape({
    bottom: import_prop_types13.default.number,
    left: import_prop_types13.default.number,
    right: import_prop_types13.default.number,
    top: import_prop_types13.default.number
  }),
  /**
   * Indicate which axis to display the right of the charts.
   * Can be a string (the id of the axis) or an object `ChartsYAxisProps`.
   * @default null
   */
  rightAxis: import_prop_types13.default.oneOfType([import_prop_types13.default.shape({
    axisId: import_prop_types13.default.string,
    classes: import_prop_types13.default.object,
    disableLine: import_prop_types13.default.bool,
    disableTicks: import_prop_types13.default.bool,
    fill: import_prop_types13.default.string,
    label: import_prop_types13.default.string,
    labelFontSize: import_prop_types13.default.number,
    labelStyle: import_prop_types13.default.object,
    position: import_prop_types13.default.oneOf(["left", "right"]),
    slotProps: import_prop_types13.default.object,
    slots: import_prop_types13.default.object,
    stroke: import_prop_types13.default.string,
    tickFontSize: import_prop_types13.default.number,
    tickInterval: import_prop_types13.default.oneOfType([import_prop_types13.default.oneOf(["auto"]), import_prop_types13.default.array, import_prop_types13.default.func]),
    tickLabelInterval: import_prop_types13.default.oneOfType([import_prop_types13.default.oneOf(["auto"]), import_prop_types13.default.func]),
    tickLabelStyle: import_prop_types13.default.object,
    tickMaxStep: import_prop_types13.default.number,
    tickMinStep: import_prop_types13.default.number,
    tickNumber: import_prop_types13.default.number,
    tickSize: import_prop_types13.default.number
  }), import_prop_types13.default.string]),
  series: import_prop_types13.default.arrayOf(import_prop_types13.default.shape({
    color: import_prop_types13.default.string,
    data: import_prop_types13.default.arrayOf(import_prop_types13.default.shape({
      id: import_prop_types13.default.oneOfType([import_prop_types13.default.number, import_prop_types13.default.string]).isRequired,
      x: import_prop_types13.default.number.isRequired,
      y: import_prop_types13.default.number.isRequired
    })).isRequired,
    highlightScope: import_prop_types13.default.shape({
      faded: import_prop_types13.default.oneOf(["global", "none", "series"]),
      highlighted: import_prop_types13.default.oneOf(["item", "none", "series"])
    }),
    id: import_prop_types13.default.string,
    label: import_prop_types13.default.string,
    markerSize: import_prop_types13.default.number,
    type: import_prop_types13.default.oneOf(["scatter"]),
    valueFormatter: import_prop_types13.default.func,
    xAxisKey: import_prop_types13.default.string,
    yAxisKey: import_prop_types13.default.string
  })).isRequired,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types13.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types13.default.object,
  sx: import_prop_types13.default.oneOfType([import_prop_types13.default.arrayOf(import_prop_types13.default.oneOfType([import_prop_types13.default.func, import_prop_types13.default.object, import_prop_types13.default.bool])), import_prop_types13.default.func, import_prop_types13.default.object]),
  title: import_prop_types13.default.string,
  tooltip: import_prop_types13.default.shape({
    axisContent: import_prop_types13.default.elementType,
    classes: import_prop_types13.default.object,
    itemContent: import_prop_types13.default.elementType,
    slotProps: import_prop_types13.default.object,
    slots: import_prop_types13.default.object,
    trigger: import_prop_types13.default.oneOf(["axis", "item", "none"])
  }),
  /**
   * Indicate which axis to display the top of the charts.
   * Can be a string (the id of the axis) or an object `ChartsXAxisProps`.
   * @default null
   */
  topAxis: import_prop_types13.default.oneOfType([import_prop_types13.default.shape({
    axisId: import_prop_types13.default.string,
    classes: import_prop_types13.default.object,
    disableLine: import_prop_types13.default.bool,
    disableTicks: import_prop_types13.default.bool,
    fill: import_prop_types13.default.string,
    label: import_prop_types13.default.string,
    labelFontSize: import_prop_types13.default.number,
    labelStyle: import_prop_types13.default.object,
    position: import_prop_types13.default.oneOf(["bottom", "top"]),
    slotProps: import_prop_types13.default.object,
    slots: import_prop_types13.default.object,
    stroke: import_prop_types13.default.string,
    tickFontSize: import_prop_types13.default.number,
    tickInterval: import_prop_types13.default.oneOfType([import_prop_types13.default.oneOf(["auto"]), import_prop_types13.default.array, import_prop_types13.default.func]),
    tickLabelInterval: import_prop_types13.default.oneOfType([import_prop_types13.default.oneOf(["auto"]), import_prop_types13.default.func]),
    tickLabelStyle: import_prop_types13.default.object,
    tickMaxStep: import_prop_types13.default.number,
    tickMinStep: import_prop_types13.default.number,
    tickNumber: import_prop_types13.default.number,
    tickSize: import_prop_types13.default.number
  }), import_prop_types13.default.string]),
  viewBox: import_prop_types13.default.shape({
    height: import_prop_types13.default.number,
    width: import_prop_types13.default.number,
    x: import_prop_types13.default.number,
    y: import_prop_types13.default.number
  }),
  /**
   * The width of the chart in px. If not defined, it takes the width of the parent element.
   * @default undefined
   */
  width: import_prop_types13.default.number,
  /**
   * The configuration of the x-axes.
   * If not provided, a default axis config is used with id set to `DEFAULT_X_AXIS_KEY`.
   */
  xAxis: import_prop_types13.default.arrayOf(import_prop_types13.default.shape({
    axisId: import_prop_types13.default.string,
    classes: import_prop_types13.default.object,
    data: import_prop_types13.default.array,
    dataKey: import_prop_types13.default.string,
    disableLine: import_prop_types13.default.bool,
    disableTicks: import_prop_types13.default.bool,
    fill: import_prop_types13.default.string,
    hideTooltip: import_prop_types13.default.bool,
    id: import_prop_types13.default.string,
    label: import_prop_types13.default.string,
    labelFontSize: import_prop_types13.default.number,
    labelStyle: import_prop_types13.default.object,
    max: import_prop_types13.default.oneOfType([import_prop_types13.default.instanceOf(Date), import_prop_types13.default.number]),
    min: import_prop_types13.default.oneOfType([import_prop_types13.default.instanceOf(Date), import_prop_types13.default.number]),
    position: import_prop_types13.default.oneOf(["bottom", "left", "right", "top"]),
    scaleType: import_prop_types13.default.oneOf(["band", "linear", "log", "point", "pow", "sqrt", "time", "utc"]),
    slotProps: import_prop_types13.default.object,
    slots: import_prop_types13.default.object,
    stroke: import_prop_types13.default.string,
    tickFontSize: import_prop_types13.default.number,
    tickInterval: import_prop_types13.default.oneOfType([import_prop_types13.default.oneOf(["auto"]), import_prop_types13.default.array, import_prop_types13.default.func]),
    tickLabelInterval: import_prop_types13.default.oneOfType([import_prop_types13.default.oneOf(["auto"]), import_prop_types13.default.func]),
    tickLabelStyle: import_prop_types13.default.object,
    tickMaxStep: import_prop_types13.default.number,
    tickMinStep: import_prop_types13.default.number,
    tickNumber: import_prop_types13.default.number,
    tickSize: import_prop_types13.default.number,
    valueFormatter: import_prop_types13.default.func
  })),
  /**
   * The configuration of the y-axes.
   * If not provided, a default axis config is used with id set to `DEFAULT_Y_AXIS_KEY`.
   */
  yAxis: import_prop_types13.default.arrayOf(import_prop_types13.default.shape({
    axisId: import_prop_types13.default.string,
    classes: import_prop_types13.default.object,
    data: import_prop_types13.default.array,
    dataKey: import_prop_types13.default.string,
    disableLine: import_prop_types13.default.bool,
    disableTicks: import_prop_types13.default.bool,
    fill: import_prop_types13.default.string,
    hideTooltip: import_prop_types13.default.bool,
    id: import_prop_types13.default.string,
    label: import_prop_types13.default.string,
    labelFontSize: import_prop_types13.default.number,
    labelStyle: import_prop_types13.default.object,
    max: import_prop_types13.default.oneOfType([import_prop_types13.default.instanceOf(Date), import_prop_types13.default.number]),
    min: import_prop_types13.default.oneOfType([import_prop_types13.default.instanceOf(Date), import_prop_types13.default.number]),
    position: import_prop_types13.default.oneOf(["bottom", "left", "right", "top"]),
    scaleType: import_prop_types13.default.oneOf(["band", "linear", "log", "point", "pow", "sqrt", "time", "utc"]),
    slotProps: import_prop_types13.default.object,
    slots: import_prop_types13.default.object,
    stroke: import_prop_types13.default.string,
    tickFontSize: import_prop_types13.default.number,
    tickInterval: import_prop_types13.default.oneOfType([import_prop_types13.default.oneOf(["auto"]), import_prop_types13.default.array, import_prop_types13.default.func]),
    tickLabelInterval: import_prop_types13.default.oneOfType([import_prop_types13.default.oneOf(["auto"]), import_prop_types13.default.func]),
    tickLabelStyle: import_prop_types13.default.object,
    tickMaxStep: import_prop_types13.default.number,
    tickMinStep: import_prop_types13.default.number,
    tickNumber: import_prop_types13.default.number,
    tickSize: import_prop_types13.default.number,
    valueFormatter: import_prop_types13.default.func
  }))
} : void 0;

// node_modules/@mui/x-charts/esm/SparkLineChart/SparkLineChart.js
var React18 = __toESM(require_react());
var import_prop_types14 = __toESM(require_prop_types());
var import_jsx_runtime22 = __toESM(require_jsx_runtime());
var import_jsx_runtime23 = __toESM(require_jsx_runtime());
var SPARKLINE_DEFAULT_MARGIN = {
  top: 5,
  bottom: 5,
  left: 5,
  right: 5
};
var SparkLineChart = React18.forwardRef(function SparkLineChart2(props, ref) {
  const {
    xAxis,
    width,
    height,
    margin = SPARKLINE_DEFAULT_MARGIN,
    colors,
    sx,
    showTooltip,
    tooltip,
    showHighlight,
    axisHighlight: inAxisHighlight,
    children,
    slots,
    slotProps,
    data,
    plotType = "line",
    valueFormatter = (v) => v.toString(),
    area,
    curve = "linear"
  } = props;
  const defaultXHighlight = showHighlight && plotType === "bar" ? {
    x: "band"
  } : {
    x: "none"
  };
  const axisHighlight = _extends({}, defaultXHighlight, inAxisHighlight);
  return (0, import_jsx_runtime23.jsxs)(ResponsiveChartContainer, {
    ref,
    series: [_extends({
      type: plotType,
      data,
      valueFormatter
    }, plotType === "bar" ? {} : {
      area,
      curve,
      disableHighlight: !showHighlight
    })],
    width,
    height,
    margin,
    xAxis: [_extends({
      id: DEFAULT_X_AXIS_KEY,
      scaleType: plotType === "bar" ? "band" : "point",
      data: Array.from({
        length: data.length
      }, (_, index) => index),
      hideTooltip: xAxis === void 0
    }, xAxis)],
    colors,
    sx,
    disableAxisListener: (!showTooltip || (tooltip == null ? void 0 : tooltip.trigger) !== "axis") && (axisHighlight == null ? void 0 : axisHighlight.x) === "none" && (axisHighlight == null ? void 0 : axisHighlight.y) === "none",
    children: [plotType === "bar" && (0, import_jsx_runtime22.jsx)(BarPlot, {
      slots,
      slotProps,
      sx: {
        shapeRendering: "auto"
      }
    }), plotType === "line" && (0, import_jsx_runtime23.jsxs)(React18.Fragment, {
      children: [(0, import_jsx_runtime22.jsx)(AreaPlot, {
        slots,
        slotProps
      }), (0, import_jsx_runtime22.jsx)(LinePlot, {
        slots,
        slotProps
      }), (0, import_jsx_runtime22.jsx)(LineHighlightPlot, {
        slots,
        slotProps
      })]
    }), (0, import_jsx_runtime22.jsx)(ChartsAxisHighlight, _extends({}, axisHighlight)), showTooltip && (0, import_jsx_runtime22.jsx)(ChartsTooltip, _extends({}, tooltip, {
      slotProps,
      slots
    })), children]
  });
});
true ? SparkLineChart.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Set to `true` to fill spark line area.
   * Has no effect if plotType='bar'.
   * @default false
   */
  area: import_prop_types14.default.bool,
  axisHighlight: import_prop_types14.default.shape({
    x: import_prop_types14.default.oneOf(["band", "line", "none"]),
    y: import_prop_types14.default.oneOf(["band", "line", "none"])
  }),
  children: import_prop_types14.default.node,
  className: import_prop_types14.default.string,
  /**
   * Color palette used to colorize multiple series.
   * @default blueberryTwilightPalette
   */
  colors: import_prop_types14.default.oneOfType([import_prop_types14.default.arrayOf(import_prop_types14.default.string), import_prop_types14.default.func]),
  /**
   * @default 'linear'
   */
  curve: import_prop_types14.default.oneOf(["catmullRom", "linear", "monotoneX", "monotoneY", "natural", "step", "stepAfter", "stepBefore"]),
  /**
   * Data to plot.
   */
  data: import_prop_types14.default.arrayOf(import_prop_types14.default.number).isRequired,
  /**
   * An array of objects that can be used to populate series and axes data using their `dataKey` property.
   */
  dataset: import_prop_types14.default.arrayOf(import_prop_types14.default.object),
  desc: import_prop_types14.default.string,
  /**
   * If `true`, the charts will not listen to the mouse move event.
   * It might break interactive features, but will improve performance.
   * @default false
   */
  disableAxisListener: import_prop_types14.default.bool,
  /**
   * The height of the chart in px. If not defined, it takes the height of the parent element.
   * @default undefined
   */
  height: import_prop_types14.default.number,
  /**
   * The margin between the SVG and the drawing area.
   * It's used for leaving some space for extra information such as the x- and y-axis or legend.
   * Accepts an object with the optional properties: `top`, `bottom`, `left`, and `right`.
   * @default {
   *   top: 5,
   *   bottom: 5,
   *   left: 5,
   *   right: 5,
   * }
   */
  margin: import_prop_types14.default.shape({
    bottom: import_prop_types14.default.number,
    left: import_prop_types14.default.number,
    right: import_prop_types14.default.number,
    top: import_prop_types14.default.number
  }),
  /**
   * Type of plot used.
   * @default 'line'
   */
  plotType: import_prop_types14.default.oneOf(["bar", "line"]),
  /**
   * Set to `true` to highlight the value.
   * With line, it shows a point.
   * With bar, it shows a highlight band.
   * @default false
   */
  showHighlight: import_prop_types14.default.bool,
  /**
   * Set to `true` to enable the tooltip in the sparkline.
   * @default false
   */
  showTooltip: import_prop_types14.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types14.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types14.default.object,
  sx: import_prop_types14.default.oneOfType([import_prop_types14.default.arrayOf(import_prop_types14.default.oneOfType([import_prop_types14.default.func, import_prop_types14.default.object, import_prop_types14.default.bool])), import_prop_types14.default.func, import_prop_types14.default.object]),
  title: import_prop_types14.default.string,
  tooltip: import_prop_types14.default.shape({
    axisContent: import_prop_types14.default.elementType,
    classes: import_prop_types14.default.object,
    itemContent: import_prop_types14.default.elementType,
    slotProps: import_prop_types14.default.object,
    slots: import_prop_types14.default.object,
    trigger: import_prop_types14.default.oneOf(["axis", "item", "none"])
  }),
  /**
   * Formatter used by the tooltip.
   * @param {number} value The value to format.
   * @returns {string} the formatted value.
   * @default (v: number) => v.toString()
   */
  valueFormatter: import_prop_types14.default.func,
  viewBox: import_prop_types14.default.shape({
    height: import_prop_types14.default.number,
    width: import_prop_types14.default.number,
    x: import_prop_types14.default.number,
    y: import_prop_types14.default.number
  }),
  /**
   * The width of the chart in px. If not defined, it takes the width of the parent element.
   * @default undefined
   */
  width: import_prop_types14.default.number,
  /**
   * The xAxis configuration.
   * Notice it is a single configuration object, not an array of configuration.
   */
  xAxis: import_prop_types14.default.shape({
    axisId: import_prop_types14.default.string,
    classes: import_prop_types14.default.object,
    data: import_prop_types14.default.array,
    dataKey: import_prop_types14.default.string,
    disableLine: import_prop_types14.default.bool,
    disableTicks: import_prop_types14.default.bool,
    fill: import_prop_types14.default.string,
    hideTooltip: import_prop_types14.default.bool,
    id: import_prop_types14.default.string,
    label: import_prop_types14.default.string,
    labelFontSize: import_prop_types14.default.number,
    labelStyle: import_prop_types14.default.object,
    max: import_prop_types14.default.oneOfType([import_prop_types14.default.instanceOf(Date), import_prop_types14.default.number]),
    min: import_prop_types14.default.oneOfType([import_prop_types14.default.instanceOf(Date), import_prop_types14.default.number]),
    position: import_prop_types14.default.oneOf(["bottom", "left", "right", "top"]),
    scaleType: import_prop_types14.default.oneOf(["band", "linear", "log", "point", "pow", "sqrt", "time", "utc"]),
    slotProps: import_prop_types14.default.object,
    slots: import_prop_types14.default.object,
    stroke: import_prop_types14.default.string,
    tickFontSize: import_prop_types14.default.number,
    tickInterval: import_prop_types14.default.oneOfType([import_prop_types14.default.oneOf(["auto"]), import_prop_types14.default.array, import_prop_types14.default.func]),
    tickLabelInterval: import_prop_types14.default.oneOfType([import_prop_types14.default.oneOf(["auto"]), import_prop_types14.default.func]),
    tickLabelStyle: import_prop_types14.default.object,
    tickMaxStep: import_prop_types14.default.number,
    tickMinStep: import_prop_types14.default.number,
    tickNumber: import_prop_types14.default.number,
    tickSize: import_prop_types14.default.number,
    valueFormatter: import_prop_types14.default.func
  })
} : void 0;
export {
  AreaElement,
  AreaElementPath,
  AreaPlot,
  BarChart,
  BarElement,
  BarElementPath,
  BarPlot,
  CartesianContextProvider,
  ChartContainer,
  ChartsAxis,
  ChartsAxisHighlight,
  ChartsAxisHighlightPath,
  ChartsAxisTooltipContent,
  ChartsClipPath,
  ChartsItemTooltipContent,
  ChartsLegend,
  ChartsLegendRoot,
  ChartsReferenceLine,
  ChartsSurface,
  ChartsText,
  ChartsTooltip,
  ChartsXAxis,
  ChartsYAxis,
  DEFAULT_MARGINS,
  DEFAULT_X_AXIS_KEY,
  DEFAULT_Y_AXIS_KEY,
  DefaultChartsAxisTooltipContent,
  DefaultChartsItemTooltipContent,
  DrawingProvider,
  LineChart,
  LineElement,
  LineElementPath,
  LineHighlightElement,
  LineHighlightPlot,
  LinePlot,
  MarkElement,
  MarkPlot,
  PieArc,
  PieArcLabel,
  PieArcLabelPlot,
  PieArcPlot,
  PieChart,
  PiePlot,
  ResponsiveChartContainer,
  Scatter,
  ScatterChart,
  ScatterPlot,
  SparkLineChart,
  areaElementClasses,
  axisClasses,
  barElementClasses,
  blueberryTwilightPalette,
  blueberryTwilightPaletteDark,
  blueberryTwilightPaletteLight,
  chartsAxisHighlightClasses,
  chartsTooltipClasses,
  cheerfulFiestaPalette,
  cheerfulFiestaPaletteDark,
  cheerfulFiestaPaletteLight,
  getAreaElementUtilityClass,
  getAxisHighlightUtilityClass,
  getAxisUtilityClass,
  getBarElementUtilityClass,
  getChartsTooltipUtilityClass,
  getHighlightElementUtilityClass,
  getLegendUtilityClass,
  getLineElementUtilityClass,
  getMarkElementUtilityClass,
  getPieArcLabelUtilityClass,
  getPieArcUtilityClass,
  getReferenceLineUtilityClass,
  getSeriesToDisplay,
  getValueToPositionMapper,
  legendClasses,
  lineElementClasses,
  lineHighlightElementClasses,
  mangoFusionPalette,
  mangoFusionPaletteDark,
  mangoFusionPaletteLight,
  markElementClasses,
  pieArcClasses,
  pieArcLabelClasses,
  referenceLineClasses,
  useDrawingArea,
  useXScale,
  useYScale
};
//# sourceMappingURL=@mui_x-charts.js.map
