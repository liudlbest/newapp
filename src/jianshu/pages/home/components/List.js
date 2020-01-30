import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { ListInfo, ListItem, GetMoreArticles } from "../style";
import { actionCreators } from '../store'

class  List extends React.Component {

  componentDidMount() {
    this.props.initArticleList();
  }

  render(){
    const { list, getMoreArticles, articlePage } = this.props;
    console.log(articlePage)
    return (
        <div>
          {
            list.map((item, index) => (
              <Link key={index} to='/detail'>
                <ListItem>
                  <img className="list-pic" alt={item.get("title")} src={item.get("src")}/>
                  <ListInfo>
                    <h3 className="title">{item.get("title")}</h3>
                    <p className="desc">{item.get("desc")}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            ))
          }
          <GetMoreArticles onClick={() => getMoreArticles(articlePage + 1)}>阅读更多</GetMoreArticles>
        </div>
    )
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['home', 'articleList']),
    articlePage: state.getIn(['home', 'articlePage'])
  }
}

const mapDispatch = (dispatch) => ({
  initArticleList: () => {
    dispatch(actionCreators.initArticleList())
  },
  getMoreArticles: (page) => {
    dispatch(actionCreators.getMoreArticles(page))
  }
})

export default connect(mapState, mapDispatch)(List);