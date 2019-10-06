import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import RowsTraining from '../components/RowsTraining';
import RowHeaderTraining from '../components/RowHeaderTraining';
import TableGenerall from '../components/TableGenerall';
import { BarChart } from 'react-easy-chart';

function getYoutubeLikeToDisplay(millisec) {
        var seconds = (millisec / 1000).toFixed(0);
        var minutes = Math.floor(seconds / 60);
        var hours = "";
        if (minutes > 59) {
            hours = Math.floor(minutes / 60);
            hours = (hours >= 10) ? hours : "0" + hours;
            minutes = minutes - (hours * 60);
            minutes = (minutes >= 10) ? minutes : "0" + minutes;
        }

        seconds = Math.floor(seconds % 60);
        seconds = (seconds >= 10) ? seconds : "0" + seconds;
        if (hours !== "") {
            return hours + ":" + minutes + ":" + seconds;
        }
        return "00:" + ((minutes >= 10) ? minutes : "0" + minutes) + ":" + seconds;
    }
    
class TrainingDetail extends Component {
            
    renderRows() {
            
        return _.map(this.props.step, (step, key) => {

            var duration = null;
            Math.round((step.timeStop) - (step.timeStart));

            var timeEndTraining = null;
            
            if(step.timeStop == null) {
                timeEndTraining = Date.now(); 
                var duration = Math.round((timeEndTraining) - (step.timeStart));
            } else {
                timeEndTraining = step.timeStop;
                var duration = Math.round((timeEndTraining) - (step.timeStart));
             }
                         
            return <RowsTraining key={key} 
                         step_id={ step.step_id } 
                         stepCounter={step.stepCounter}
                         duration={ getYoutubeLikeToDisplay(duration) }  
                         startTime={ step.timeStart }
                         stopTime={ timeEndTraining }    
                    />;
        });
    }
  
  renderCharts() {
    
            return _.map(this.props.step, (step, key) => {

                var stepX = step.step_id;
                var stepY = step.stepCounter;
                return {x: stepX, y: stepY };
                
    });
  }
    
    render() {

      const { step } = this.props;

      if (!step)
        return null;

        return (
            <div class="main">
                <div class="containerTable">
                <TableGenerall thead={<RowHeaderTraining></RowHeaderTraining>} tbody={ this.renderRows() }></TableGenerall>
                </div>
                <div class="containerTable chartPhone">
                    <div style={{display: 'inline-block'}}>
                        <h2>Wykres pokonanych kroków</h2>
                    <div className="pXChartsTr">Kroki</div>
                        <BarChart
                            axes
                            axisLabels={{x: 'Kroki', y: 'Treningi'}}
                            colorBars
                            grid
                            height={450}
                            width={750}
                            interpolate={'cardinal'}
                            data={this.renderCharts()}
                            margin={{top: 10, right: 0, bottom: 50, left: 40}}
                        />
                        <div className="pYChartsTr">Trening</div>
                    </div>
                </div>
            </div>
        );
      }
};

function mapStateToProps(state, ownProps) {
  return { 
      step: state.steps[ownProps.match.params.id], 
      user: state.user, 
      steps: state.steps 
  };
}

export default connect(mapStateToProps)(TrainingDetail);