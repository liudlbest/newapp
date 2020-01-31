import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { ListInfo, ListItem, GetMoreArticles } from "../style";
import { actionCreators } from '../store'

const List = (props) => {

  const list = useSelector( state => 
    state.getIn(['home', 'articleList'])
  );
  const articlePage = useSelector( state => 
    state.getIn(['home', 'articlePage'])
  );
  const dispatch = useDispatch();

  useEffect( () => {
      dispatch(actionCreators.initArticleList());
  }, [dispatch])

  const getList = () => {
    return (
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
    )
  } 

  return (
      <div>
        { getList() }
        <GetMoreArticles onClick={() => dispatch(actionCreators.getMoreArticles(articlePage + 1))}>阅读更多</GetMoreArticles>
      </div>
  )
}


export default List;