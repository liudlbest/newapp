import React, { useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { WriterWrapper, WriterHeader, WriterInfo, WriterItem } from '../style'
import { actionCreators } from '../store'

const Writer = (props) => {
  
  const writerList = useSelector( state =>  state.getIn(['home', 'writerList']))

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionCreators.initWriterList());
  },[dispatch])

  // 推荐作者列表
  const getWriterList = () => {
    return (
      writerList.map((item) => (
        <WriterItem key={item.get("id")}>
          <img className="writer-pic" src={item.get("imgUrl")} alt="" />
          <div className="writer-name">{item.get("name")}</div>
          <p className="writer-desc">写了{item.get("wordsNum")}k字·{item.get("likesNum")}k喜欢</p>
          <div className="writer-follow">+关注</div>
        </WriterItem>
      ))
    )
  }

  return (
    <WriterWrapper>
      <WriterHeader>
        <span className="left">推荐作者</span>
        <span className="right">
          {/* 刷新图标 */}
          <span className="iconfont spin">&#xe63a;</span>
          换一批
        </span>
      </WriterHeader>
      <WriterInfo>
        {/* 推荐作者列表 */}
        {getWriterList()}
      </WriterInfo>
    </WriterWrapper>
  )
}

export default Writer;