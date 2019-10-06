import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import RowHeaderBmi from '../components/RowHeaderBmi'
import RowsBmi from '../components/RowsBmi';
import TableGenerall from '../components/TableGenerall';

import { BarChart } from 'react-easy-chart';

class BmiDetail extends Component {
    
    renderBMICard() {
    
        return _.map(this.props.bmis, (bmi, key) => {

            var zakres = '';

            if(bmi.bmi <= 18.49) {
                zakres = 'Niedowaga';
            } else if (bmi.bmi >=18.50 && bmi.bmi <= 24.99) {
                zakres = 'Prawidłowa';
            } else if (bmi.bmi > 24.99) {
                zakres = 'Nadwaga';
            }
            return <RowsBmi key={key} 
                         measure_id={ bmi.measure_id } 
                         bmi={bmi.bmi}
                         weight={bmi.weight}   
                         dateBmiMeasure={bmi.dateBmiMeasure} 
                         zakres={zakres}
                    />;
        });
    }
    
    renderChartsBMI() {
    
        return _.map(this.props.bmis, (bmi, key) => {

            var bmiX = bmi.measure_id;
            var bmiY = bmi.bmi;
            var colorToShow;
            if(bmi.bmi <= 18.49) {
                colorToShow = '#d9534f';
            } else if (bmi.bmi >=18.50 && bmi.bmi <= 24.99) {
                colorToShow = '#5cb85c';
            } else if (bmi.bmi > 24.99) {
                colorToShow = '#f0ad4e';
            }

            return {x: bmiX, y: bmiY, color: colorToShow };
                
        });
    }
  
    renderChartsWeight() {
    
        return _.map(this.props.bmis, (bmi, key) => {
                
                var bmiX = bmi.measure_id;
                var bmiY = bmi.weight;
                var colorToShowWeight = '#000000';
                
                if(bmi.bmi <= 18.49) {
                    colorToShowWeight = '#d9534f';
                } else if (bmi.bmi >=18.50 && bmi.bmi <= 24.99) {
                    colorToShowWeight = '#5cb85c';
                } else if (bmi.bmi > 24.99) {
                    colorToShowWeight = '#f0ad4e';
                }
                return {x: bmiX, y: bmiY, color: colorToShowWeight };
                
        });
    }

    render() {
    
        const { bmi } = this.props;

        if (!bmi)
            return null;

            return (
            
                    <div class="main">
                        <div class="containerTable">
                        <TableGenerall thead={<RowHeaderBmi></RowHeaderBmi>} tbody={ this.renderBMICard() }></TableGenerall>
                        </div>

                        <div class="containerTable chartPhone">
                        <h2>Wykres BMI </h2>
                        <div className="pXCharts">BMI</div>
                        <BarChart
                            axes
                            axisLabels={{x: 'BMI', y: 'Numer pomiaru'}}
                            colorBars                    
                            grid
                            height={450}
                            width={750}
                            barWidth={10}
                            interpolate={'cardinal'}
                            data={this.renderChartsBMI()}
                            margin={{top: 10, right: 0, bottom: 50, left: 30}}
                        />
                        <div className="pYCharts">Numer pomiaru</div>
                    </div>
                    <div class="containerTable chartPhone">
                        <h2>Wykres wagi </h2>
                        <div className="pXCharts">Waga [kg]</div>
                        <BarChart
                            axes
                            margin={{top: 10, right: 10, bottom: 50, left: 30}}
                            axisLabels={{x: 'Waga', y: 'Numer pomiaru'}}
                            colorBars
                            grid
                            height={450}
                            width={750}
                            interpolate={'cardinal'}
                            labels
                            data={this.renderChartsWeight()}   
                        />
                        <div className="pYCharts">Numer pomiaru</div>
                    </div>  
                </div>
        );
    }
};

function mapStateToProps(state, ownProps) {
  return { 
      bmis: state.bmi[ownProps.match.params.id], 
      user: state.user, 
      bmi: state.bmi 
  };
}

export default connect(mapStateToProps)(BmiDetail);