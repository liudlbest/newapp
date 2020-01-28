import React from 'react';
import { connect } from 'react-redux'
import { TopicWrapper, TopicItem } from '../style';
import { actionCreators } from '../store';

class Topic extends React.Component {

  componentDidMount(){
    this.props.initTopicList();
  }

  getTopicList(){
    const { topicList } = this.props;
    return (
      topicList.map( (item) => (
        <TopicItem key={item.get('id')}>{item.get('title')}</TopicItem>
      ))
    )
  }

  

  render(){
    return (
      <TopicWrapper>
        {this.getTopicList()}
      </TopicWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  topicList: state.getIn(['home', 'topicList'])
})

const mapDispatch = (dispatch) => ({
  initTopicList: () => {
    dispatch(actionCreators.initTopicList());
  }
})

export default connect(mapStateToProps, mapDispatch)(Topic);