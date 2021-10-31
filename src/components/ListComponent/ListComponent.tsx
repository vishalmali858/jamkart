import { List } from 'antd';
import SkeletonComponent from '../SkeletonComponent/SkeletonComponent';

interface Iprops {
  children?: any;
  gridValues?: any;
  componentToRender?: any;
  itemLayout?: any;
  headerToRender?: any
  footerToRender?: any;
  hasBorder?: any;
  isLoading?: any;
  addListInMeta?: boolean;
  extraComponentToRenderArray?: any;
}

function ListComponent(props: Iprops) {
  const { extraComponentToRenderArray, hasBorder = true, addListInMeta = false, gridValues, componentToRender, children, headerToRender, footerToRender, itemLayout = "horizontal", isLoading = false } = props;
  return (
    <List
      itemLayout={itemLayout}
      grid={gridValues}
      // split={false}
      header={headerToRender}
      footer={footerToRender}
      bordered={hasBorder}
      dataSource={componentToRender}
      locale={{
        emptyText: <SkeletonComponent avatarValue={true} isLoading={isLoading}></SkeletonComponent>
      }}
      renderItem={(item: any, indx: any) => (
        <SkeletonComponent isLoading={isLoading}>
          {addListInMeta ? <List.Item.Meta {...item} /> : <List.Item extra={extraComponentToRenderArray && extraComponentToRenderArray[indx] ? extraComponentToRenderArray[indx] : null}>{item} </List.Item>}
        </SkeletonComponent>
      )}
    >
      {children}
    </List>
  );
}

export default ListComponent;