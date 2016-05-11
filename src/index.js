import React, {Component} from 'react';
import c3 from 'c3';

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.chart = null;
    console.log(props)
  }

  generateChart() {
    const {data, config, axis, zoom, subchart} = this.props;
    const {bindto, ...restConfig} = config;
    const c3Confg = {
      bindto: `#${bindto}`,
      ...restConfig,
      data,
      zoom,
      axis,
      subchart
    };

    if(data.columns.length > 0) {
      this.chart = c3.generate(c3Confg);
    } else {
      this.destroyChart();
    }
  }

  destroyChart() {
    if(this.chart) {
      this.chart.destroy();
    }
  }

  componentDidMount() {
    this.generateChart();
  }

  componentDidUpdate() {
    this.generateChart();
  }

  componentWillUnmount() {
    this.destroyChart();
  }

  render() {
    return (
      <div id={this.props.config.bindto}></div>
    );
  }
}

Chart.propTypes = {
  data: React.PropTypes.object,
  config: React.PropTypes.object,
  axis: React.PropTypes.object,
  zoom: React.PropTypes.object,
  subchart: React.PropTypes.object
};

Chart.defaultProps = {
  config: {
    bindto: 'chart-id'
  },
  data: {
    columns: []
  }
};
