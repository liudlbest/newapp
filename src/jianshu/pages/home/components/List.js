import React from 'react';
import { connect } from 'react-redux';
import { ListInfo, ListItem } from "../style";
import { actionCreators } from '../store'

class  List extends React.Component {

  componentDidMount() {
    this.props.initArticleList();
  }

  render(){
    const { list } = this.props;
    return (
        <div>
          {
            list.map((item) => (
              <ListItem key={item.get("id")}>
                <img className="list-pic" alt={item.get("title")} src={item.get("src")}/>
                <ListInfo>
                  <h3 className="title">{item.get("title")}</h3>
                  <p className="desc">{item.get("desc")}</p>
                </ListInfo>
              </ListItem>
            ))
          }
        </div>
    )
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['home', 'articleList'])
  }
}

const mapDispatch = (dispatch) => ({
  initArticleList: () => {
    dispatch(actionCreators.initArticleList())
  }
})

export default connect(mapState, mapDispatch)(List);