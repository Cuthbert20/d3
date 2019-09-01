import React, { Component } from 'react'
import './Chart.css'
import * as d3 from 'd3'

export default class Charts extends Component {
    render() {
        // const dataset = [1, 2, 3, 4, 5, 9];
        // d3.select('body')
        //     .selectAll('p')
        //     .data(dataset)
        //     .enter()
        //     .append('p')
        //     // .text('D3 is so cool!')
        //     .text(function(d) { return d; })
        const dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];
        //setting width and height of svg & padding
        const svgWidth = 500, svgHeight = 300, barPadding = 5;
        //dividing svgWidth by the length of the dataset array
        const barWidth = (svgWidth / dataset.length)

            //selecting our svg container and giving it the width and height that we set above.
        var svg = d3.select('svg')
        .attr("width", svgWidth)
        .attr("height", svgHeight);
            //creating barChart selecting all rectangles, since we don't have any in our svg it will return an empty selection
        const barChart = svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("y", function(d) {
                return svgHeight -d
            })
            .attr("height", function(d) {
                return d;
            })
            .attr("width", barWidth - barPadding)
            .attr("transform", function (d, i) {
        var translate = [barWidth * i, 0]; 
        return "translate("+ translate +")";
    });

        const text = svg.selectAll("text")
                .data(dataset)
                .enter()
                .append("text")
                .text(function (d) {
                    return d;
                })
                .attr("y", function(d, i){
                    return svgHeight - d -2;
                })
                .attr("x", function(d, i){
                    return barWidth * i;
                })
                .attr("fill", "#A64C38")
        return (
            <div>
                
            </div>
        )
    }
}

