import React from 'react'

import { DetailWrapper, Header, Content } from './style'

const Detail = () => {
  return (
    <DetailWrapper>
      <Header>你的工作要对得起你的工资</Header>
      <Content>
        <img alt="" src="https://upload-images.jianshu.io/upload_images/1123393-43a9c75c01927aa2.png?imageMogr2/auto-orient/strip|imageView2/2/w/1125/format/webp" />
        <p>晚会（下午5点开始）集体朗读内容：</p>
        <p>稻盛和夫六项精进：</p>
        <p>001 付出不亚于任何人的努力</p>
        <p>002 要谦虚，不要骄傲</p>
        <p>003 要每天都反省</p>
        <p>004 活着，就要感谢 </p>
        <p>005 积善行，思利他</p>
        <p>006 不要有感性的烦恼</p>
      </Content>
    </DetailWrapper>
  )
}

export default Detail;