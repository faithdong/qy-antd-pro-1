import React, { PureComponent } from 'react';
import {  Table } from 'antd';


import PageHeaderLayout from '../../layouts/PageHeaderLayout';

import styles from './ExpendList.less';


export default class ExpendList extends PureComponent {
  componentDidMount() {
    this.props.dispatch({
      type: 'list/fetch',
      payload: {
        count: 8,
      },
    });
  }

  render() {
    // const { list: { list }, loading } = this.props;
    const columns = [
      { title: 'Name', dataIndex: 'name', key: 'name' },
      { title: 'Age', dataIndex: 'age', key: 'age' },
      { title: 'Address', dataIndex: 'address', key: 'address' },
      { title: 'Action', dataIndex: '', key: 'x', render: () => <a href="#">Delete</a> },
    ];
    
    const data = [
      { key: 1, name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park', description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.' },
      { key: 2, name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park', description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.' },
      { key: 3, name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park', description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.' },
    ];
    return (
      <PageHeaderLayout title="展开列表" >
        <div className={styles.cardList}>
          <Table
            rowKey="id"
            // loading={loading}
            expandedRowRender={record => <p>{record.description}</p>}
            dataSource={data}
            columns={columns}
          />
        </div>
      </PageHeaderLayout>
    );
  }
}
