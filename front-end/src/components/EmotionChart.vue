<template>
  <div class="results emotion-chart" id="results"></div>
</template>

<script>
import * as d3 from 'd3'

export default {
  name: 'emotion-chart',
  props: {
    data: {
      type: Array,
    },
    options: {
      type: Object,
      default: () => {
        return {
          w: 600, //Width of the circle
          h: 600, //Height of the circle
          margin: { top: 10, right: 10, bottom: 10, left: 10 }, //The margins of the SVG
          levels: 3, //How many levels or inner circles should there be drawn
          maxValue: 0, //What is the value that the biggest circle will represent
          labelFactor: 1.25, //How much farther than the radius of the outer circle should the labels be placed
          wrapWidth: 60, //The number of pixels after which a label needs to be given a new line
          opacityArea: 0.35, //The opacity of the area of the blob
          dotRadius: 4, //The size of the colored circles of each blog
          opacityCircles: 0.1, //The opacity of the circles of each blob
          strokeWidth: 2, //The width of the stroke around each blob
          roundStrokes: false, //If true the area and stroke will follow a round path (cardinal-closed)
          color: d3.scale.category10(), //Color function
        }
      },
    },
  },
  methods: {
    init() {
      //If the supplied maxValue is smaller than the actual one, replace by the max in the data
      this.maxValue = Math.max(
        this.options.maxValue,
        d3.max(this.data, function(i) {
          return d3.max(
            i.map(function(o) {
              return o.value
            }),
          )
        }),
      )

      this.allAxis = this.data[0].map(i => {
        return i.axis
      }) //Names of each axis
      this.total = this.allAxis.length //The number of different axes
      this.radius = Math.min(this.options.w / 3, this.options.h / 3) //Radius of the outermost circle
      this.numberFormat = d3.format('%') //Percentage formatting
      this.angleSlice = (Math.PI * 2) / this.total //The width in radians of each "slice"

      //Scale for the radius
      this.rScale = d3.scale
        .linear()
        .range([0, this.radius])
        .domain([0, this.maxValue])
    },
    drawChart() {
      //Remove whatever chart with the same id/class was present before
      d3.select(this.$el)
        .select('svg')
        .remove()

      //Initiate the radar chart SVG
      this.svg = d3
        .select(this.$el)
        .append('svg')
        .attr('width', 'auto')
        .attr('viewBox', `0 0 ${this.options.w} ${this.options.h}`)
        .attr('class', 'radar')

      //Append a g element
      let g = this.svg
        .append('g')
        .attr(
          'transform',
          'translate(' +
            (this.options.w / 2 + this.options.margin.left) +
            ',' +
            (this.options.h / 2 + this.options.margin.top) +
            ')',
        )

      //Filter for the outside glow
      let filter = g
          .append('defs')
          .append('filter')
          .attr('id', 'glow'),
        feGaussianBlur = filter
          .append('feGaussianBlur')
          .attr('stdDeviation', '2.5')
          .attr('result', 'coloredBlur'),
        feMerge = filter.append('feMerge'),
        feMergeNode_1 = feMerge.append('feMergeNode').attr('in', 'coloredBlur'),
        feMergeNode_2 = feMerge
          .append('feMergeNode')
          .attr('in', 'SourceGraphic')

      //Wrapper for the grid & axes
      let axisGrid = g.append('g').attr('class', 'axisWrapper')

      //Draw the background circles
      axisGrid
        .selectAll('.levels')
        .data(d3.range(1, this.options.levels + 1).reverse())
        .enter()
        .append('circle')
        .attr('class', 'gridCircle')
        .attr('r', d => {
          return (this.radius / this.options.levels) * d
        })
        .style('fill', '#CDCDCD')
        .style('stroke', '#CDCDCD')
        .style('fill-opacity', this.options.opacityCircles)
        .style('filter', 'url(#glow)')

      //Text indicating at what % each level is
      axisGrid
        .selectAll('.axisLabel')
        .data(d3.range(1, this.options.levels + 1).reverse())
        .enter()
        .append('text')
        .attr('class', 'axisLabel')
        .attr('x', 4)
        .attr('y', d => {
          return (-d * this.radius) / this.options.levels
        })
        .attr('dy', '0.4em')
        .style('font-size', '10px')
        .attr('fill', '#737373')
        .text(d => {
          return this.numberFormat((this.maxValue * d) / this.options.levels)
        })

      //Create the straight lines radiating outward from the center
      let axis = axisGrid
        .selectAll('.axis')
        .data(this.allAxis)
        .enter()
        .append('g')
        .attr('class', 'axis')
      //Append the lines
      axis
        .append('line')
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', (d, i) => {
          return (
            this.rScale(this.maxValue * 1.1) *
            Math.cos(this.angleSlice * i - Math.PI / 2)
          )
        })
        .attr('y2', (d, i) => {
          return (
            this.rScale(this.maxValue * 1.1) *
            Math.sin(this.angleSlice * i - Math.PI / 2)
          )
        })
        .attr('class', 'line')
        .style('stroke', 'white')
        .style('stroke-width', '2px')

      //Append the labels at each axis
      axis
        .append('text')
        .attr('class', 'legend')
        .style('font-size', '11px')
        .attr('text-anchor', 'middle')
        .attr('dy', '0.35em')
        .attr('x', (d, i) => {
          return (
            this.rScale(this.maxValue * this.options.labelFactor) *
            Math.cos(this.angleSlice * i - Math.PI / 2)
          )
        })
        .attr('y', (d, i) => {
          return (
            this.rScale(this.maxValue * this.options.labelFactor) *
            Math.sin(this.angleSlice * i - Math.PI / 2)
          )
        })
        .text(d => {
          return d
        })
        .call(this.wrap, this.options.wrapWidth)

      /////////////////////////////////////////////////////////
      ///////////// Draw the radar chart blobs ////////////////
      /////////////////////////////////////////////////////////

      //The radial line function
      let radarLine = d3.svg.line
        .radial()
        .interpolate('linear-closed')
        .radius(d => {
          return this.rScale(d.value)
        })
        .angle((d, i) => {
          return i * this.angleSlice
        })

      if (this.options.roundStrokes) {
        radarLine.interpolate('cardinal-closed')
      }

      //Create a wrapper for the blobs
      let blobWrapper = g
        .selectAll('.radarWrapper')
        .data(this.data)
        .enter()
        .append('g')
        .attr('class', 'radarWrapper')

      //Append the backgrounds
      blobWrapper
        .append('path')
        .attr('class', 'radarArea')
        .attr('d', d => {
          return radarLine(d)
        })
        .style('fill', (d, i) => {
          return this.options.color(i)
        })
        .style('fill-opacity', this.options.opacityArea)
        .on('mouseover', function(d, i) {
          //Dim all blobs
          d3.selectAll('.radarArea')
            .transition()
            .duration(200)
            .style('fill-opacity', 0.1)
          //Bring back the hovered over blob
          d3.select(this)
            .transition()
            .duration(200)
            .style('fill-opacity', 0.7)
        })
        .on('mouseout', () => {
          //Bring back all blobs
          d3.selectAll('.radarArea')
            .transition()
            .duration(200)
            .style('fill-opacity', this.options.opacityArea)
        })

      //Create the outlines
      blobWrapper
        .append('path')
        .attr('class', 'radarStroke')
        .attr('d', d => {
          return radarLine(d)
        })
        .style('stroke-width', this.options.strokeWidth + 'px')
        .style('stroke', (d, i) => {
          return this.options.color(i)
        })
        .style('fill', 'none')
        .style('filter', 'url(#glow)')

      //Append the circles
      blobWrapper
        .selectAll('.radarCircle')
        .data(d => {
          return d
        })
        .enter()
        .append('circle')
        .attr('class', 'radarCircle')
        .attr('r', this.options.dotRadius)
        .attr('cx', (d, i) => {
          return (
            this.rScale(d.value) * Math.cos(this.angleSlice * i - Math.PI / 2)
          )
        })
        .attr('cy', (d, i) => {
          return (
            this.rScale(d.value) * Math.sin(this.angleSlice * i - Math.PI / 2)
          )
        })
        .style('fill', (d, i, j) => {
          return this.options.color(j)
        })
        .style('fill-opacity', 0.8)

      /////////////////////////////////////////////////////////
      //////// Append invisible circles for tooltip ///////////
      /////////////////////////////////////////////////////////

      //Wrapper for the invisible circles on top
      let blobCircleWrapper = g
        .selectAll('.radarCircleWrapper')
        .data(this.data)
        .enter()
        .append('g')
        .attr('class', 'radarCircleWrapper')

      //Append a set of invisible circles on top for the mouseover pop-up
      blobCircleWrapper
        .selectAll('.radarInvisibleCircle')
        .data(d => {
          return d
        })
        .enter()
        .append('circle')
        .attr('class', 'radarInvisibleCircle')
        .attr('r', this.options.dotRadius * 1.5)
        .attr('cx', (d, i) => {
          return (
            this.rScale(d.value) * Math.cos(this.angleSlice * i - Math.PI / 2)
          )
        })
        .attr('cy', (d, i) => {
          return (
            this.rScale(d.value) * Math.sin(this.angleSlice * i - Math.PI / 2)
          )
        })
        .style('fill', 'none')
        .style('pointer-events', 'all')
        .on('mouseover', function(d, i) {
          newX = parseFloat(d3.select(this).attr('cx')) - 10
          newY = parseFloat(d3.select(this).attr('cy')) - 10

          tooltip
            .attr('x', newX)
            .attr('y', newY)
            .text(Format(d.value))
            .transition()
            .duration(200)
            .style('opacity', 1)
        })
        .on('mouseout', () => {
          tooltip
            .transition()
            .duration(200)
            .style('opacity', 0)
        })

      //Set up the small tooltip for when you hover over a circle
      let tooltip = g
        .append('text')
        .attr('class', 'tooltip')
        .style('opacity', 0)
    },
    wrap(text, width) {
      text.each(function() {
        let text = d3.select(this),
          words = text
            .text()
            .split(/\s+/)
            .reverse(),
          word,
          line = [],
          lineNumber = 0,
          lineHeight = 1.4, // ems
          y = text.attr('y'),
          x = text.attr('x'),
          dy = parseFloat(text.attr('dy')),
          tspan = text
            .text(null)
            .append('tspan')
            .attr('x', x)
            .attr('y', y)
            .attr('dy', dy + 'em')

        while ((word = words.pop())) {
          line.push(word)
          tspan.text(line.join(' '))
          if (tspan.node().getComputedTextLength() > width) {
            line.pop()
            tspan.text(line.join(' '))
            line = [word]
            tspan = text
              .append('tspan')
              .attr('x', x)
              .attr('y', y)
              .attr('dy', ++lineNumber * lineHeight + dy + 'em')
              .text(word)
          }
        }
      })
    },
  },
  mounted() {
    this.init()
    this.drawChart()
  },
}
</script>

<style>
.emotion-chart {
  max-width: 100%;
  max-height: 100%;
}
</style>
